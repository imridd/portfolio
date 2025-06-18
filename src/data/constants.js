import collegeLogo from '../images/vsb-logo.jpg';
import schoolLogo from '../images/srv-logo.png';
import hero from '../images/port-img.png';
import carenest from '../images/CareNest logo.png';
export const Bio = {
  name: "Ridha",
  roles: [
    "Flutter Developer",
    "Java-Backend Developer",
    "SQL Enthusiast",
  ],
  description:
    "I’m a passionate individual, driven by a positive attitude and a growth mindset, I strive to make meaningful contributions—both as a team player and an independent problem solver. Whether it's backend development with Spring Boot, frontend work with React, or managing databases with MySQL, I'm committed to doing it with precision and passion.",
  github: "https://github.com/imridd",
  resume:
    "https://drive.google.com/file/d/158fRlqqsaAkR5XbYwaYPgJVmRpHsCFM8/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/ridha-rajasekar-440684250/",
  insta: "https://www.instagram.com/i_.am_.rid/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Flutter",
        image:
          "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "SpringBoot",
        image: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image:
          "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://vectorlogo.zone/logos/arduino/arduino-icon.svg",
    role: "IoT Intern",
    company: "Pantech Solutions",
    date: "July 2023",
    desc: "Explored Internet of Things concepts and built mini projects using sensors and microcontrollers. Learned hardware integration and real-world automation logic.",
    skills: ["IoT", "Arduino", "Sensors", "Embedded Systems"],
  },
  {
    id: 1,
    img: "https://cdn-icons-png.flaticon.com/512/1822/1822899.png",
    role: "Python Intern",
    company: "One Data Software Solutions",
    date: "Nov 2023",
    desc: "Worked on Python-based logic and gained hands-on experience in building python projects. Understood project structures and contributed to core logic development under mentorship.",
    skills: ["Python", "Problem Solving"],
  },
  {
    id: 2,
    img: carenest,
    role: "Full Stack Developer",
    company: "Personal Project – CareNest",
    date: "April 2025",
    desc: "Built a full-stack donation management website for NGOs using React, Spring Boot, and MySQL. Integrated user and admin roles, login flows, and dynamic forms for food and clothing donation/requests.",
    skills: [
      "ReactJS",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Responsive Design",
    ],
    doc: "https://github.com/imridd/CareNest", 
  },
  {
    id: 3,
    img: hero, 
    role: "Portfolio Developer",
    company: "Self",
    date: "June 2025",
    desc: "Developed a personal portfolio website to showcase projects, skills, and work experience using ReactJS and hosted it online.",
    skills: ["ReactJS", "Three JS","Portfolio Design"],
    doc: "https://github.com/imridd/portfolio", 
  },
];
export const education = [
  {
    id: 0,
    img: collegeLogo,
    school: "V.S.B.College of Engineering Technical Campus",
    date: "Oct 2021 - May 2025",
    grade: "CGPA: 8.9", 
    desc: "Currently pursuing my Bachelor's degree in Information Technology. Gained strong foundation in Java, Spring Boot, MySQL, Web Development, and Software Engineering. Participated in project development, internships, and coding events to enhance my practical and problem-solving skills.",
    degree: "Bachelor of Technology - B.Tech, Information Technology",
  },
  {
    id: 1,
    img: schoolLogo,
    school: "Sri Ragavendra Vidyalaya Matriculation Higher Secondary School",
    date: "June 2019 - Apr 2021",
    grade: "HSC: 95%", 
    desc: "Completed my Higher Secondary (Class XII) with a focus on Science and Computer Science. Developed early interest in programming and logical reasoning.",
    degree: "HSC (XII), Computer Science Stream",
  },
  {
    id: 2,
    img: schoolLogo,
    school: "Sri Ragavendra Vidyalaya Matriculation Higher Secondary School",
    date: "June 2017 - Apr 2019",
    grade: "SSLC: 92%", 
    desc: "Completed my SSLC (Class X) education with distinction, laying the foundation for my technical journey ahead.",
    degree: "SSLC (X)",
  },
];
export const projects = [
  {
    id: 0,
    title: "CareNest - NGO Donation Platform",
    date: "Apr 2025",
    description:
      "CareNest is a web application designed to connect donors and receivers for food and clothing.",
    image:
      "https://raw.githubusercontent.com/imridd/CareNest/main/client/src/assets/carenest-cover.png", // Replace with your actual image URL
    tags: ["ReactJS", "Spring Boot", "MySQL", "XAMPP", "REST API"],
    category: "web app",
    github: "https://github.com/imridd/carenest",
  },
  {
    id: 1,
    title: "Tasky - Task Management API",
    date: "Jun 2024",
    description:
      "Tasky is a backend solution for managing tasks with CRUD operations.",
    image:
      "https://raw.githubusercontent.com/imridd/Tasky-task-management-backend/main/Screenshot%202025-06-18%20121314.png",
    tags: ["Spring Boot", "MySQL", "REST API", "RequestBin"],
    category: "backend",
    github: "https://github.com/imridd/Tasky-task-management-backend",
  },
];
