// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import bootstrap from "./assets/images/Skills/bootstrap.png";
import wordpress from "./assets/images/Skills/wp.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import tailwind from "./assets/images/Skills/Tailwind.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "ENN",
    LastName: "TEK",
    btnText: "Message Me",
    image: Hero_person,
    hero_content: [
      {
        count: "1+",
        text: "Years of Experience in Web development",
      },
      {
        count: "12+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "UI/UX design tool.",
        logo: figma,
      },
      {
        name: "Node.js",
        para: "Backend JavaScript runtime.",
        logo: nodejs,
      },
      {
        name: "WordPress",
        para: "Website and blog platform.",
        logo: wordpress,
      },
      {
        name: "React.js",
        para: "Frontend JS library.",
        logo: reactjs,
      },
      {
        name: "Bootstrap",
        para: "CSS framework for layouts.",
        logo: bootstrap,
      },
      {
        name: "Tailwind CSS",
        para: "Utility-first CSS.",
        logo: tailwind,
      }, 
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Custom websites built with, HTML, CSS, JavaScript, React, Node.js and WordPress. Fast, mobile-friendly, and tailored to your goals.",
        logo: services_logo1,
      },
      {
        title: "Tech Tutoring",
        para: "Online and [1-on-1 lessons (coming soon!)] in web development, programming, and tools like Git and Figma. Learn at your pace.",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "Professional photo retouching and re presentation for web and print media.",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY WORKS",
    image: person_project,
    project_content: [
      {
        title: "Media Website",
        image: project1,
      },
      {
        title: "e-Commerce Website",
        image: project2,
      },
      {
        title: "Personal Blog",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with you was a game-changer for our business. The website you built not only looks stunning but has improved our conversion rate by 40%. Highly recommend your development skills!”",
        img: avatar1,
        name: "Sarah Johnson",
        role: "CEO, TechSolutions Inc."
      },
      {
        review:
          "“Your tutoring sessions transformed my understanding of React. In just 3 months, I went from beginner to landing my first front-end developer job. Your teaching style is incredibly effective!”",
        img: avatar2,
        name: "Michael Chen",
        role: "Junior Developer"
      },
      {
        review:
          "“The Photoshop work you delivered for our marketing campaign was exceptional. You perfectly captured our brand aesthetic while adding creative touches we hadn't even considered.”",
        img: avatar3,
        name: "Emily Rodriguez",
        role: "Marketing Director"
      },
      {
        review:
          "“Reliable, skilled, and great communicator. You've been handling our WordPress maintenance for a year now, and we've had zero downtime. Worth every penny!”",
        img: avatar4,
        name: "David Wilson",
        role: "Small Business Owner"
      }
    ],
  },
  Hireme: {
    title: "Contact Me",
    subtitle: "FOR YOUR NEEDS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In tutoring and web development, my skills are unmatched. I simplify complex concepts for learners and build high-performance websites with precision—delivering excellence in both teaching and tech",
    btnText: "Message Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "enntech345@gmail.com",
        icon: GrMail,
        link: "mailto:enntech345@gmail.com",
      },
      {
        text: "+234 81 6753 6391",
        icon: FaWhatsapp,
        link: "https://wa.me/2348167536391",
      },
      {
        text: "EnnTech IG",
        icon: BsInstagram,
        link: "https://www.instagram.com/hakeem.muhideen/",
      },
    ],
  },
  Footer: {
    text: "All © Copyrights Reserved 2025",
  },
};
