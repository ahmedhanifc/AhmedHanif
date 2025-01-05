const express = require('express');
const router = express.Router();

router.get("/", (req,res) => {

    res.render("home" , {
        layout:"main",
    })
})

router.get("/experience", (req,res) => {
    let professionalExperience = [{
        company:"University of Doha For Science and Technology",
        date: "September 2024 - Onwards",
        position: "Teaching Assistant - College of Computing and IT",
        description: "I am excited to start my role as a Teaching Assistant, where I will assist professors and support teaching in areas such as programming, mathematics, data science, and AI. My focus will be on helping students develop key skills, including logical thinking and problem-solving.",
        location:"Doha, Qatar",
        logo:"./static/images/udst.png",
    },
    {
        company:"Optimum Systems",
        date:"July 2024 - August 2024",
        position:"AI Engineer",
        description:"I processed and cleaned data using Python libraries, automating tasks to ensure consistent and accurate input for machine learning models. I then trained a BERT model on medical guidelines, developing a RAG pipeline that achieved a higher similarity score than OpenAI. Additionally, I modified the pipeline to extract JSON and convert it into Excel format for more efficient information extraction.",
        location:"Doha, Qatar",
        logo:"./static/images/optimumSystems.png",
    },
    {
        company:"University of Doha for Science & Technology",
        date:"September 2023 - June 2024",
        position:"Technical Writing Consultant",
        description:"I helped students with their writing assignments, guiding them through the process and improving grammar, ideas, research, and APA formatting. I also assisted with presentations, focusing on PowerPoint skills, audience, and style. Additionally, I ensured students followed APA guidelines for tables and figures. I regularly updated instructors on student progress and shared any concerns or recommendations.",
        location:"Doha, Qatar",
        logo:"./static/images/udst.png",
    },

];
    let volunteerExperience = [{
        company:"University of Doha for Science & Technology",
        date:"April 2024",
        position:"Master of Ceremonies",
        description:"As the Master of Ceremonies for a prominent student symposium, I facilitated the showcase of capstone projects, adeptly steering presentations to align with the event's rigorous schedule. My coordination with leadership ensured equity and order, and I had the honor of delivering the closing remarks and award presentations, contributing to the event's enduring success and distinction.",
        location:"Doha, Qatar",
        logo:"/static/images/udst.png",
    },
    {
        company:"University of Doha for Science & Technology",
        date:"March 2024 & May 2024",
        position:"Speaker - Academic Integrity Workshop",
        description:"I orchestrated comprehensive research on AI tools, leading to a successful presentation to a sizable audience. The focus was on the practical integration of AI in academic environments and a balanced examination of its constraints. Additionally, I provided foresight into the evolving landscape of AI technologies, offering participants a glimpse into the potential future shifts and their broader implications.",
        location:"Doha, Qatar",
        logo:"./static/images/udst.png",
    },
    {
        company:"Fookis Labs",
        date:"February 2023 - Febryary 2024",
        position:"Photography Assistant",
        description:"I worked with Rare Burger Qatar and Bob Burger to model hands for marketing food products. I collaborated with photographers and art directors to create engaging hand shots and helped set up lighting, backdrops, and props for the best food presentation. Additionally, I researched market trends to stay updated on the latest food styling and presentation techniques.",
        location:"Doha, Qatar",
        logo:"./static/images/fookis_labs_logo.jpeg",
    },
    {
        company:"Qatar Debate",
        date:"October 2023, February 2024 - March 2024",
        position:"Judge",
        description:"Judged teams in the Asian Parliamentary debate format, scoring them on reasoning, persuasion, and communication. I provided constructive feedback to help debaters improve and contributed to the tournament's success by fostering a positive and educational environment",
        location:"Doha, Qatar",
        logo:"/static/images/qatardebate_logo.jpeg",
    },
    {
        company:"University of Doha for Science & Technology",
        date:"February 2024",
        position:"Volunteer - High School Tour",
        description:"Received a Certificate of Appreciation from the University of Doha for Science & Technology for volunteering during the High School Tour by the College of Computing and IT. I guided students, answered their questions, and shared insights about the tech field, inspiring the next generation of tech professionals.",
        location:"Doha, Qatar",
        logo:"./static/images/udst.png",
    },
    {
        company:"Qatar Debate",
        date:"January 2023 - September 2023",
        position:"Debater",
        description:"I competed in both Asian and British Parliamentary debate formats, adapting to different styles and rules. I crafted well-researched arguments and presented them effectively to persuade judges and audiences. This experience sharpened my critical thinking and quick response skills. I also worked closely with my teammates to develop strong strategies, focusing on teamwork and clear communication.",
        location:"Doha, Qatar",
        logo:"/static/images/qatardebate_logo.jpeg",
    },
    /*
    {
        company:"",
        date:"",
        position:"",
        description:"",
        location:"",
        logo:"",
    }
    */
]

    let {professionalExperienceSelected} = req.query;
    if(professionalExperienceSelected === undefined){
        professionalExperienceSelected = true;
    }
    professionalExperienceSelected = professionalExperienceSelected === "false" ? false : true;

    res.render("experience" , {
        layout:"main",
        professionalExperience,
        volunteerExperience,
        professionalExperienceSelected,
    })
})


module.exports = router