export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  mission: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  lessons: string;
};

// NOTE: Narrative fields (mission/challenge/solution/impact/lessons) were drafted
// to fit each role and domain since detailed write-ups weren't supplied. Review
// and edit these before publishing so every claim reflects your actual work.
export const experience: Experience[] = [
  {
    id: "ethara-ai",
    company: "Ethara AI",
    role: "Generative AI Engineer",
    period: "2025 to Present",
    location: "Remote",
    mission:
      "Improve the reliability of LLM-powered products before they reach production by building rigorous, repeatable evaluation systems.",
    challenge:
      "Model outputs were being judged inconsistently across reviewers, making it hard to tell whether a prompt or fine-tune change actually improved quality.",
    solution:
      "Built structured evaluation pipelines and rubric-driven scoring workflows that turned subjective review into comparable, trackable metrics across model versions.",
    impact:
      "Cut review turnaround time and gave the team a shared, defensible standard for shipping model changes with confidence.",
    technologies: ["LLM Evaluation", "Python", "Prompt Engineering", "LangChain", "Pandas"],
    lessons:
      "Good evaluation design matters more than any single model swap, the rubric is the product.",
  },
  {
    id: "celebal-technologies",
    company: "Celebal Technologies",
    role: "DevOps Engineer",
    period: "2024 to 2025",
    location: "Remote",
    mission:
      "Reduce friction between development and deployment by automating build, test, and release pipelines for client projects.",
    challenge:
      "Manual deployment steps were slow and error-prone, causing avoidable delays and inconsistent environments across releases.",
    solution:
      "Designed CI/CD pipelines and containerized services, standardizing environments so deployments became predictable and repeatable.",
    impact:
      "Shortened release cycles and reduced deployment-related incidents by catching configuration issues before they reached production.",
    technologies: ["Docker", "CI/CD", "Git", "Linux", "Cloud Deployment", "Shell Scripting"],
    lessons:
      "Infrastructure reliability is a design problem, not a maintenance afterthought.",
  },
  {
    id: "feynn-labs",
    company: "Feynn Labs",
    role: "Machine Learning Engineer",
    period: "2024",
    location: "Remote",
    mission:
      "Turn open business problems into working ML prototypes that could be validated quickly with real data.",
    challenge:
      "Client datasets were messy and domain-specific, with no existing pipeline for feature engineering or model comparison.",
    solution:
      "Built end-to-end pipelines covering data cleaning, feature engineering, and model benchmarking across multiple algorithms to find the best fit per use case.",
    impact:
      "Delivered validated prototypes that gave stakeholders a clear, data-backed basis for go/no-go decisions.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Feature Engineering", "Business Analytics"],
    lessons:
      "The fastest path to a useful model is usually a disciplined baseline, not the fanciest architecture.",
  },
  {
    id: "cantilever",
    company: "CantiLever",
    role: "AI & NLP Intern",
    period: "2023 to 2024",
    location: "Remote",
    mission:
      "Apply NLP techniques to extract structured signal from unstructured text for downstream products.",
    challenge:
      "Existing text-processing scripts were brittle and didn't generalize across the varied formats the team was ingesting.",
    solution:
      "Built modular NLP pipelines using transformer-based models for classification and extraction, with clear interfaces so components could be reused across projects.",
    impact:
      "Improved extraction accuracy and gave the team reusable NLP building blocks instead of one-off scripts.",
    technologies: ["NLP", "Transformers", "Python", "spaCy", "Hugging Face"],
    lessons:
      "Reusable, well-scoped components compound in value far more than clever one-off solutions.",
  },
  {
    id: "suvidha-foundation",
    company: "Suvidha Foundation",
    role: "Machine Learning Engineer",
    period: "2023",
    location: "Remote",
    mission:
      "Support a social-impact organization with data-driven tools to better understand and serve its beneficiaries.",
    challenge:
      "Program data was scattered across formats with no consistent way to surface trends that could inform outreach decisions.",
    solution:
      "Consolidated the data, built predictive models to flag at-risk cases, and packaged findings into simple, actionable reports for non-technical staff.",
    impact:
      "Gave the foundation an early-warning tool that helped prioritize outreach where it mattered most.",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Visualization"],
    lessons:
      "The best model is worthless if the people using it can't act on its output, usability is part of accuracy.",
  },
  {
    id: "adsmit-media",
    company: "ADSMIT MEDIA",
    role: "Finance & Data Analyst",
    period: "2022 to 2023",
    location: "Remote",
    mission:
      "Bring analytical rigor to campaign spend and revenue reporting for a fast-moving media business.",
    challenge:
      "Financial and performance data lived in disconnected spreadsheets, making it hard to see which campaigns were actually profitable.",
    solution:
      "Built consolidated dashboards and financial models that tied spend directly to performance metrics, automating what had been manual reconciliation.",
    impact:
      "Gave leadership a real-time view of campaign profitability, informing where budget was reallocated.",
    technologies: ["Excel", "SQL", "Power BI", "Financial Modeling", "Data Analytics"],
    lessons:
      "Numbers only drive decisions when they're trustworthy and easy to act on, pipelines matter as much as formulas.",
  },
  {
    id: "coincent-ai",
    company: "Coincent AI",
    role: "Deep Learning Intern",
    period: "2022",
    location: "Remote",
    mission:
      "Explore deep learning approaches to computer vision problems as part of an early-stage AI product team.",
    challenge:
      "The team needed a working proof-of-concept for image classification under tight compute and time constraints.",
    solution:
      "Trained and fine-tuned convolutional neural networks, applying transfer learning to reach usable accuracy without training from scratch.",
    impact:
      "Delivered a proof-of-concept that validated the approach and informed the team's next research direction.",
    technologies: ["PyTorch", "Computer Vision", "CNNs", "Transfer Learning", "Python"],
    lessons:
      "Transfer learning is often the difference between a feasible timeline and an impossible one.",
  },
];
