export const personalInfo = {
  fullName: "Gullapudi Bhargava Subrahmanyam Guptha",
  shortName: "G. Bhargava Subrahmanyam Guptha",
  title: "Computer Science and Engineering Student | Developer | Technology Enthusiast",
  university: "SR University",
  status: "Undergraduate Student",
  location: "India",
  email: "bhargav.guptha@example.com", // Editable placeholder
  githubUrl: "https://github.com/2303A51740",
  linkedinUrl: "https://www.linkedin.com/in/gullapudi-bhargav-guptha-1aab40347/",
  heroDescription: "Passionate about building software, designing game mechanics, and working with artificial intelligence, natural language processing, and emerging technologies to engineer real-world solutions.",
  aboutText: "I am a Computer Science and Engineering student at SR University, passionate about exploring new technologies and developing practical applications. My interests include software development, programming, game mechanics design, artificial intelligence, natural language processing and immersive technologies. I enjoy learning new skills and transforming ideas into working projects."
};

export const educationData = [
  {
    id: "btech",
    degree: "Bachelor of Technology",
    branch: "Computer Science and Engineering (CSE)",
    institution: "SR University",
    location: "Warangal, Telangana",
    status: "Currently Pursuing",
    isOngoing: true,
    scoreType: "Current GPA",
    score: "6.4",
    maxScore: "10.0",
    description: "Actively studying core computer science disciplines including Data Structures & Algorithms, Object-Oriented Programming, Artificial Intelligence, Database Management Systems, and Software Engineering."
  },
  {
    id: "inter",
    degree: "Intermediate",
    branch: "MPC (Mathematics, Physics, Chemistry)",
    institution: "Sri Chaitanya",
    location: "Eluru",
    status: "Completed",
    isOngoing: false,
    scoreType: "Academic Score",
    score: "81%",
    maxScore: "100%",
    description: "Built strong foundational analytical, problem-solving, and mathematical reasoning skills."
  },
  {
    id: "tenth",
    degree: "10th Standard",
    branch: "Secondary School Certificate",
    institution: "National High School",
    location: "Kaikaluru",
    status: "Completed",
    isOngoing: false,
    scoreType: "Academic Score",
    score: "100%",
    maxScore: "100%",
    highlight: "Perfect Score",
    description: "Achieved outstanding academic excellence with a 100% academic record."
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["C", "Python", "JavaScript", "C#"]
  },
  {
    title: "Frontend Development",
    icon: "layout",
    skills: ["HTML", "CSS", "React.js"]
  },
  {
    title: "Backend Development",
    icon: "server",
    skills: ["Node.js", "FastAPI"]
  },
  {
    title: "AI and Machine Learning",
    icon: "brain",
    skills: ["Natural Language Processing", "Machine Learning"]
  },
  {
    title: "Game Development",
    icon: "gamepad",
    skills: ["Unity", "Blender"]
  },
  {
    title: "DevOps and Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Docker", "Kubernetes", "VS Code"]
  }
];

export const projectsData = [
  {
    id: "zombie-runner",
    title: "Game Mechanics Design and Development – Zombie Runner",
    tagline: "Immersive 3D action survival game built with Unity and C#",
    description: "An interactive game development project focused on comprehensive game mechanics design, player locomotion, obstacle navigation, zombie AI behavior patterns, health/damage systems, and responsive gameplay dynamics.",
    tags: ["Unity", "C#", "Blender", "Game Mechanics", "AI Navigation", "3D Game Design"],
    buttons: [
      {
        id: "github",
        label: "GitHub Repository",
        url: "https://github.com/2303A51740/Zombie-Runner",
        type: "github"
      },
      {
        id: "docs",
        label: "Project Documentation",
        url: "https://drive.google.com/drive/folders/1hZuKMarMQcq74tY_K3V2H7eeV4MRm1F_?usp=sharing",
        type: "doc"
      },
      {
        id: "video",
        label: "Watch Gameplay Video",
        url: "https://lnkd.in/p/gRS2iNiR",
        type: "video"
      }
    ]
  },
  {
    id: "careminds",
    title: "CareMinds – NLP Project",
    tagline: "Natural Language Processing system for mental wellness and sentiment analysis",
    description: "An AI-powered Natural Language Processing initiative aimed at analyzing text patterns for emotional well-being and sentiment detection. Employs NLP algorithms to interpret nuances in language and assist in empathetic mental health response frameworks.",
    tags: ["Natural Language Processing", "Machine Learning", "Python", "FastAPI", "Sentiment Analysis"],
    statusBadge: "Active Development",
    buttons: [] // Strictly NO fake links
  }
];

