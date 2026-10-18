/* All portfolio content lives here (taken from the resume).
   Edit this file to update the site; no component needs to change. */

export const profile = {
  name: "Shivam Gaikwad",
  role: "Entry-Level Software Developer",
  typedRoles: ["Entry-Level Software Developer", "MERN Stack Developer", "Full-Stack Web Developer","Frontend Developer" , "Backend Developer"],
  location: "Pune, Maharashtra",
  phone: "+91 8669061300",
  email: "gaikwadshivam572@gmail.com",
  linkedin: "https://www.linkedin.com/in/shivamgaikwad572",
  github: "https://github.com/Shivam-Gaikwad",
  summary:
    "B.E. Information Technology graduate (2026) with strong fundamentals in Core Java and JavaScript and hands-on experience building full-stack applications with the MERN stack. I work with PostgreSQL and MongoDB, RESTful APIs, JWT authentication, and Git/GitHub. I’m currently deepening my skills in Docker, Redis, system design, AWS, CI/CD pipelines, and AI engineering, including LLMs, LangChain, RAG, and vector databases."
};

export const floatingChips = ["React.js","LLM", "Node.js","RAG", "MongoDB", "Express.js","GenAI"];

export const skills = [
  ["Programming languages", "Core Java, JavaScript (ES6+), SQL, HTML5, CSS3"],
  ["MERN stack", "MongoDB (NoSQL), Express.js, React.js, Node.js"],
  ["Frontend", "React.js, React Hooks, Tailwind CSS, Reusable Components, Responsive Web Design, Next.js (Basic)"],
  ["Backend & APIs", "Node.js, Express.js, RESTful APIs, JSON, API Integration, JWT Authentication, HTTP, CRUD Operations"],
  ["Databases", "MongoDB (NoSQL), PostgreSQL, SQL, Database Concepts"],
  ["Tools & practices", "Git, GitHub, Postman, VS Code, npm, Agile SDLC, Cross-Browser Compatibility"],
  ["Soft skills", "Analytical Thinking, Problem Solving, Communication, Teamwork, Leadership"],
];

export const experience = {
  title: "Software Developer Intern",
  company: "Exaltasoft Solutions, Pune",
  period: "Jan 2025 – Feb 2025",
  points: [
    "Developed responsive and user-friendly web applications using  JavaScript,Node.js and React.js following modern web development and Agile SDLC practices.",
    "Developed reusable frontend components and responsive layouts to improve maintainability, usability, and cross-browser compatibility.",
    "Performed testing, debugging, bug fixing, and application validation to identify and resolve functional and UI issues.",
    "Collaborated with developers and stakeholders to implement, test, and deliver reliable application features.",
  ],
};

export const projects = [
  {
    name: "Eventra",
    kind: "Event booking platform",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    link: { label: "Live demo", href: "https://eventra-u1zk.onrender.com" },
    colors: ["#8b5cf6", "#ec4899"],
    points: [
      "Developed a full-stack MERN event booking platform using MongoDB (NoSQL), Express.js, React.js, and Node.js for event browsing, ticket booking, and booking management.",
      "Built and integrated RESTful APIs for event management, user authentication, ticket booking, and booking workflows.",
      "Developed reusable React components and responsive user interfaces for event browsing, booking, and personal dashboards.",
      "Implemented JWT authentication, role-based access, and OTP email verification for secure user and admin workflows.",
      "Tested and debugged frontend and backend functionality using Postman, resolving API, authentication, and application issues.",
    ],
  },
  {
    name: "HeartCare",
    kind: "Appointment booking platform",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    link: { label: "GitHub", href: "https://github.com/Shivam-Gaikwad/Doctor_Appointment_Booking_Platform" },
    colors: ["#06b6d4", "#3b82f6"],
    status: "Payment gateway in progress",
    points: [
      "Developed a full-stack MERN appointment booking platform with a patient-facing website and a JWT-protected doctor dashboard using MongoDB (NoSQL), Express.js, React.js (Vite), and Node.js.",
      "Currently implementing a payment gateway integration to enable secure online payments for appointment bookings (in progress).",
      "Built RESTful APIs for 15-minute slot generation, booking, and appointment status management, using a unique database index to prevent double-booking.",
      "Enforced server-side business rules for gated patient reviews, allowing reviews only for appointments marked as completed by the doctor.",
    ],
  },
  {
    name: "Bhusan Mart",
    kind: "E-commerce web app",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    link: { label: "Live demo", href: "https://bhusahn-mart-gea2.vercel.app" },
    colors: ["#f59e0b", "#ef4444"],
    points: [
      "Built a responsive e-commerce web application using React.js, JavaScript, and Tailwind CSS with dynamic product listing, search, cart functionality, and reusable components.",
      "Implemented component-based UI and client-side state management to provide maintainable and user-friendly application workflows.",
      "Tested and debugged application functionality, responsive layouts, and cross-browser behavior for reliable user experience.",
    ],
  },
];

export const education = [
  ["Pravara Rural Engineering College, Loni", "Bachelor of Engineering in Information Technology", "CGPA 8.51", "2022 – 2026"],
  ["A. S. C. College, Rahuri", "Higher Secondary Certificate (HSC)", "64.33%", "2020 – 2022"],
  ["Adarsh Vidyalaya, Umbre", "Secondary School Certificate (SSC)", "91.80%", "2020"],
];

export const certifications = [
  "HackerRank Certified Frontend Developer",
  "HackerRank Advanced SQL Certificate",
  "HackerRank Python Certificate",
];

export const achievement =
  "Led the final-year project team, coordinating development tasks, problem solving, collaboration, and project delivery.";

export const stats = [
  { label: "CGPA", value: 8.51, decimals: 2 },
  { label: "Projects", value: projects.length, decimals: 0 },
  { label: "Certifications", value: certifications.length, decimals: 0 },
];

export const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
