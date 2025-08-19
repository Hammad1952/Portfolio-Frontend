// import React, { useState, useEffect } from 'react'
// import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
// import ScrollService from '../../utilities/ScrollService'
// import Animations from '../../utilities/Animations'
// import './Resume.css'
// // import { transcode } from 'buffer';
// // import { transform } from '@babel/core';
// // import { required } from 'yargs';

// export default function Resume(props) {
//     const [selectedBulletIndex, setSelectedBulletIndex]=useState(0);
//     const [carousalOffSetStyle, setCarousalOffSetStyle]=useState({});

//     let fadeInScreenHandler = (screen)=>{
//         if (screen.fadeInScreen !== props.id)
//             return
//         Animations.animations.fadeInScreen(props.id)  
//     }
//     const fadeInSubscription = 
//     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

//     const ResumeHeading = (props) =>{
//         return (
//             <div className='resume-heading'>
//             <div className='resume-main-heading'>
//                 <div className='heading-bullet'></div>
//                     <span>{props.heading ? props.heading:''}</span>
//                     {props.fromDate && props.toDate ?(
//                         <div className='heading-date'>
//                             {props.fromDate + "_" + props.toDate}
//                         </div>
//                     ):(
//                         <div></div>
//                     )}
//                 </div>
//                 <div className='resume-sub-heading'>
//                     <span>{props.subHeading ? props.subHeading: ''}</span>
//                 </div>
//                 <div className='resume-heading-description'>
//                     <span>{props.description ? props.description: ''}</span>
//                 </div> 
//             </div>
        

//         )
        
//     };

//     const resumeBullets =[
//         {label: "Education", logoSrc:"education.svg" },
//         {label: "Work History", logoSrc:"work-history.svg" },
//         {label: "Programming Skills", logoSrc:"programming-skills.svg" },
//         {label: "Projects", logoSrc:"projects.svg" },
//         {label: "Interests", logoSrc:"interests.svg" },
//     ];

//     const programmingSkillDetails =[
//         {skill:"JavaScript", ratingPercentage: 85 },
//         {skill:"HTML", ratingPercentage: 85 },
//         {skill:"CSS", ratingPercentage: 85 },
//         {skill:"Java", ratingPercentage: 60 },
//         {skill:"REACT", ratingPercentage: 80 },
//         {skill:"Python", ratingPercentage: 85 },
//         {skill:"Django", ratingPercentage: 85 },
//         {skill:"MYSQL", ratingPercentage: 70 },
//         {skill:"LINUX", ratingPercentage: 80 },
//         {skill:"MS OFFICE", ratingPercentage: 90 },

//     ];
//     const projectsDetails =[
//         {
//             title:"Personal Portfolio Website",
//             duration: { fromDate: "2020", toDate:"2021"},
//             description:"A Personal Protfolio Website to showcase all my skills and project at one place",
//             subHeading:"Technologies Used: React JS, Bootstrap, Node JS",
//         },
//         {
//             title:"Ecommerece Website",
//             duration: { fromDate: "2020", toDate:"2021"},
//             description:"A Personal Protfolio Website to showcase all my skills and project at one place",
//             subHeading:"Technologies Used: React JS, Bootstrap, Node JS",
//         },
//         {
//             title:"Point of Sale System",
//             duration: { fromDate: "2020", toDate:"2021"},
//             description:"A Personal Protfolio Website to showcase all my skills and project at one place",
//             subHeading:"Technologies Used: React JS, Bootstrap, Node JS",
//         },
//     ];

