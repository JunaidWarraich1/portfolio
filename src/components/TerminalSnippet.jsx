import React, { useState } from 'react';
import { Terminal, Copy, Check, Code2, Server, ShieldCheck, Database } from 'lucide-react';

const SNIPPETS = [
  {
    id: 'ledger',
    title: 'ledger_invariants.py',
    badge: 'Fintech Wallet Engine',
    desc: 'Pessimistic row locking & atomic double-entry balance preservation',
    code: `# wallet_system/services/ledger.py
from sqlalchemy.orm import Session
from fastapi import HTTPException

def execute_double_entry_transfer(
    db: Session, sender_id: str, receiver_id: str, amount_cents: int, idempotency_key: str
) -> TransferReceipt:
    """Enforces atomic double-entry ledger invariants with row-level locks."""
    # 1. Check idempotency cache to prevent duplicate client retries
    if cached := check_idempotency(db, idempotency_key):
        return cached

    with db.begin():
        # 2. Pessimistic lock on sender row (prevents race-condition double spending)
        sender = db.query(Account).filter_by(id=sender_id).with_for_update().one()
        if sender.balance_cents < amount_cents:
            raise HTTPException(status_code=400, detail="INSUFFICIENT_FUNDS")

        receiver = db.query(Account).filter_by(id=receiver_id).with_for_update().one()

        # 3. Post matching double-entry legs: Debit = Credit
        sender.balance_cents -= amount_cents
        receiver.balance_cents += amount_cents

        audit_entry = LedgerTransaction(
            debit_account=sender_id,
            credit_account=receiver_id,
            amount_cents=amount_cents,
            idempotency_hash=hash_key(idempotency_key)
        )
        db.add(audit_entry)
        
    return TransferReceipt(status="COMMITTED", invariant_verified=True)`
  },
  {
    id: 'hamilton',
    title: 'hamilton_quota.js',
    badge: 'EquiLedger Math Engine',
    desc: 'Hamilton / Hare-Niemeyer largest-remainder penny rounding algorithm',
    code: `// equiledger/algorithms/hamiltonQuota.js
/**
 * Eliminates floating-point penny leakage across equity/invoice splits.
 * Uses the Largest-Remainder (Hamilton/Hare-Niemeyer) method.
 */
export function allocateExactCents(totalCents, weights) {
  const sumWeights = weights.reduce((acc, w) => acc + w.quota, 0);
  
  // Phase 1: Compute integer floor allocation & fractional remainders
  const allocations = weights.map((w, idx) => {
    const rawExact = (totalCents * w.quota) / sumWeights;
    const integerCents = Math.floor(rawExact);
    const remainder = rawExact - integerCents;
    return { index: idx, id: w.id, cents: integerCents, remainder };
  });

  // Phase 2: Distribute remaining cents strictly by highest remainder
  let unassignedCents = totalCents - allocations.reduce((s, a) => s + a.cents, 0);
  allocations.sort((a, b) => b.remainder - a.remainder);

  for (let i = 0; i < unassignedCents; i++) {
    allocations[i].cents += 1;
  }

  // Restore original ordering & assert zero-leakage invariant
  allocations.sort((a, b) => a.index - b.index);
  const totalAllocated = allocations.reduce((s, a) => s + a.cents, 0);
  console.assert(totalAllocated === totalCents, "Rounding error invariant failed!");
  
  return allocations;
}`
  },
  {
    id: 'backtracking',
    title: 'vault_dispenser.py',
    badge: 'Grand Bank ATM',
    desc: 'Backtracking solver for optimal multi-denomination cash payout',
    code: `# atm_app/models/dispenser.py
class BacktrackingCashDispenser:
    """Calculates optimal note distribution with limited vault inventory."""
    def __init__(self, vault_inventory: dict[int, int]):
        # vault_inventory e.g. {5000: 10, 1000: 30, 500: 40}
        self.inventory = vault_inventory

    def calculate_payout(self, target_amount: int) -> dict[int, int] | None:
        denominations = sorted(self.inventory.keys(), reverse=True)
        best_payout = {}

        def backtrack(rem_amount: int, idx: int, current_payout: dict) -> bool:
            if rem_amount == 0:
                best_payout.update(current_payout)
                return True
            if idx >= len(denominations):
                return False

            denom = denominations[idx]
            max_notes = min(rem_amount // denom, self.inventory.get(denom, 0))

            for count in range(max_notes, -1, -1):
                if count > 0:
                    current_payout[denom] = count
                elif denom in current_payout:
                    del current_payout[denom]

                if backtrack(rem_amount - (count * denom), idx + 1, current_payout):
                    return True
            return False

        if backtrack(target_amount, 0, {}):
            return best_payout
        return None  # Vault cannot fulfill exact denomination`
  },
  {
    id: 'workflow_db',
    title: 'neon_postgres.py',
    badge: 'WorkFlow Pro Backend',
    desc: 'Cloud PostgreSQL 17 async relational mapping with connection pooling',
    code: `# workflow_pro/backend/database.py
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgresql://neondb_owner:***@ep-cool-butterfly-a2s6v9d7.eu-central-1.aws.neon.tech/neondb?sslmode=require"
)

engine = create_engine(
    DATABASE_URL,
    pool_size=10,
    max_overflow=20,
    pool_pre_ping=True,      # Health-checks connection before queries
    pool_recycle=300         # Recycles stale cloud serverless connections
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    """Dependency provider injecting scoped sessions per HTTP request."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()`
  }
];

export default function TerminalSnippet() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const snippet = SNIPPETS[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>ARCHITECTURAL INTEGRITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Code Written for Production Invariants
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Inspect the actual backend logic powering my systems. From atomic double-entry banking transactions to fractional currency algorithms.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#080c1e] shadow-2xl shadow-blue-950/40">
          
          {/* Top Bar with OS Dots and Tabs */}
          <div className="bg-[#0c1126] border-b border-white/[0.08] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            
            {/* Window Controls & Title */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-slate-400 hidden sm:inline-block">
                bash ~ junaid@warraich-systems
              </span>
            </div>

            {/* Snippet Tabs */}
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1">
              {SNIPPETS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    activeTab === index
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.title}</span>
                </button>
              ))}
            </div>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="px-2.5 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-mono flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

          </div>

          {/* Subheader info bar */}
          <div className="bg-[#0a0f24] px-5 py-2.5 border-b border-white/[0.05] flex items-center justify-between text-xs font-mono">
            <span className="text-emerald-400 font-semibold">{snippet.badge}</span>
            <span className="text-slate-400 hidden sm:inline">{snippet.desc}</span>
          </div>

          {/* Code Window with line numbers and styling */}
          <div className="p-4 sm:p-6 overflow-x-auto font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 bg-[#060919]">
            <pre className="selection:bg-blue-600/30">
              <code>{snippet.code}</code>
            </pre>
          </div>

          {/* Terminal Status Footer */}
          <div className="bg-[#0a0f24] px-5 py-2 border-t border-white/[0.05] flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Status: Verified Invariant Passed</span>
            </div>
            <span>UTF-8 &bull; Python / JS &bull; PostgreSQL 17</span>
          </div>

        </div>

      </div>
    </section>
  );
}
