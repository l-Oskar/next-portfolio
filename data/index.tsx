export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#techStack" },
  { name: "Contact", link: "#footer" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I focus on clear communication and long-term collaboration to turn ideas into great digital products.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full bg-black bg-opacity-50",
    titleClassName: "justify-end",
    img: "/laptop.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building clean, modern web apps.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an open-source blockchain service.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "StarWars adaptive website",
    des: "A website displaying character information, with options to add to favorites and change the site theme.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/sa.svg", "/js.png", "/rx.svg", "/git.svg"],
    link: "https://l-oskar.github.io/StarWars/",
  },
  {
    id: 2,
    title: "React Arrow game",
    des: "Built a fast-paced browser game where users match random arrow keys in real time. Tracked input accuracy and included win/loss mechanics.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/mu.svg", "/ts.svg", "/rx.svg", "/vi.svg"],
    link: "https://l-oskar.github.io/react-arrow-game/",
  },
  {
    id: 3,
    title: "Portfolio adaptive website",
    des: "Designed and developed a personal portfolio to showcase projects, skills, and experience using React, Tailwind CSS, and modern UI patterns.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/ac.png", "/fm.svg"],
    link: "#",
  },
];

export const cards = [
  {
    title: "HTML & CSS",
    description:
      "Clean, semantic markup and responsive layouts using modern CSS techniques.",
  },
  {
    title: "JavaScript (ES6+)",
    description:
      "Interactive functionality with clean, modular JavaScript and modern ES6+ features.",
  },
  {
    title: "React.js/Next.js",
    description:
      "Component-based architecture for building fast, scalable applications.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid UI development with consistent design.",
  },
  {
    title: "Redux Toolkit",
    description:
      "State management for complex interfaces with minimal boilerplate and great scalability.",
  },
  {
    title: "REST API Integration",
    description:
      "Connect and consume external data using fetch, axios, and async logic.",
  },
  {
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts across all screen sizes using mobile-first principles.",
  },
  {
    title: "Git & GitHub",
    description:
      "Version control for collaborative development and clean deployment workflows.",
  },
  {
    title: "Figma to Code",
    description:
      "Transform UI/UX designs into functional, accessible, and performant websites.",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Contributed to building a web-based platform with Astro and Strapi, collaborating with designers and backend engineers to improve UX and content flow.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Blockchain Learning Project",
    desc: "Explored smart contract development with JavaScript and Ethers.js. Focused on key concepts like wallets, transactions, and contract interaction.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Tech Education & Courses",
    desc: "Completed a degree in a tech-related field and additional courses in frontend development, JavaScript, and blockchain fundamentals.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Continuous Learning & Practice",
    desc: "Actively improving skills through personal projects, open-source contributions, and self-paced learning in modern web technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const approach = [
  {
    title: "Planning & Strategy",
    icon: "Phase 1",
    description:
      "Defining goals, structure, and timeline to ensure clear expectations and a focused development process.",
  },
  {
    title: "Development & Progress Update",
    icon: "Phase 2",
    description:
      "Building the product step by step while keeping you updated with regular insights and iterations.",
  },
  {
    title: "Development & Launch",
    icon: "Phase 3",
    description:
      "Finalizing, testing, and deploying a polished product — ready to go live and create impact.",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/l-Oskar",
  },
  {
    id: 2,
    img: "/fb.svg",
    url: "https://facebook.com/volodymyr.fediuk.2025",
  },
  {
    id: 3,
    img: "/link.svg",
    url: "#",
  },
];