//     const resumeDetails =[
//         <div className='resume-screen-container' key='education'>
//             <ResumeHeading 
//             heading={"Mirpur University of Science and Technology (MUST)"}
//             subHeading={"BS Computer Systems Engineering"}
//             fromDate={"2021"}
//             toDate={"2025"}
//             description={
//                 <div>
//                     <p>
//                         Specialized in <strong>Machine Learning</strong> and <strong>Artificial Intelligence</strong> during my undergraduate studies. My coursework focused on mastering <strong>Data Structures</strong> and <strong>Algorithms</strong>, sharpening my problem-solving skills. In the <strong>AI</strong> and <strong>ML</strong> specialization, I gained hands-on experience in developing <strong>machine learning models</strong>, implementing <strong>AI algorithms</strong>, and applying <strong>data-driven optimization techniques</strong> to solve real-world challenges. I also studied <strong>Computer Communication Networks</strong>, where I learned the fundamentals of data transmission and network protocols. Through <strong>Database Management Systems</strong>, I honed my skills in designing robust, efficient databases, and my <strong>Operating Systems</strong> coursework deepened my understanding of system resources and performance optimization. Additionally, <strong>System Programming</strong> provided me with low-level programming knowledge, enabling me to bridge the gap between hardware and software.
//                     </p>
//                 </div>
//             }
//             />
            

//         </div>, 

//         <div className='resume-screen-container' key='work-experience' >
//             <div className='experience-container'>
//              <ResumeHeading 
//              heading={"Iconic Think"}
//              subHeading={"FULL STACK DEVELOPER"}
//              fromDate={"April 2023"}
//              toDate={"Nov 2024"}
//             />
//             <div className='experience-description'>
//                 <span className='resume-description-text'>
//                     Developed a MultiMode POS System with comprehensive functionality including product management, inventory, sales, and user role management.
//                 </span>  
//                 </div>
//             <div className='experience-description'>
//                 <span className='resume-description-text'>
//                     - Built modular, RESTful backend using Django and Django REST Framework.
//                 </span>
//                 <br/>
//                 <span className='resume-description-text'>
//                     - Designed scalable data models with custom managers, validators, and optimized MySQL queries.
//                     </span>
//                     <br/>
//                 <span className='resume-description-text'>
//                     - Developed role-based authentication using Django permissions and middleware.
//                 </span>
//                 <br/>
//                 <span className='resume-description-text'>
//                     - Integrated PDF generation with WeasyPrint, TinyCSS2, and HTML5lib for reporting and invoices.
//                 </span>
//                 <br/>
//                 <span className='resume-description-text'>
//                     - Processed image uploads via Pillow and handled styled document output using FontTools.
//                 </span>
//                 <br/>
//                 <span className='resume-description-text'>
//                     - Built responsive frontend components using HTML, CSS, JavaScript, and Bootstrap.
//                 </span>
//                 <br/>
//                 <span className='resume-description-text'>
//                     - Wrote comprehensive unit tests using Django's test framework with 85%+ code coverage.
//                 </span>
//                 <br/>
//                 <span className='resume-description-text'>
//                     - Followed modular code practices and used Git for version control and collaboration.
//                 </span>
//                 <br/>
//                 </div>
//                 </div>
//             </div>,


//             <div className='resume-screen-container programming-skills-container' key='programming-skills'>
//                 {programmingSkillDetails.map((skill, index)=>(
//                     <div className='skill-parent' key={index}>
//                         <div className='heading-bullet'></div>
//                         <span>{skill.skill}</span>
//                         <div className='skill-percentage'>
//                         <div style={{width:skill.ratingPercentage + "%"}}
//                         className='active-percentage-bar'>

//                         </div>
//                         </div>
                        
//                     </div>
//                 ))}
//             </div>,

//             <div className='resume-screen-container ' key="projects">
//             {projectsDetails.map((projectsDetails, index)=>(
//                 <ResumeHeading
//                 key={index}
//                 heading={projectsDetails.title}
//                 subHeading={projectsDetails.subHeading}
//                 description={projectsDetails.description}
//                 fromDate={projectsDetails.duration.fromDate}
//                 toDate={projectsDetails.duration.toDate}
//                 />
//             ))}
//             </div>,

//             <div className='resume-screen-container ' key="interests">

//                 <ResumeHeading
//                 heading="Teaching"
//                 description="Apart form being a Tech Enthusiast and a code write, i also love to do teaching"
//                 />
//                  <ResumeHeading
//                 heading="Teaching"
//                 description="Apart form being a Tech Enthusiast and a code write, i also love to do teaching"
//                 />
//                  <ResumeHeading
//                 heading="Teaching"
//                 description="Apart form being a Tech Enthusiast and a code write, i also love to do teaching"
//                 />


