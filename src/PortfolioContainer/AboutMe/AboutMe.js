
import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css"

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTSANTS = {
        description: <div>
            <p>
                Backend-focused <strong>Software Engineer</strong> with expertise in <strong>Python</strong>, <strong>Django</strong>, <strong>FastAPI</strong>, and <strong>RESTful APIs</strong>. 
                Skilled in building scalable systems and integrating <strong>AI/ML models</strong> using <strong>PyTorch</strong> and <strong>TensorFlow</strong>.
            </p>
            <p>
                Experienced in real-time interfaces with <strong>Gradio</strong>, managing <strong>SQL databases</strong> (MySQL, PostgreSQL, SQLite), and 
                collaborating via <strong>Git</strong>. Comfortable supporting frontend with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.
            </p>
            <p>
                Developed a <strong>MultiMode POS System</strong> at Iconicthink, building a modular, RESTful backend using Django and DRF, 
                and designed scalable data models with custom managers and optimized MySQL queries. Also, built an AI-powered diagnostic platform <strong>EyeNOVA</strong> for 
                diabetic retinopathy screening using deep learning models and FastAPI.
            </p>
        </div>,
         
        highlights: {
            bullets: [
                <span style={{ display: "inline-block", width: "350px" }}><strong>Backend Development:</strong> Python, Django, FastAPI, RESTful APIs, Scalable Systems</span>,
                <span style={{ display: "inline-block", width: "350px" }}><strong>AI/ML Integration:</strong> PyTorch, TensorFlow, Model Training & Deployment</span>,
                <span style={{ display: "inline-block", width: "350px" }}><strong>Real-time Interfaces:</strong> Gradio for AI demo and applications</span>,
                <span style={{ display: "inline-block", width: "350px" }}><strong>Database Management:</strong> MySQL, PostgreSQL, SQLite, Django ORM</span>,
                <span style={{ display: "inline-block", width: "350px" }}><strong>Frontend Development:</strong> React.js, HTML, CSS, Bootstrap, JavaScript</span>,
                <span style={{ display: "inline-block", width: "350px" }}><strong>DevOps & Deployment:</strong> Heroku, Git, GitHub, Vercel</span>,
                <span style={{ display: "inline-block", width: "350px" }}><strong>Security & API:</strong> RESTful APIs, Middleware, Role-Based Access Control</span>,
            ],
            heading: <span><strong>Technical Expertise:</strong></span>,
        }
    }

    const renderHighlight = () => {
        return (
            SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
                <div className="about-me-card">
                    <div className="about-me-profile"></div> 
                    <div className="about-me-details">
                        <span className="about-me-description">{SCREEN_CONSTSANTS.description}</span>
                        <div className="about-me-highlights">
                            <div className="highlight-heading">
                                <span>{SCREEN_CONSTSANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div> 
                        <div className="about-me-options">
                            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                                Hire Me
                            </button>
                            <a href="HAMMAD_CV.pdf" download="HAMMAD_CV.pdf">
                                <button className="btn highlighted-btn">Get Resume</button>
                            </a>
                        </div>
                    </div>   
                </div> 
            </div>
        </div>
    );
}