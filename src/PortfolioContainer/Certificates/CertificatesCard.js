
import React, {useState} from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import './CertificatesCard'; // Import the CSS file
import './CertificatesCard.css'; // Ensure it has the '.css' extension

const ProjectsCard = ({ title, des, src, githubLink, websiteLink, openImageViewer, openDescriptionViewer }) => {
  // Function to truncate JSX description
  const truncateText = (jsx, maxLength) => {
    let textContent = '';

    if (typeof jsx === 'string') {
      textContent = jsx;
    } else if (jsx?.props?.children) {
      textContent = extractTextFromJSX(jsx);
    }

    return textContent.length > maxLength
      ? textContent.substring(0, maxLength) + "..."
      : textContent;
  };

    // Function to extract text from JSX recursively
  const extractTextFromJSX = (jsx) => {
    let text = '';
    if (typeof jsx === 'string') {
      text = jsx;
    } else if (jsx?.props?.children) {
      if (Array.isArray(jsx.props.children)) {
        jsx.props.children.forEach(child => {
          text += extractTextFromJSX(child);
        });
      } else {
        text += extractTextFromJSX(jsx.props.children);
      }
    }
    return text;
  };
  return (
    <div className="project-card"> {/* Applying project-card class for styling */}
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover" // Removed group-hover classes for simplicity
          src={src}
          alt={title} // Changed alt to use the title for better accessibility
          onClick={() => openImageViewer(src)} // Open the image viewer when clicked
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="projects-card-title"> {/* Applying projects-card-title class */}
              {title}
            </h3>
            <div className="flex gap-2">
            <span className="icon-container"> {/* Updated class name for centering */}
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <BsGithub />
                </a>
              </span>
              <span className="icon-container"> {/* Updated class name for centering */}
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p
            className="projects-card-description cursor-pointer" // Added cursor-pointer for better UX
            onClick={() => openDescriptionViewer(des)} // Open the description viewer when clicked
          >
            {truncateText(des, 100)}
            <span className="see-more-text"> See More</span>
          </p>
        </div>
      </div>
   
    </div>
  );
}

export default ProjectsCard;