//             </div>


       
//     ];

//     const handleCarousal = (index) =>{
//         let offsetHeight = 360;
//         let newCarousalOffset ={
//             style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"},
//         };
//         setCarousalOffSetStyle(newCarousalOffset);
//         setSelectedBulletIndex(index);
//     };

//     const getBullets = ()=>{
//         return resumeBullets.map((bullet, index)=>(

//             <div onClick={()=>handleCarousal(index)} 
//             className={index === selectedBulletIndex ? 'bullet selected-bullet': "bullet"}
//             key={index}>
//                 <img className='bullet-logo'
//                 src ={require (`../../assets/Resume/${bullet.logoSrc}`)}
//                 alt='B'
//                 />
//                 <span className='bullet-label'>{bullet.label}</span>
//             </div>
//         ))
//     }

//     const getResumeScreen =() => {
//         return (
//             <div 
//             style={carousalOffSetStyle.style}
//             className='resume-details-carousal'>
//                 {resumeDetails.map((resumeDetail)=> resumeDetail)}
//             </div>
//         );
//     };




//     return (
//         <div className='resume-container screen-container ' id={props.id || ""}>
//             <div className='resume-content'>
//                 <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
//                 <div className='resume-card'>
//                     <div className='resume-bullets'>
//                         <div className='bullet-container'>
//                             <div className='bullet-icons'></div>
//                             <div className='bullets'>{getBullets()}
//                             </div>
//                         </div>
                        
