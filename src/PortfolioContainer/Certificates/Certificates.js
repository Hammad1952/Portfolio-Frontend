import React, { useEffect, useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Certificates.css";
import CertificatesCard from "./CertificatesCard";
import {   
  APIs,
  Backend_Developement,
  Crash_course_python,
  databases_for_backedn,
  Django_web_frameword,
  Forntend_development,
  google_ai_Essentials,
  Introduction_to_database,
  Programming_in_python,
  Project_management,
  version_contro,
  genai,
} from "../../images";

export default function Certificates(props) {
    const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [isDescriptionViewerOpen, setIsDescriptionViewerOpen] = useState(false);
    const [currentDescription, setCurrentDescription] = useState('');
    const [showMore, setShowMore] = useState(false);

    let fadeInScreenHandler = (screen)=>{
        if (screen.fadeInScreen !== props.id)
            return
        Animations.animations.fadeInScreen(props.id)
    }

    const openImageViewer = (image) => {
      setCurrentImage(image);
      setIsImageViewerOpen(true);
    };
  
    const closeImageViewer = () => {
      setIsImageViewerOpen(false);
    };

    const openDescriptionViewer = (description) => {
      setCurrentDescription(description);
      setIsDescriptionViewerOpen(true);
    };
  
    const closeDescriptionViewer = () => {
      setIsDescriptionViewerOpen(false);
    };

    const toggleShowMore = () => {
      setShowMore(!showMore);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    // Array of all certificates
    const allCertificates = [
      {
        title: "Version Control",
        des: (
          <div className="certificate-details">
            <h4>Meta Professional Certification | Grade: 96.87%</h4>
              <p><strong>Completed:</strong> February 7, 2025 | <strong>Duration:</strong> 18 hours</p>
              
              <strong>Version Control Systems Mastery:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Git implementation and repository management</li>
                <li>Branching strategies and merge conflict resolution</li>
                <li>Code revision management and versioning techniques</li>
                <li>Collaborative development workflows</li>
              </ul>
              
              <strong>Command Line Proficiency:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Advanced command-line interface navigation</li>
                <li>Unix/Linux commands for file management</li>
                <li>System configuration via terminal</li>
                <li>Automation scripting for development tasks</li>
              </ul>
              
              <strong>GitHub Ecosystem Expertise:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Repository creation and management</li>
                <li>Pull requests and code review processes</li>
                <li>Issue tracking and project management</li>
                <li>CI/CD integration fundamentals</li>
              </ul>
              
              <strong>Technical Skills Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Software versioning methodologies</li>
                <li>Distributed version control systems</li>
                <li>Web development workflow optimization</li>
                <li>Software development toolchain integration</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Mastered industry-standard version control practices enabling 
                efficient collaboration in software development teams, maintaining code integrity, and implementing 
                systematic approach to project versioning.
              </p>
          </div>
        ),
        src: version_contro,
        websiteLink: "https://coursera.org/verify/OWT5N1LJ000O"
      },
      {
        title: "API Development",
        des: (
          <div className="certificate-details">
            <h4>Meta Professional Certification | Grade: 92.36%</h4>
              
              <strong>Core API Development Skills Gained:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Design and implementation of RESTful APIs</li>
                <li>Principles of REST architecture and best practices</li>
                <li>Building scalable and efficient APIs</li>
                <li>Data validation and authorization mechanisms</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>API development with Django framework</li>
                <li>Working with JSON and XML data formats</li>
                <li>Performance tuning and optimization techniques</li>
                <li>Debugging and testing API endpoints</li>
              </ul>
              
              <strong>Development Proficiencies:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>API documentation standards and practices</li>
                <li>Authentication and authorization implementation</li>
                <li>Test tool utilization for API validation</li>
                <li>Security best practices for API development</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Developed expertise in designing, 
                building, and securing RESTful APIs, implementing proper authentication 
                and authorization protocols, and creating comprehensive API documentation 
                for developer consumption.
              </p>
          </div>
        ),
        src: APIs,
        websiteLink: "https://coursera.org/verify/QB19DK492PK0"
      },
      {
        title: "Generative AI for Everyone",
        des: (
          <div className="certificate-details">
            <h4>DeepLearning.AI Certification</h4>
              
              <strong>Core Generative AI Concepts Mastered:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Fundamentals of generative AI and how it works</li>
                <li>Common use cases and limitations of generative AI technology</li>
                <li>Effective prompt engineering techniques</li>
                <li>Large language model principles and applications</li>
              </ul>
              
              <strong>Technical Skills Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>OpenAI platform utilization and API integration</li>
                <li>Cloud application development with AI capabilities</li>
                <li>Business process automation using generative AI</li>
                <li>ChatGPT implementation and optimization</li>
              </ul>
              
              <strong>Ethical and Business Implications:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Ethical standards for AI development and deployment</li>
                <li>Risk assessment for generative AI technologies</li>
                <li>Opportunity identification for business applications</li>
                <li>Societal impact analysis of AI technologies</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Gained comprehensive understanding of the complete 
                generative AI project lifecycle, from conception to deployment, including how to design 
                effective prompts and evaluate both the capabilities and limitations of generative AI systems 
                across various business contexts.
              </p>
          </div>
        ),
        src: genai,
        websiteLink: "https://coursera.org/verify/ASU5BPPKH8PD"
      },
      {
        title: "Crash Course on Python",
        des: (
          <div className="certificate-details">
            <h4>Google Professional Certification | Grade: 91%</h4>
              
              <strong>Core Python Programming Skills Gained:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Python syntax mastery & language fundamentals</li>
                <li>Data structure implementation (strings, lists, dictionaries)</li>
                <li>Object-oriented programming principles</li>
                <li>Script automation techniques</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Professional IDE configuration and utilization</li>
                <li>Algorithm design and optimization</li>
                <li>Systematic debugging methodologies</li>
                <li>Problem decomposition strategies</li>
              </ul>
              
              <strong>Computational Thinking Frameworks:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Programming principles for scalable solutions</li>
                <li>Problem management techniques</li>
                <li>Computational logic implementation</li>
                <li>Efficient resource management</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Developed proficiency in creating Python objects, 
                automating workflows, and implementing algorithms for real-world technical challenges.
              </p>
          </div>
        ),
        src: Crash_course_python,
        websiteLink: "https://coursera.org/verify/A2LES4WT33XH"
      },
      {
        title: "Django Web Framework",
        des: (
          <div className="certificate-details">
            <h4>Meta Professional Certification | Grade: 89.16%</h4>
              
              <strong>Core Django Framework Skills Gained:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Building robust web servers with Django</li>
                <li>Advanced data modeling techniques</li>
                <li>Implementing web security best practices</li>
                <li>Database management and optimization</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Full-stack web application development</li>
                <li>Application framework architecture design</li>
                <li>MySQL database integration and management</li>
                <li>HTML templating and frontend-backend integration</li>
              </ul>
              
              <strong>Development Proficiencies:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Back-end web development methodologies</li>
                <li>Application security implementation</li>
                <li>Database development and optimization</li>
                <li>Web application deployment strategies</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Developed expertise in creating secure, 
                scalable web applications using Django framework, implementing database solutions, 
                and applying industry-standard security measures for production environments.
              </p>
          </div>
        ),
        src: Django_web_frameword,
        websiteLink: "https://coursera.org/verify/I2WUHWB8WZV7"
      },
      {
        title: "Google AI Essentials",
        des: (
          <div className="certificate-details">
            <h4>Google Professional Certification | Grade: 97%</h4>
              
              <strong>Core AI Proficiency Skills Gained:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Use of generative AI tools for idea development and content creation</li>
                <li>Advanced prompt engineering techniques for optimal AI output</li>
                <li>AI-powered decision-making and task automation</li>
                <li>Strategies for staying current in the evolving AI landscape</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Machine learning fundamentals and AI principles</li>
                <li>ChatGPT implementation and optimization strategies</li>
                <li>Human-machine interface design and interaction</li>
                <li>Security awareness in AI applications</li>
              </ul>
              
              <strong>Ethical and Operational Frameworks:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Data ethics and responsible AI usage guidelines</li>
                <li>Bias identification and mitigation in AI systems</li>
                <li>Information privacy protection in AI implementations</li>
                <li>Operational efficiency through AI integration</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Developed expertise in leveraging AI tools 
                to accelerate work tasks, enhance content creation, and make more informed decisions 
                while maintaining ethical standards and security awareness in all AI implementations.
              </p>
          </div>
        ),
        src: google_ai_Essentials,
        websiteLink: "https://coursera.org/verify/Q67V4SWJII83"
      },
      {
        title: "Introduction to Back-End Development",
        des: (
          <div className="certificate-details">
            <h4>Meta Professional Certification | Grade: 95.60%</h4>
              
              <strong>Core Back-End Development Skills Gained:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Distinguishing between front-end, back-end, and full-stack development roles</li>
                <li>Creating and styling webpages with HTML and CSS</li>
                <li>Implementing UI frameworks for efficient development</li>
                <li>Responsive web design principles and techniques</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Bootstrap framework implementation</li>
                <li>JavaScript frameworks fundamentals</li>
                <li>General networking concepts for web development</li>
                <li>Web design principles and best practices</li>
              </ul>
              
              <strong>Development Proficiencies:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Full-stack web development foundations</li>
                <li>User interface (UI) design considerations</li>
                <li>Cross-browser compatibility techniques</li>
                <li>Web performance optimization strategies</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Developed comprehensive understanding of 
                back-end development principles, created responsive web interfaces using HTML, CSS, 
                and Bootstrap, and gained foundational knowledge of full-stack development processes 
                and best practices.
              </p>
          </div>
        ),
        src: Backend_Developement,
        websiteLink: "https://coursera.org/verify/UBBQTLZJPJNW"
      },
      {
        title: "Introduction to Databases for Back-End Development",
        des: (
          <div className="certificate-details">
            <h4>Meta Professional Certification | Grade: 92%</h4>
              
              <strong>Core Database Skills for Back-End Development:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Advanced database concepts and principles for back-end systems</li>
                <li>Database design methodologies optimized for server-side applications</li>
                <li>Query language implementation for efficient data retrieval</li>
                <li>Data modeling techniques for scalable back-end architectures</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>MySQL database management for back-end systems</li>
                <li>Relational database management systems (RDBMS) implementation</li>
                <li>NoSQL database concepts and applications</li>
                <li>Database administration for production environments</li>
              </ul>
              
              <strong>Back-End Development Proficiencies:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Planning and executing database development projects for back-end systems</li>
                <li>Database integration with server-side applications</li>
                <li>Performance optimization for database-driven applications</li>
                <li>Security implementation for database access in back-end environments</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Developed specialized database skills 
                specifically tailored for back-end development, including advanced database design, 
                optimization for server-side applications, and integration techniques that form the 
                foundation of robust, scalable back-end systems.
              </p>
          </div>
        ),
        src: databases_for_backedn,
        websiteLink: "https://coursera.org/verify/WA02074XJICK"
      },
      {
        title: "Introduction to Front-End Development",
        des: (
          <div className="certificate-details">
            <h4>Meta Professional Certification | Grade: 95.60%</h4>
              
              <strong>Core Front-End Development Skills Gained:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Creating and styling responsive webpages with HTML and CSS</li>
                <li>Implementing UI frameworks like Bootstrap for efficient development</li>
                <li>JavaScript fundamentals for interactive web applications</li>
                <li>React.js framework basics for component-based development</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Web development tools and workflows</li>
                <li>JavaScript frameworks and libraries</li>
                <li>Responsive web design techniques</li>
                <li>User interface (UI) design principles</li>
              </ul>
              
              <strong>Development Proficiencies:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Distinguishing between front-end, back-end, and full-stack roles</li>
                <li>Web application architecture and design</li>
                <li>Cross-platform compatibility implementation</li>
                <li>Modern web development best practices</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Developed comprehensive skills in front-end 
                web development, creating responsive and interactive web interfaces using HTML, CSS, 
                JavaScript, and modern frameworks like React.js and Bootstrap, while understanding 
                the complete web development ecosystem.
              </p>
          </div>
        ),
        src: Forntend_development,
        websiteLink: "https://cour sera.org/ver ify/DRINM618H30E"
      },
      {
        title: "Introduction to Databases",
        des: (
          <div className="certificate-details">
            <h4>Meta Professional Certification | Grade: 92%</h4>
              
              <strong>Core Database Management Skills Gained:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Fundamental concepts and principles of database systems</li>
                <li>Database design methodologies and best practices</li>
                <li>SQL query language proficiency for data manipulation</li>
                <li>Data integrity and validation techniques</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>MySQL database management and administration</li>
                <li>Relational database management systems (RDBMS)</li>
                <li>Query optimization and performance tuning</li>
                <li>Database schema design and implementation</li>
              </ul>
              
              <strong>Development Proficiencies:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Planning and executing database development projects</li>
                <li>Data modeling and relationship mapping</li>
                <li>Database security and access control</li>
                <li>Troubleshooting and maintenance procedures</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Developed comprehensive understanding of 
                database fundamentals, including design principles, SQL implementation, data integrity 
                enforcement, and administration of relational database systems using MySQL for 
                real-world applications.
              </p>
          </div>
        ),
        src: Introduction_to_database,
        websiteLink: "https://coursera.org/verify/DRINM618H30E"
      },
      {
        title: "Programming in Python",
        des: (
          <div className="certificate-details">
            <h4>Meta Professional Certification | Grade: 97.58%</h4>
              
              <strong>Core Python Programming Skills Gained:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Mastery of foundational Python syntax and language fundamentals</li>
                <li>Object-oriented programming with classes, objects and methods</li>
                <li>Implementation of complex data structures and algorithms</li>
                <li>Development environment setup and configuration</li>
              </ul>
              
              <strong>Technical Competencies Developed:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Django web framework integration and utilization</li>
                <li>Comprehensive software testing methodologies</li>
                <li>Unit testing and test-driven development (TDD) practices</li>
                <li>Integrated development environment (IDE) proficiency</li>
              </ul>
              
              <strong>Development Proficiencies:</strong>
              <ul style={{ marginTop: "10px", marginBottom: "15px" }}>
                <li>Advanced debugging techniques and problem-solving</li>
                <li>Programming principles and best practices</li>
                <li>Cloud hosting and deployment strategies</li>
                <li>Code optimization and performance enhancement</li>
              </ul>
              
              <p style={{ marginTop: "15px" }}>
                <strong>Practical Applications:</strong> Achieved exceptional proficiency (97.58%) in 
                Python programming, encompassing object-oriented design, software testing methodologies, 
                web framework integration with Django, and deployment strategies for cloud environments, 
                demonstrating comprehensive mastery of both foundational and advanced Python concepts.
              </p>
          </div>
        ),
        src: Programming_in_python,
        websiteLink: "https://coursera.org/verify/354LJ7FAA47N"
      },
      {
        title: "Foundations of Project Management",
        des: (
          <div className="certificate-details">
            <h4>Google Professional Certification</h4>
            <strong>Project Management Skills Gained:</strong>
            <ul>
              <li>Project planning and execution methodologies</li>
              <li>Risk management and mitigation strategies</li>
              <li>Stakeholder communication and management</li>
              <li>Agile and traditional project management approaches</li>
            </ul>
            <p>
              <strong>Practical Applications:</strong> Developed foundational knowledge in project 
              management principles and practices.
            </p>
          </div>
        ),
        src: Project_management,
        websiteLink: "https://coursera.org/verify/9PQPMKLDLY3Q"
      }
    ];

    // Determine which certificates to display
    const displayedCertificates = showMore 
      ? allCertificates 
      : allCertificates.slice(0, 3);

    return (
      <div className="certificates-container screen-container" id={props.id || ""}>
        <div className="certificates-parent">
          <ScreenHeading title={"Certificates"} subHeading={"Here are My Certifications"} />
          <div className="certificates-grid">
            {displayedCertificates.map((certificate, index) => (
              <CertificatesCard
                key={index}
                title={certificate.title}
                des={certificate.des}
                src={certificate.src}
                websiteLink={certificate.websiteLink}
                openImageViewer={openImageViewer}
                openDescriptionViewer={openDescriptionViewer}
              />
            ))}
          </div>
          
          {allCertificates.length > 3 && (
            <div className="see-more-button-container">
              <button onClick={toggleShowMore} className="see-more-btn">
                {showMore ? "Show Less" : "Show More"}
              </button>
            </div>
          )}
        </div>
        
        {/* Fullscreen Image Viewer */}
        {isImageViewerOpen && (
          <div className="image-viewer-container active">
            <span className="image-viewer-close" onClick={closeImageViewer}>
              &times;
            </span>
            <img className="image-viewer" src={currentImage} alt="certificate" />
          </div>
        )}
        
        {/* Fullscreen Description Viewer */}
        {isDescriptionViewerOpen && (
          <div className="description-viewer-container active">
            <span className="description-viewer-close" onClick={closeDescriptionViewer}>
              &times;
            </span>
            <div className="description-viewer-content">
              {currentDescription}
            </div>
          </div>
        )}
      </div>
    );
}