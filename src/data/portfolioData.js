export const profile = {
  first: "Murugan",
  last: "Shanmugavel",
  role: "Aspiring Data Analyst",
  tagline: "Data. Insights. Impact.",
  intro:
    "Data Science undergraduate turning raw data into clear insights, dashboards and models that support better decisions.",
  about:
    "I'm a B.Sc. Data Science student at Hindustan University with a CGPA of 9.45. I work with Python, R, SQL and Power BI to clean data, explore patterns, build machine learning models and present the results in dashboards people can act on. I'm looking for a Data Analyst internship where I can work on real-world analytics problems.",
  email: "muruganpersonal9363@gmail.com",
  phone: "+91-9363227875",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/murugan-shanmugavel1012",
  github: "https://github.com/muruganganthi006",
  resume: "/Murugan_Shanmugavel_Resume.pdf",
  photo: "/profile.jpg",
};

export const nav = ["Home", "About", "Skills", "Projects", "Experience", "Education", "Contact"];

export const services = [
  { title: "Data Analysis", text: "Cleaning, exploratory analysis and statistical reporting that surface what the data is saying." },
  { title: "Visualization & BI", text: "Interactive Power BI dashboards, Matplotlib and Seaborn charts built around clear KPIs." },
  { title: "Machine Learning", text: "Regression and classification models with feature engineering and proper evaluation." },
  { title: "NLP Basics", text: "Text pipelines using TF-IDF and Naive Bayes for sentiment analysis." },
];

export const stats = [
  { value: "9.45", label: "CGPA" },
  { value: "4", label: "Projects built" },
  { value: "10K+", label: "Reviews analyzed" },
  { value: "85%", label: "Churn model accuracy" },
];

export const skills = [
  { group: "Programming", items: ["Python", "Pandas", "NumPy", "Matplotlib", "scikit-learn", "R", "HTML"] },
  { group: "Databases", items: ["SQL", "Queries", "Joins", "Normalization"] },
  { group: "Data Analytics", items: ["Data Cleaning", "EDA", "Statistical Analysis", "Reporting"] },
  { group: "Visualization & BI", items: ["Power BI", "DAX", "Matplotlib", "Seaborn", "Excel"] },
  { group: "Machine Learning", items: ["Regression", "Classification", "Model Evaluation", "Sentiment Analysis"] },
  { group: "Soft Skills", items: ["Problem-solving", "Teamwork", "Communication", "Adaptability", "Time Management"] },
];

export const projects = [
  {
    title: "Customer Churn Prediction Model",
    stack: "Python, Pandas, scikit-learn",
    points: [
      "Built logistic regression and random forest classifiers on a telecom dataset, reaching about 85% accuracy after feature engineering and hyperparameter tuning.",
      "Cleaned data, handled missing values and class imbalance, and visualized the main churn drivers with Matplotlib and Seaborn.",
    ],
  },
  {
    title: "Sentiment Analysis of Product Reviews",
    stack: "Python, NLTK, scikit-learn",
    points: [
      "Classified 10,000+ e-commerce reviews as positive, negative or neutral using TF-IDF and Naive Bayes.",
      "Summarized sentiment trends by product category in a Power BI dashboard.",
    ],
  },
  {
    title: "Sales Analytics Dashboard",
    stack: "Power BI, SQL, Excel",
    points: [
      "Designed an interactive dashboard tracking revenue, top products and regional performance for a retail dataset.",
      "Used SQL for data extraction and DAX measures for KPIs.",
    ],
  },
  {
    title: "Badminton Score Tracker",
    stack: "Python, Data Visualization",
    points: [
      "Built a tool for players and academies to track match scores and visualize skill progress through automated reports and charts.",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    org: "Hexaware Technologies",
    period: "Ongoing",
    points: [
      "Working as a software developer intern, contributing to development tasks alongside the engineering team.",
    ],
  },
  {
    role: "Intern, Real-Time Job Analytics Portal",
    org: "Elevance Skills",
    period: "Jun 2, 2026 – Aug 2, 2026",
    points: [
      "Collected and processed job-market data to surface hiring trends, in-demand skills and salary insights.",
    ],
  },
];

export const education = [
  { title: "B.Sc. Data Science", place: "Hindustan University, Padur, Chennai", period: "Aug 2024 – Jul 2027", detail: "CGPA: 9.45 / 10 (pursuing)" },
  { title: "HSC", place: "Sree Iyappa Matric Hr. Sec. School, Sholinganallur", period: "2023 – 2024", detail: "Percentage: 58.67%" },
  { title: "SSLC", place: "St. Francis de Sales Matric Hr. Sec. School, Pudhupakkam", period: "2021 – 2022", detail: "Percentage: 70%" },
];

export const certifications = [
  { title: "Indian Knowledge System (IKS)", issuer: "NPTEL" },
  { title: "Soft Skill Development", issuer: "NPTEL" },
];

export const skillCards = [
  { mark: "Py", name: "Python", note: "Pandas, NumPy, scikit-learn" },
  { mark: "SQL", name: "SQL", note: "Queries, joins, normalization" },
  { mark: "BI", name: "Power BI", note: "Dashboards, DAX, KPIs" },
  { mark: "R", name: "R", note: "Data cleaning, visualization" },
  { mark: "ML", name: "Machine Learning", note: "Regression, classification" },
  { mark: "Xl", name: "Excel", note: "Analysis and reporting" },
];