//                     </div>
//                     <div className='resume-bullet-details'>{getResumeScreen()}</div>
//                 </div>
//             </div>
//         </div>
//   )
// }
import React, { useState, useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    useEffect(() => {
        return () => {
            fadeInSubscription.unsubscribe();
        }
    }, [fadeInSubscription]);

    const ResumeHeading = (props) => {
        return (
            <div className='resume-heading'>
                <div className='resume-main-heading'>
                    <div className='heading-bullet'></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className='heading-date'>
                            {props.fromDate + " - " + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                {props.subHeading && (
                    <div className='resume-sub-heading'>
                        <span>{props.subHeading}</span>
                    </div>
                )}
                {props.description && (
                    <div className='resume-heading-description'>
                        <span>{props.description}</span>
                    </div>
                )}
            </div>
        )
    };

    const resumeBullets = [
        { label: "Education", logoSrc: "education.svg" },
        { label: "Work History", logoSrc: "work-history.svg" },
        { label: "Skills", logoSrc: "programming-skills.svg" },
        { label: "Projects", logoSrc: "projects.svg" },
        { label: "Achievements", logoSrc: "interests.svg" },
    ];

    const skillCategories = [
        {
            name: "Languages & Backend",
            skills: [
                { skill: "Python", ratingPercentage: 90 },
                { skill: "Django", ratingPercentage: 88 },
                { skill: "Django REST Framework", ratingPercentage: 85 },
                { skill: "FastAPI", ratingPercentage: 80 },
                { skill: "Flask", ratingPercentage: 75 },
                { skill: "C/C++", ratingPercentage: 70 },
            ]
        },
        {
            name: "AI/ML & Tools",
            skills: [
                { skill: "PyTorch", ratingPercentage: 85 },
                { skill: "TensorFlow", ratingPercentage: 80 },
                { skill: "PyTorch Lightning", ratingPercentage: 75 },
                { skill: "OpenCV", ratingPercentage: 80 },
                { skill: "Scikit-learn", ratingPercentage: 85 },
                { skill: "Gradio", ratingPercentage: 80 },
                { skill: "LLM Integration", ratingPercentage: 75 },
            ]
        },
        {
            name: "Frontend Development",
            skills: [
                { skill: "React.js", ratingPercentage: 80 },
                { skill: "HTML", ratingPercentage: 90 },
                { skill: "CSS", ratingPercentage: 85 },
                { skill: "Bootstrap", ratingPercentage: 85 },
                { skill: "JavaScript", ratingPercentage: 80 },
            ]
        },
        {
            name: "Databases",
            skills: [
                { skill: "MySQL", ratingPercentage: 85 },
                { skill: "PostgreSQL", ratingPercentage: 80 },
                { skill: "SQLite", ratingPercentage: 85 },
                { skill: "Django ORM", ratingPercentage: 88 },
                { skill: "MongoDB", ratingPercentage: 75 },
            ]
        },
        {
            name: "DevOps & Deployment",
            skills: [
                { skill: "Git", ratingPercentage: 90 },
                { skill: "GitHub", ratingPercentage: 90 },
                { skill: "Heroku", ratingPercentage: 80 },
                { skill: "Vercel", ratingPercentage: 75 },
                { skill: "Linux Server", ratingPercentage: 85 },
                { skill: "AWS", ratingPercentage: 70 },
            ]
        },
        {
            name: "API & Security",
            skills: [
                { skill: "RESTful APIs", ratingPercentage: 90 },
                { skill: "Middleware", ratingPercentage: 80 },
                { skill: "Role-Based Access", ratingPercentage: 85 },
                { skill: "reCAPTCHA", ratingPercentage: 75 },
                { skill: "CSRF Protection", ratingPercentage: 80 },
            ]
        }
    ];

    const projectsDetails = [
        {
            title: "EyeNOVA: Multi-Lesion Retinal Segmentation",
            duration: { fromDate: "2024", toDate: "2025" },
            description: "AI-powered diagnostic platform for diabetic retinopathy screening using deep learning models with PyTorch, Gradio, and FastAPI. Integrated Gemini Pro API for treatment recommendations.",
            subHeading: "Technologies: Python, PyTorch, FastAPI, Gradio, OpenCV",
        },
        {
            title: "MultiMode POS System",
            duration: { fromDate: "2023", toDate: "2024" },
            description: "Built modular RESTful backend with Django and DRF for product management, inventory, sales, and user roles with MySQL optimization and PDF reporting.",
            subHeading: "Technologies: Django, Django REST Framework, MySQL, JavaScript, Bootstrap",
        },
        {
            title: "Hospital Management System",
            duration: { fromDate: "2023", toDate: "2023" },
            description: "Role-based system with appointment scheduling, prescriptions, and EHR using Django ORM with MySQL. Deployed on Heroku.",
            subHeading: "Technologies: Django, MySQL, Bootstrap, Heroku",
        },
        {
            title: "Rahamia Management System",
            duration: { fromDate: "2023", toDate: "2023" },
            description: "Secured financial workflows with OTP verification, session expiry, and custom RBAC for transactions and audit logs.",
            subHeading: "Technologies: Django, Django REST Framework, JavaScript, HTML/CSS",
        },
    ];

    const resumeDetails = [
        <div className='resume-screen-container' key='education'>
            <ResumeHeading
                heading={"Mirpur University of Science and Technology (MUST)"}
                subHeading={"BS Computer Systems Engineering - CGPA: 3.5/4.0"}
                fromDate={"2021"}
                toDate={"2025"}
                description={
                    <div>
                        <p>
                            Specialized in <strong>Machine Learning</strong> and <strong>Artificial Intelligence</strong> with coursework focused on Data Structures, Algorithms, Computer Networks, Database Management Systems, and System Programming. Developed strong foundations in AI/ML model development and data-driven optimization techniques.
                        </p>
                    </div>
                }
            />
        </div>,

        <div className='resume-screen-container' key='work-experience'>
            <div className='experience-container'>
                <ResumeHeading
                    heading={"Iconicthink"}
                    subHeading={"Full Stack Developer"}
                    fromDate={"April 2023"}
                    toDate={"November 2024"}
                />
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        Developed a MultiMode POS System with comprehensive functionality including product management, inventory, sales, and user role management.
                    </span>
                </div>
                <div className='experience-description'>
                    <span className='resume-description-text'>
                        - Built modular, RESTful backend using Django and Django REST Framework
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Designed scalable data models with custom managers, validators, and optimized MySQL queries
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Developed role-based authentication using Django permissions and middleware
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Integrated PDF generation with WeasyPrint for reporting and invoices
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Processed image uploads via Pillow and handled styled document output
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Built responsive frontend components using HTML, CSS, JavaScript, and Bootstrap
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Wrote comprehensive unit tests with 85%+ code coverage
                    </span>
                    <br />
                    <span className='resume-description-text'>
                        - Followed modular code practices and used Git for version control
                    </span>
                </div>
            </div>
        </div>,

        <div className='resume-screen-container programming-skills-container' key='programming-skills'>
            <div className='skills-header'>
                <h3>Technical Skills Overview</h3>
                <p>Proficiency across multiple technology domains with 2+ years of experience</p>
            </div>
            
            {skillCategories.map((category, categoryIndex) => (
                <div className='skill-category' key={categoryIndex}>
                    <h4 className='category-title'>{category.name}</h4>
                    <div className='skills-grid'>
                        {category.skills.map((skill, index) => (
                            <div className='skill-parent' key={index}>
                                <div className='skill-info'>
                                    <div className='heading-bullet'></div>
                                    <span className='skill-name'>{skill.skill}</span>
                                    <span className='skill-percentage'>{skill.ratingPercentage}%</span>
                                </div>
                                <div className='skill-percentage-bar'>
                                    <div 
                                        style={{ width: skill.ratingPercentage + "%" }}
                                        className='active-percentage-bar'
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>,

        <div className='resume-screen-container' key="projects">
            {projectsDetails.map((project, index) => (
                <ResumeHeading
                    key={index}
                    heading={project.title}
                    subHeading={project.subHeading}
                    description={project.description}
                    fromDate={project.duration.fromDate}
                    toDate={project.duration.toDate}
                />
            ))}
        </div>,

        <div className='resume-screen-container' key="achievements">
            <ResumeHeading
                heading="Competitions & Awards"
                description=""
            />
            <div className='achievements-list'>
                <div className='achievement-item'>
                    <span className='achievement-icon'>🏆</span>
                    <div className='achievement-content'>
                        <strong>Ranked 196/536</strong> – MIT Informatics Tournament, Winter 2025
                    </div>
                </div>
                <div className='achievement-item'>
                    <span className='achievement-icon'>🏆</span>
                    <div className='achievement-content'>
                        <strong>Ranked 109</strong> – CALICO Informatics Competition, Spring 2025
                    </div>
                </div>
                <div className='achievement-item'>
                    <span className='achievement-icon'>🏆</span>
                    <div className='achievement-content'>
                        <strong>Runner-Up</strong> – Web Development Battle, MUSTCon'24, MUST University
                    </div>
                </div>
            </div>
            
            <ResumeHeading
                heading="Certifications"
                description=""
            />
            <div className='certifications-list'>
                <div className='certification-item'>Crash Course on Python (Google)</div>
                <div className='certification-item'>Django Web Framework (Coursera)</div>
                <div className='certification-item'>Front-End & Back-End Development (Meta)</div>
                <div className='certification-item'>Databases for Back-End (Coursera)</div>
                <div className='certification-item'>Generative AI for Everyone (Coursera)</div>
                <div className='certification-item'>Google AI Essentials (Coursera)</div>
            </div>

            
        </div>
    ];

    const handleCarousal = (index) => {
        let offsetHeight = 360;
        let newCarousalOffset = {
            style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {
        return resumeBullets.map((bullet, index) => (
            <div onClick={() => handleCarousal(index)}
                className={index === selectedBulletIndex ? 'bullet selected-bullet' : "bullet"}
                key={index}>
                <img className='bullet-logo'
                    src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                    alt={bullet.label}
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen = () => {
        return (
            <div
                style={carousalOffSetStyle.style}
                className='resume-details-carousal'>
                {resumeDetails.map((resumeDetail) => resumeDetail)}
            </div>
        );
    };

    return (
        <div className='resume-container screen-container' id={props.id || ""}>
            <div className='resume-content'>
                <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}
                            </div>
                        </div>
                    </div>
                    <div className='resume-bullet-details'>{getResumeScreen()}</div>
                </div>
            </div>
        </div>
    )
}