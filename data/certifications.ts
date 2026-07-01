export type Certification = {
  id: string;
  title: string;
  issuer: string;
  category: string;
  url: string;
  featured?: boolean;
};

const linkedinCertPage =
  "https://www.linkedin.com/in/lakshya-kumar-7b16252b4/details/certifications/";

export const certifications: Certification[] = [
  // AI / Machine Learning
  {
    id: "amazon-ml-summer-school",
    title: "Amazon ML Summer School",
    issuer: "Amazon",
    category: "AI & Machine Learning",
    url: linkedinCertPage,
    featured: true,
  },
  {
    id: "ibm-data-analysis-python",
    title: "Data Analysis Using Python",
    issuer: "IBM",
    category: "AI & Machine Learning",
    url: "https://www.credly.com/badges/61f0576d-360d-49c9-b5ed-dff1a260145c/linked_in_profile",
    featured: true,
  },
  {
    id: "stanford-advanced-learning-algorithms",
    title: "Advanced Learning Algorithms",
    issuer: "Stanford (DeepLearning.AI)",
    category: "AI & Machine Learning",
    url: "https://www.coursera.org/account/accomplishments/verify/3QT9MNFJJQNH",
    featured: true,
  },
  {
    id: "stanford-supervised-ml",
    title: "Supervised Machine Learning",
    issuer: "Stanford (DeepLearning.AI)",
    category: "AI & Machine Learning",
    url: "https://www.coursera.org/account/accomplishments/verify/5WTF7SQPRMRR",
    featured: true,
  },
  {
    id: "tata-genai-data-analytics",
    title: "GenAI Powered Data Analytics",
    issuer: "Tata",
    category: "AI & Machine Learning",
    url: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_691aeffa84b3b1bc52c5c576_1763893215745_completion_certificate.pdf",
    featured: true,
  },
  {
    id: "coincent-ai-cert",
    title: "Coincent AI Certification",
    issuer: "Coincent AI",
    category: "AI & Machine Learning",
    url: linkedinCertPage,
  },

  // Data & Business Analytics
  {
    id: "quantium-data-analytics",
    title: "Data Analytics",
    issuer: "Quantium",
    category: "Data & Business Analytics",
    url: "https://www.theforage.com/completion-certificates/32A6DqtsbF7LbKdcq/NkaC7knWtjSbi6aYv_32A6DqtsbF7LbKdcq_691aeffa84b3b1bc52c5c576_1763893585415_completion_certificate.pdf",
    featured: true,
  },
  {
    id: "tata-data-visualisation",
    title: "Data Visualisation",
    issuer: "Tata",
    category: "Data & Business Analytics",
    url: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_691aeffa84b3b1bc52c5c576_1763886696103_completion_certificate.pdf",
  },
  {
    id: "pwc-switzerland-power-bi",
    title: "Power BI",
    issuer: "PwC Switzerland",
    category: "Data & Business Analytics",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/a87GpgE6tiku7q3gu_4sLyCPgmsy8DA6Dh3_WKX2ZdThK3FDQWzd5_1738405845648_completion_certificate.pdf",
    featured: true,
  },
  {
    id: "british-airways-data-science",
    title: "Data Science",
    issuer: "British Airways",
    category: "Data & Business Analytics",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_WKX2ZdThK3FDQWzd5_1738325268178_completion_certificate.pdf",
    featured: true,
  },
  {
    id: "lloyds-banking-group-data-science",
    title: "Data Science",
    issuer: "Lloyds Banking Group",
    category: "Data & Business Analytics",
    url: "https://www.theforage.com/completion-certificates/Zbnc2o4ok6kD2NEXx/EuvC8GPjkZ6xaiP9p_Zbnc2o4ok6kD2NEXx_691aeffa84b3b1bc52c5c576_1763375177377_completion_certificate.pdf",
  },
  {
    id: "commonwealth-bank-data-science",
    title: "Data Science",
    issuer: "Commonwealth Bank",
    category: "Data & Business Analytics",
    url: "https://www.theforage.com/completion-certificates/2sNmYuurxgpFYawco/smwfytX3mcLboA9bf_2sNmYuurxgpFYawco_691aeffa84b3b1bc52c5c576_1763373902759_completion_certificate.pdf",
  },

  // Cloud & Security
  {
    id: "aws-solutions-architecture",
    title: "Solutions Architecture",
    issuer: "AWS",
    category: "Cloud & Security",
    url: "https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_691aeffa84b3b1bc52c5c576_1763885910167_completion_certificate.pdf",
    featured: true,
  },
  {
    id: "saviynt-identity-security-ai",
    title: "Identity Security for the AI Age",
    issuer: "Saviynt",
    category: "Cloud & Security",
    url: "https://certification.saviynt.com/1ce9a6aa-4906-486a-841f-cdcdba804b0f",
    featured: true,
  },

  // Business & Finance
  {
    id: "jp-morgan-quantitative-research",
    title: "Quantitative Research",
    issuer: "JP Morgan",
    category: "Business & Finance",
    url: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/bWqaecPDbYAwSDqJy_Sj7temL583QAYpHXD_691aeffa84b3b1bc52c5c576_1763893903122_completion_certificate.pdf",
    featured: true,
  },
  {
    id: "mckinsey-forward",
    title: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    category: "Business & Finance",
    url: "https://www.linkedin.com/in/lakshya-kumar-7b16252b4/overlay/Certifications/1805405551/treasury/?profileId=ACoAAEuOEDUBXsA9QWsSHU81eKk7HYhIP4UEOBg",
    featured: true,
  },
  {
    id: "ey-audit",
    title: "EY Audit Job Simulation",
    issuer: "EY",
    category: "Business & Finance",
    url: linkedinCertPage,
    featured: true,
  },

  // Programming & CS Fundamentals
  {
    id: "infosys-springboard",
    title: "Infosys Springboard Certifications",
    issuer: "Infosys",
    category: "Programming & CS Fundamentals",
    url: linkedinCertPage,
    featured: true,
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    issuer: "Certification",
    category: "Programming & CS Fundamentals",
    url: linkedinCertPage,
  },
  {
    id: "python-programming",
    title: "Python Programming",
    issuer: "Certification",
    category: "Programming & CS Fundamentals",
    url: linkedinCertPage,
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    issuer: "Certification",
    category: "Programming & CS Fundamentals",
    url: linkedinCertPage,
  },
  {
    id: "database-management",
    title: "Database Management",
    issuer: "Certification",
    category: "Programming & CS Fundamentals",
    url: linkedinCertPage,
  },
  {
    id: "nosql",
    title: "NoSQL",
    issuer: "Certification",
    category: "Programming & CS Fundamentals",
    url: linkedinCertPage,
  },
  {
    id: "agile",
    title: "Agile Methodology",
    issuer: "Certification",
    category: "Programming & CS Fundamentals",
    url: linkedinCertPage,
  },
  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    issuer: "Certification",
    category: "Programming & CS Fundamentals",
    url: linkedinCertPage,
  },

  // Professional Development
  {
    id: "ibm-career-excellence",
    title: "Career Excellence",
    issuer: "IBM",
    category: "Professional Development",
    url: "https://www.credly.com/badges/ea131bc7-148b-42df-98d0-9aeaead6208a/linked_in_profile",
  },
  {
    id: "ibm-explorations-mindfulness",
    title: "Explorations into Mindfulness",
    issuer: "IBM",
    category: "Professional Development",
    url: "https://www.credly.com/badges/e6ffa0bf-89ae-4fef-9c13-243466c84509/linked_in_profile",
  },
  {
    id: "social-summer-of-code",
    title: "Social Summer of Code",
    issuer: "Social Summer of Code",
    category: "Professional Development",
    url: "https://www.linkedin.com/in/lakshya-kumar-7b16252b4/overlay/Certifications/2110319801/treasury/?profileId=ACoAAEuOEDUBXsA9QWsSHU81eKk7HYhIP4UEOBg",
    featured: true,
  },
];

export const certificationCategories = Array.from(
  new Set(certifications.map((c) => c.category))
);
