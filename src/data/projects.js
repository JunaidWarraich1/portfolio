export const projects = [
  {
    id: "workflow-pro",
    title: "WorkFlow Pro",
    tagline: "Enterprise Freelance Marketplace & Proposal Workflow Platform",
    category: "Full-Stack SaaS",
    featured: true,
    statusBadge: "Live Production App",
    badgeColor: "emerald",
    summary: "Production multi-tier marketplace platform featuring dual theme (Obsidian Dark & Porcelain Light), dynamic category filtering, proposal submission modals, and real-time budget range validators.",
    architecture: [
      "Decoupled Architecture: React 18 frontend communicating with an asynchronous Python FastAPI REST backend.",
      "Cloud Database: Hosted PostgreSQL 17 on Neon Cloud (Frankfurt AWS region) with strict foreign key constraints & cascading deletes.",
      "Reliability & Testing: Comprehensive Pytest suite covering database CRUD, JWT authentication, and pagination lifecycles."
    ],
    metrics: [
      { label: "Cloud Database", value: "PostgreSQL 17 (Neon)" },
      { label: "API Framework", value: "FastAPI + Pydantic" },
      { label: "Frontend", value: "React 18 + Vite" },
      { label: "Deployment", value: "Vercel Dual-Deploy" }
    ],
    techStack: ["FastAPI", "PostgreSQL 17", "React 18", "Docker", "Python", "Vercel", "Tailwind CSS"],
    liveUrl: "https://workflow-pro-ebon.vercel.app/",
    apiDocsUrl: "https://workflow-pro-1hg4.vercel.app/docs",
    githubUrl: "https://github.com/JunaidWarraich1/workflow-pro"
  },
  {
    id: "wallet-system",
    title: "Fintech Wallet System",
    tagline: "Double-Entry Ledger & High-Concurrency Transaction Engine",
    category: "Fintech & Concurrency",
    featured: true,
    isBackendOnly: true,
    statusBadge: "ACID & Concurrency Microservice",
    badgeColor: "sapphire",
    summary: "Production-grade financial ledger engine enforcing strict double-entry invariants, atomic transaction isolation, and network retry protection for fintech applications.",
    architecture: [
      "Double-Entry Bookkeeping: Mathematical guarantee where every debit has an equal matching credit across all ledger legs (zero-sum balance invariant).",
      "Concurrency & Race Conditions: Row-level pessimistic locking (SELECT FOR UPDATE) with ordered UUID locking eliminates deadlocks and concurrent double-spending.",
      "Idempotency Middleware: Intercepts duplicate client retry requests with cryptographic keys, guaranteeing zero duplicate ledger debits.",
      "Database Evolution & Tests: Fully automated schema migrations via Alembic with comprehensive Pytest concurrency test suites running on real PostgreSQL."
    ],
    metrics: [
      { label: "Ledger Accuracy", value: "Double-Entry (100%)" },
      { label: "Concurrency Control", value: "SELECT FOR UPDATE" },
      { label: "Schema Evolution", value: "Alembic Versioned" },
      { label: "Test Verification", value: "Pytest (Real Postgres)" }
    ],
    techStack: ["Python", "FastAPI", "PostgreSQL", "Alembic", "Docker", "Pytest", "SQLAlchemy"],
    liveUrl: null,
    apiDocsUrl: null,
    githubUrl: "https://github.com/JunaidWarraich1/wallet_system"
  },
  {
    id: "equiledger",
    title: "EquiLedger",
    tagline: "Algorithmic Precision Financial Remainder & Split Engine",
    category: "Algorithms & Math",
    featured: true,
    statusBadge: "Algorithmic Engine",
    badgeColor: "cyan",
    summary: "High-precision financial distribution engine that eliminates floating-point penny discrepancies across fractional equity allocations and joint invoices.",
    architecture: [
      "Mathematical Quota Engine: Implements the Hamilton / Hare-Niemeyer largest-remainder algorithm to allocate fractional cent remainders without bias.",
      "Audit Trail & Ledger: Generates real-time verification logs proving total allocated capital equals exact inputted cent sum to 4 decimal places.",
      "Responsive React UI: Clean real-time calculation interface with dynamic party splits, percentage vs fixed quota controls, and instant reconciliation graphs."
    ],
    metrics: [
      { label: "Algorithm", value: "Hamilton Remainder" },
      { label: "Precision", value: "Penny-Perfect (0.00% Drift)" },
      { label: "Build Output", value: "0 Errors (Vite 5)" },
      { label: "UI Library", value: "React 18 + Lucide" }
    ],
    techStack: ["React 18", "Vite", "JavaScript", "Algorithms", "Tailwind CSS", "Financial Math"],
    liveUrl: null,
    apiDocsUrl: null,
    githubUrl: "https://github.com/JunaidWarraich1/equiledger_project"
  },
  {
    id: "grand-bank-atm",
    title: "Grand Bank ATM System",
    tagline: "Object-Oriented Banking Terminal & Algorithmic Cash Dispenser",
    category: "Algorithms & OOP",
    featured: true,
    statusBadge: "10/10 Tests Passed",
    badgeColor: "amber",
    summary: "Full-scale banking simulator featuring strict Object-Oriented polymorphism, dynamic backtracking cash denomination dispensing, and cryptographic security state machines.",
    architecture: [
      "Backtracking Dispenser Algorithm: Optimizes multi-denomination cash payouts across Rs. 5,000, 1,000, and 500 bank notes, dynamically adjusting for vault inventory.",
      "Card Security State Machine: SHA-256 PIN hashing with automated 3-strike card lockout logic preventing brute-force authentication attacks.",
      "Domain Polymorphism: Encapsulated Account hierarchies (SavingsAccount with interest accumulation, CurrentAccount with overdraft guards) and transaction logging."
    ],
    metrics: [
      { label: "Automated Tests", value: "10 / 10 Passing" },
      { label: "Security", value: "SHA-256 Hashing" },
      { label: "Dispenser Logic", value: "Backtracking Solver" },
      { label: "Runtime", value: "FastAPI + Vercel" }
    ],
    techStack: ["Python", "FastAPI", "Object-Oriented Design", "Unittest", "JavaScript", "Vercel"],
    demoCredentials: "Demo PIN: 4321 (Muhammad Junaid)",
    liveUrl: null,
    apiDocsUrl: null,
    githubUrl: "https://github.com/JunaidWarraich1/atm_web_based"
  },
  {
    id: "library-management",
    title: "Library Management System",
    tagline: "Relational Circulation & Loan Lifecycle State Engine",
    category: "Full-Stack SaaS",
    featured: true,
    statusBadge: "Live on Vercel",
    badgeColor: "emerald",
    summary: "Complete administrative circulation engine managing real-time inventory cataloging, member registration, borrowing lifecycles, and automated overdue fine calculations.",
    architecture: [
      "Circulation State Engine: Finite state machine governing active loans, due dates, renewal extensions, and return confirmation integrity.",
      "Relational Data Integrity: Foreign key constraints ensuring books cannot be borrowed without registered member profiles or during active loan holds.",
      "Serverless Auto-Seeding: Built-in database provisioning ensuring tables and demo records self-heal across stateless Vercel cold starts."
    ],
    metrics: [
      { label: "Deployment", value: "Live on Vercel" },
      { label: "Framework", value: "Python Flask" },
      { label: "Relational DB", value: "SQLite / Serverless" },
      { label: "Templating", value: "Jinja2 + Custom CSS" }
    ],
    techStack: ["Python", "Flask", "SQLite", "Jinja2", "Vercel Serverless", "HTML5/CSS3"],
    liveUrl: "https://library-managment-rouge.vercel.app/",
    apiDocsUrl: null,
    githubUrl: "https://github.com/JunaidWarraich1/library-managment"
  }
];
