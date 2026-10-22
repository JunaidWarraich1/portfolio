export const skillCategories = [
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Python", level: "Expert", desc: "Core language for backend architectures, scripts & data structures" },
      { name: "FastAPI", level: "Advanced", desc: "High-performance async REST APIs with Pydantic validation" },
      { name: "Flask", level: "Advanced", desc: "Production web applications, WSGI microservices & Jinja templating" },
      { name: "Object-Oriented Design", level: "Advanced", desc: "Polymorphism, design patterns, encapsulation & state machines" },
      { name: "Authentication & Security", level: "Intermediate", desc: "JWT tokens, SHA-256 PIN hashing, rate-limiting & session guards" }
    ]
  },
  {
    category: "Databases & Concurrency",
    icon: "Database",
    skills: [
      { name: "PostgreSQL 17", level: "Advanced", desc: "Relational modeling, cascading constraints, indexes & Neon Cloud" },
      { name: "SQLAlchemy & ORM", level: "Advanced", desc: "Declarative models, relationship mapping & query optimization" },
      { name: "Alembic Migrations", level: "Advanced", desc: "Automated database schema versioning & migration rollback scripts" },
      { name: "Concurrency & Locks", level: "Advanced", desc: "Pessimistic row locking (SELECT FOR UPDATE) & double-spend prevention" },
      { name: "Idempotency Architecture", level: "Advanced", desc: "Network replay protection & zero-duplicate ledger transaction keys" }
    ]
  },
  {
    category: "Frontend Architecture",
    icon: "Layout",
    skills: [
      { name: "React 18", level: "Advanced", desc: "Functional components, custom hooks, context & state synchronization" },
      { name: "Vite", level: "Advanced", desc: "Ultra-fast bundling, HMR, environment configurations & production builds" },
      { name: "Tailwind CSS", level: "Advanced", desc: "Responsive design, dark/light themes, custom design systems & glassmorphism" },
      { name: "Modern JavaScript (ES6+)", level: "Advanced", desc: "Async/await, closures, promises, DOM manipulation & canvas APIs" }
    ]
  },
  {
    category: "DevOps & Engineering Rigor",
    icon: "Cpu",
    skills: [
      { name: "Docker", level: "Intermediate", desc: "Containerization, Dockerfile authoring & reproducible environments" },
      { name: "Pytest & Unittest", level: "Advanced", desc: "Automated regression testing, test fixtures & mock injection" },
      { name: "Git & Version Control", level: "Advanced", desc: "Feature branching, pull requests, semantic commits & merge conflict resolution" },
      { name: "Vercel Cloud Deployments", level: "Advanced", desc: "Serverless function deployment, ephemeral filesystem handling & routing" }
    ]
  }
];
