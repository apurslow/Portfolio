import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    army,
    vetCenter,
    tcc,
    medline,
    aws,
    pmndrs,
  } from "../assets/index.js";



  //double check canvas wrapper field to ensure Id matches export Id in SectionWrapper
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const about_me = {
    preface: "Hello, I'm",
    title: "About Me",
    description:
      "I am butt",
    image: meta,
  };
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "PMNDRS",
      icon: pmndrs,
    },

    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Server",
      company_name: "Tacoma Comedy Club",
      icon: tcc,
      iconBg: "#E6DEDD",
      date: "July 2023 - Present",
      points: [
        "Greeted 100+ guests daily, providing club rules and safety regulations.",
        "Served tables by taking orders, serving customers, and using the POS system, increasing average sales by 10%.",
        "Provided quality customer service by consistently satisfying greater than 85% of customers’ food and drink requests within 5 minutes of the order."
      ],
    },
    {
      title: "L4 Software Engineer",
      company_name: "AWS",
      icon: aws,
      iconBg: "#E6DEDD",
      date: "April 2022 - Dec 2022",
      points: [
        "Designed, Tested, and Implemented metric dashboards for EC2 instances and EBS Volumes using CloudWatch and Java to identify outages and potential causes.",
        "Presented daily updates utilizing agile methodologies in meetings to track progress, reduce escalation numbers, and prioritize tasks.",
        "Developed/Debugged code utilizing EC2 instances, CloudWatch, S3, EBS volumes, Lamda, and IAM roles.",
        "Refactored existing code to pivot from or add to existing product using Java.",
        "Delivered all code changes utilizing the  AWS CI/CD pipeline."
      ],
    },
    {
      title: "Work Study",
      company_name: "Tacoma Veteran Center",
      icon: vetCenter,
      iconBg: "#E6DEDD",
      date: "Aug 2017 - Sep 2019",
      points: [
        "Operated the telephone to answer, screen, and forward calls, providing information, taking messages, and scheduling appointments. ",
        "Greet persons entering establishment, determine nature and purpose of visit, and direct or escort them to specific destinations. ",
        "Scheduled appointments, maintained, and updated appointment calendars, allowing for the more efficient use of time and resources.",
        "Heard and resolved complaints from customers or the public by listening and responding to their concerns.",
      ],
    },
    {
      title: "Airborne Infantryman 11B",
      company_name: "United States Army",
      icon: army,
      iconBg: "#E6DEDD",
      date: "Aug 2015 - June 2017",
      points: [
        "Performed professionally under stressful and uncomfortable conditions for extended periods of time.",
        "Followed strict safety regulations and procedures.",
        "Optimized security protocols, improved the system's response time , and identified potential security flaws and vulnerabilities, fixing the issue with minimal downtime. ",
        
      ],
    },
    {
      title: "Warehouse Lead",
      company_name: "Medline Industries",
      icon: medline,
      iconBg: "#E6DEDD",
      date: "May 2012 - June 2015",
      points: [
        "Supervised a team of 10 employees to complete an average of 50 orders per day, ensuring that customers received products on or before their expected daily delivery date.",
        "Planned, organized, and controlled workloads among employees by communicating with individual workers and managers to make sure that all areas are covered with adequate staffing.",
        "Coordinated scheduling needs and workflow to satisfy customer needs by communicating with the warehouse staff and ensuring that they have the resources and time to complete the job.",
        "Operated a variety of warehouse equipment, including order picker,  electric pallet jack, reach truck, and low level order picker.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, about_me };