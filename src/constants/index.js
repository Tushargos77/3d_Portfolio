import aec from '../assets/images/aec.png';
import briefcase from '../assets/images/briefcase.png';
import hero from '../assets/images/hero.jpg';
import meta from '../assets/images/meta.png';
import shopify from '../assets/images/shopify.png';
import starbucks from '../assets/images/starbucks.png';
import tesla from '../assets/images/tesla.png';


import python from '../assets/images/python.png';
import django from '../assets/images/django.png';
import mysql from '../assets/images/MySQL.png';

import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    // ✅ Now using correct images
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
];

export const experiences = [
    {
        title: "B.Tech Electronics & Communication Engineering",
        company_name: "Asansol Engineering College",
        icon: aec,
        iconBg: "#accbe1",
        date: "2023 - 2027",
        points: [
            "Studying core ECE subjects including Signals & Systems, MEMS, and Communication Engineering.",
            "Building full-stack web projects using React.js, Python, and Three.js.",
            "Exploring Machine Learning, Data Science, and AI-powered applications.",
            "Actively working on personal projects to strengthen software development skills.",
        ],
    },
    {
        title: "Python Full Stack Developer",
        company_name: "Self-Employed / Freelance",
        icon: briefcase,
        iconBg: "#fbc3bc",
        date: "2023 - Present",
        points: [
            "Developing full-stack web applications using Python, Django/Flask, and React.js.",
            "Building REST APIs and integrating frontend interfaces with backend services.",
            "Working with databases like MySQL and MongoDB for data storage and retrieval.",
            "Applying Machine Learning models into web applications for intelligent features.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Tushargos77',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/tushar-goswami-164334278',
    }
];

export const projects = [
    {
        theme: 'btn-back-red',
        name: '3D Developer Portfolio',
        description: 'Built an interactive 3D portfolio using React.js and Three.js featuring a floating island, animated dragon bird, and dynamic info popups.',
        iconUrl: briefcase,
        link: 'https://github.com/Tushargos77',
    },
    {
        theme: 'btn-back-blue',
        name: 'Voice Assistant with GUI',
        description: 'An ongoing Python-based voice assistant with a modern web GUI built using web technologies. Features speech recognition, voice response, and an interactive interface.',
        iconUrl: meta,
        link: 'https://github.com/Tushargos77',
    },
];