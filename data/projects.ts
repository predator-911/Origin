export type Project = {
  id: string;
  title: string;
  category: string;
  problem: string;
  approach: string;
  architecture: string;
  technologies: string[];
  impact: string;
  lessons: string;
  future: string;
  liveUrl: string;
  githubUrl: string;
  accent: "violet" | "cyan" | "amber";
};

// NOTE: Case-study copy (problem/approach/architecture/impact/lessons/future) was
// drafted to fit each project's name and stack since detailed write-ups weren't
// supplied. Review and edit before publishing.
export const projects: Project[] = [
  {
    id: "steganography-genai",
    title: "Steganography Using Generative AI",
    category: "Generative AI",
    problem:
      "Traditional steganography methods are easy to detect statistically once you know what to look for.",
    approach:
      "Used generative models to embed hidden data inside AI-generated cover images, so the payload blends into content the model produces naturally rather than a fixed carrier.",
    architecture:
      "A generative pipeline synthesizes cover imagery, encodes payload bits into learned latent features, and a decoder reconstructs the message from the output image.",
    technologies: ["Python", "PyTorch", "Generative AI", "Gradio", "Hugging Face Spaces"],
    impact:
      "Demonstrates a detection-resistant approach to covert data embedding with a working interactive demo.",
    lessons:
      "Balancing payload capacity against imperceptibility is the core tradeoff in every steganographic system.",
    future: "Extend to audio and video carriers; add robustness testing against compression.",
    liveUrl: "https://huggingface.co/spaces/Predator911/SGENAI",
    githubUrl: "https://github.com/predator-911",
    accent: "violet",
  },
  {
    id: "grammar-scoring-engine",
    title: "Grammar Scoring Engine",
    category: "NLP",
    problem:
      "Manual grammar assessment doesn't scale, and off-the-shelf checkers give binary flags instead of a usable score.",
    approach:
      "Built an NLP scoring pipeline that evaluates grammatical quality of text input and returns a continuous, interpretable score.",
    architecture:
      "Text is tokenized and passed through a transformer-based scoring model, with post-processing to map raw outputs to a human-readable grade.",
    technologies: ["Python", "Transformers", "NLP", "Streamlit-style UI", "Hugging Face Spaces"],
    impact:
      "Provides fast, consistent grammar scoring useful for language-learning and content-quality workflows.",
    lessons:
      "Score calibration against real human judgments matters more than raw model accuracy.",
    future: "Add explainability so users see exactly which spans hurt the score.",
    liveUrl: "https://huggingface.co/spaces/Predator911/GrammarEngine",
    githubUrl: "https://github.com/predator-911",
    accent: "cyan",
  },
  {
    id: "talentscout-ai",
    title: "TalentScout AI",
    category: "Generative AI",
    problem:
      "Early-stage candidate screening consumes recruiter time on questions that could be handled conversationally.",
    approach:
      "Built a conversational screening agent that gathers candidate information and technical context through natural dialogue.",
    architecture:
      "An LLM-driven chat interface manages a structured interview flow, extracting and validating candidate details in real time.",
    technologies: ["LLMs", "Python", "Prompt Engineering", "Gradio", "Hugging Face Spaces"],
    impact:
      "Reduces manual first-pass screening effort while keeping the interaction conversational for candidates.",
    lessons:
      "Constraining an LLM to a structured flow needs as much design work as the model itself.",
    future: "Add resume parsing and automatic scoring against role requirements.",
    liveUrl: "https://huggingface.co/spaces/Predator911/TalentScout",
    githubUrl: "https://github.com/predator-911",
    accent: "violet",
  },
  {
    id: "llmexpert-rag",
    title: "LLMExpert (RAG API)",
    category: "LLM / RAG",
    problem:
      "General-purpose LLMs hallucinate on domain-specific questions when they lack grounded source material.",
    approach:
      "Built a retrieval-augmented generation system that grounds LLM responses in a curated knowledge base before generation.",
    architecture:
      "Documents are chunked and embedded into a vector store; queries retrieve top-matching context which is injected into the LLM prompt before generation.",
    technologies: ["RAG", "LangChain", "Vector Search", "Python", "Hugging Face Spaces"],
    impact:
      "Reduces hallucination rate and gives users traceable, source-grounded answers.",
    lessons:
      "Retrieval quality is the ceiling on RAG performance, a better generator can't fix bad retrieval.",
    future: "Add citation highlighting and multi-hop retrieval for complex queries.",
    liveUrl: "https://huggingface.co/spaces/Predator911/LLMExpert",
    githubUrl: "https://github.com/predator-911",
    accent: "cyan",
  },
  {
    id: "ai-warehouse-management",
    title: "AI Warehouse Management",
    category: "AI Systems",
    problem:
      "Warehouse inventory decisions are often reactive because demand and stock patterns aren't forecast systematically.",
    approach:
      "Built an AI-assisted system that models inventory flow and flags restocking needs before shortages occur.",
    architecture:
      "A forecasting layer predicts demand trends from historical data, feeding a rules engine that generates restocking recommendations.",
    technologies: ["Python", "Machine Learning", "Forecasting", "Hugging Face Spaces"],
    impact:
      "Shifts inventory management from reactive to predictive, reducing the risk of stockouts.",
    lessons:
      "Forecast accuracy is only useful if it's paired with clear, actionable thresholds for action.",
    future: "Integrate live inventory feeds for real-time recommendations.",
    liveUrl: "https://huggingface.co/spaces/Predator911/AIWMS",
    githubUrl: "https://github.com/predator-911",
    accent: "amber",
  },
  {
    id: "nori-farm",
    title: "Nori Farm",
    category: "AI Systems",
    problem:
      "Small-scale farming decisions often lack data-driven support for yield and resource planning.",
    approach:
      "Built a farm-management assistant that uses data-driven insights to guide planting and resource decisions.",
    architecture:
      "Historical and environmental data feed a recommendation model that surfaces guidance through a simple interactive interface.",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Hugging Face Spaces"],
    impact:
      "Gives smallholder-style operations a lightweight, accessible decision-support tool.",
    lessons:
      "Domain-specific tools need domain-specific validation, general ML metrics aren't enough.",
    future: "Add region-specific climate data integration.",
    liveUrl: "https://huggingface.co/spaces/Predator911/NoriFarm",
    githubUrl: "https://github.com/predator-911",
    accent: "cyan",
  },
  {
    id: "dog-breed-classification",
    title: "Dog Breed Classification",
    category: "Computer Vision",
    problem:
      "Fine-grained visual classification (distinguishing similar dog breeds) is a harder problem than generic image classification.",
    approach:
      "Trained a convolutional neural network with transfer learning to classify dog breeds from photos with high accuracy.",
    architecture:
      "A pretrained CNN backbone is fine-tuned on a labeled breed dataset, with augmentation to improve generalization across photo conditions.",
    technologies: ["PyTorch", "CNNs", "Transfer Learning", "Computer Vision"],
    impact:
      "Achieves strong classification accuracy across visually similar breed categories.",
    lessons:
      "Data augmentation mattered more than architecture choice for this fine-grained task.",
    future: "Deploy as a mobile-friendly model with on-device inference.",
    liveUrl: "https://huggingface.co/spaces/Predator911/DogBreed",
    githubUrl: "https://github.com/predator-911",
    accent: "violet",
  },
  {
    id: "disaster-tweets",
    title: "Disaster Tweets NLP",
    category: "NLP",
    problem:
      "During real disasters, distinguishing genuine emergency reports from unrelated tweets using the same keywords is difficult at scale.",
    approach:
      "Built an NLP classifier that identifies whether a tweet describes a real disaster event.",
    architecture:
      "Tweet text is cleaned and vectorized, then classified using a fine-tuned transformer model trained on labeled disaster-tweet data.",
    technologies: ["NLP", "Transformers", "Python", "Streamlit"],
    impact:
      "Provides a filtering layer that could help surface genuine emergency signals from social noise.",
    lessons:
      "Short, informal text needs different preprocessing assumptions than long-form content.",
    future: "Add location extraction to geotag verified disaster reports.",
    liveUrl: "https://nncsjh9jxmwixpfstqtcszbp.streamlit.app/",
    githubUrl: "https://github.com/predator-911",
    accent: "cyan",
  },
  {
    id: "digit-recognizer",
    title: "Digit Recognizer",
    category: "Computer Vision",
    problem:
      "Handwritten digit recognition is a classic benchmark for validating a computer vision pipeline end-to-end.",
    approach:
      "Built and trained a neural network to classify handwritten digits with an interactive drawing interface for live testing.",
    architecture:
      "A CNN trained on labeled digit images powers real-time inference on user-drawn input rendered to a canvas.",
    technologies: ["PyTorch", "CNNs", "Streamlit", "Computer Vision"],
    impact:
      "Serves as a fast, interactive demonstration of a full vision pipeline from input to prediction.",
    lessons:
      "Interactive demos surface edge cases that static test sets never catch.",
    future: "Extend to full handwritten text recognition.",
    liveUrl: "https://digitrecogniser-zzcjt35a9vgsmk5p235szk.streamlit.app/",
    githubUrl: "https://github.com/predator-911",
    accent: "amber",
  },
  {
    id: "house-price-prediction",
    title: "House Price Prediction",
    category: "Machine Learning",
    problem:
      "Home valuation depends on dozens of interacting features that are hard to weigh manually.",
    approach:
      "Built a regression pipeline that predicts house prices from structural and location features.",
    architecture:
      "Feature engineering and encoding feed an ensemble regression model, tuned via cross-validation for generalization.",
    technologies: ["Python", "Scikit-learn", "Feature Engineering", "Streamlit"],
    impact:
      "Delivers price estimates that account for feature interactions a simple formula would miss.",
    lessons:
      "Feature engineering delivered more accuracy gains than model tuning did.",
    future: "Add explainability to show which features drove a given estimate.",
    liveUrl: "https://9yx5jqt7gemca4xn8mncwk.streamlit.app/",
    githubUrl: "https://github.com/predator-911",
    accent: "violet",
  },
  {
    id: "landmark-detection",
    title: "Landmark Detection",
    category: "Computer Vision",
    problem:
      "Identifying landmarks in photos requires distinguishing visually similar structures across varied angles and lighting.",
    approach:
      "Built an image classification model that identifies famous landmarks from photographs.",
    architecture:
      "A CNN backbone extracts visual features which are mapped to landmark classes via a trained classification head.",
    technologies: ["Computer Vision", "CNNs", "Python"],
    impact:
      "Provides accurate landmark identification across a range of real-world photo conditions.",
    lessons:
      "Class imbalance in landmark datasets required deliberate sampling strategy, not just more epochs.",
    future: "Add geolocation-assisted disambiguation for visually similar landmarks.",
    liveUrl: "https://predator-911.github.io/Portfoli0/LD.html",
    githubUrl: "https://github.com/predator-911",
    accent: "cyan",
  },
  {
    id: "spaceship-titanic",
    title: "Spaceship Titanic",
    category: "Machine Learning",
    problem:
      "A classic structured-data classification challenge requiring careful feature handling of missing and mixed-type data.",
    approach:
      "Built a classification pipeline predicting passenger transport outcomes from structured tabular data.",
    architecture:
      "Missing-value imputation and feature encoding feed a tuned gradient-boosted classifier.",
    technologies: ["Python", "Scikit-learn", "Feature Engineering"],
    impact:
      "Achieves strong leaderboard-style accuracy on a well-known structured-data benchmark.",
    lessons:
      "Careful missing-data handling had a bigger effect than model choice.",
    future: "Experiment with stacked ensembles for further accuracy gains.",
    liveUrl: "https://predator-911.github.io/Portfoli0/SpaceShip%20Titanic.html",
    githubUrl: "https://github.com/predator-911",
    accent: "amber",
  },
  {
    id: "store-sales-prediction",
    title: "Store Sales Prediction",
    category: "Machine Learning",
    problem:
      "Retail sales forecasting needs to account for seasonality, promotions, and store-level variation simultaneously.",
    approach:
      "Built a time-aware regression pipeline forecasting store-level sales from historical transaction data.",
    architecture:
      "Time-series features (lags, rolling averages, seasonality flags) feed a gradient-boosted regression model.",
    technologies: ["Python", "Time Series", "Scikit-learn"],
    impact:
      "Provides forecasts that account for seasonal and promotional effects rather than flat historical averages.",
    lessons:
      "Naive time-based train/test splits are essential to avoid leaking future information.",
    future: "Add store-clustering to share signal across similar locations.",
    liveUrl: "https://predator-911.github.io/Portfoli0/StoreSales.html",
    githubUrl: "https://github.com/predator-911",
    accent: "violet",
  },
  {
    id: "titanic-survival",
    title: "Titanic Survival",
    category: "Machine Learning",
    problem:
      "A foundational classification problem used to validate an end-to-end ML workflow from raw data to prediction.",
    approach:
      "Built a classification pipeline predicting passenger survival from demographic and ticket features.",
    architecture:
      "Feature engineering and encoding feed a tuned classifier evaluated via stratified cross-validation.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    impact:
      "Serves as a clean baseline demonstrating solid ML fundamentals end-to-end.",
    lessons:
      "Even 'simple' datasets reward careful feature engineering over raw model complexity.",
    future: "Compare against deep tabular models for benchmarking.",
    liveUrl: "https://predator-911.github.io/Portfoli0/Titanic.html",
    githubUrl: "https://github.com/predator-911",
    accent: "cyan",
  },
  {
    id: "vision-transformer",
    title: "Vision Transformer",
    category: "Computer Vision",
    problem:
      "CNNs dominate vision tasks by default, but transformer-based architectures can outperform them given the right setup.",
    approach:
      "Implemented and trained a Vision Transformer (ViT) for image classification to compare against CNN baselines.",
    architecture:
      "Images are split into patches, linearly embedded, and passed through transformer encoder blocks with a classification head.",
    technologies: ["PyTorch", "Vision Transformers", "Deep Learning"],
    impact:
      "Demonstrates hands-on understanding of transformer-based vision architectures beyond standard CNNs.",
    lessons:
      "ViTs need more data or stronger augmentation than CNNs to reach comparable accuracy at small scale.",
    future: "Benchmark against hybrid CNN-transformer architectures.",
    liveUrl: "https://predator-911.github.io/Portfoli0/VIT.html",
    githubUrl: "https://github.com/predator-911",
    accent: "amber",
  },
];
