
// import React from 'react';
// import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";
// import './ProjectsCard.css'; // Import the CSS file

// const ProjectsCard = ({ title, des, src, githubLink, websiteLink, openImageViewer, openDescriptionViewer }) => {
  
//   // Function to truncate JSX description
//   const truncateText = (jsx, maxLength) => {
//     let textContent = '';

//     if (typeof jsx === 'string') {
//       textContent = jsx;
//     } else if (jsx?.props?.children) {
//       // If jsx is a JSX element, extract the text content
//       textContent = extractTextFromJSX(jsx);
//     }

//     // Truncate the text if it exceeds maxLength
//     return textContent.length > maxLength ? textContent.substring(0, maxLength) + "..." : textContent;
//   };

//   // Function to extract text from JSX by recursively going through its children
//   const extractTextFromJSX = (jsx) => {
//     let text = '';

//     if (typeof jsx === 'string') {
//       text = jsx;
//     } else if (jsx?.props?.children) {
//       // Check if the children are an array or a single element and handle accordingly
//       if (Array.isArray(jsx.props.children)) {
//         jsx.props.children.forEach(child => {
//           text += extractTextFromJSX(child); // Recursive call
//         });
//       } else {
//         text += extractTextFromJSX(jsx.props.children);
//       }
//     }

//     return text;
//   };

//   return (
//     <div className="project-card">
//       <div className="w-full h-[80%] overflow-hidden rounded-lg">
//         <img
//           className="w-full h-60 object-cover"
//           src={src}
//           alt={title}
//           onClick={() => openImageViewer(src)}
//         />
//       </div>
//       <div className="w-full mt-5 flex flex-col gap-6">
//         <div>
//           <div className="flex items-center justify-between">
//             <h3 className="projects-card-title">{title}</h3>
//             <div className="flex gap-2">
//               <span className="icon-container">
//                 <a href={githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
//                   <BsGithub />
//                 </a>
//               </span>
//               <span className="icon-container">
//                 <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="icon-link">
//                   <FaGlobe />
//                 </a>
//               </span>
//             </div>
//           </div>

//           <p
//             className="projects-card-description cursor-pointer"
//             onClick={() => openDescriptionViewer(des)}
//           >
//             {typeof des === "string"
//               ? truncateText(des, 100)
//               : truncateText(des, 100)} {/* Using truncateText for JSX */}
//             <span className="see-more-text">See More</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProjectsCard;


import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import './ProjectsCard.css'; // Import the CSS file

const ProjectsCard = ({ title, des, images, githubLink, websiteLink, openImageViewer, openDescriptionViewer }) => {
  
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
    <div className="project-card">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        {images && images.length > 0 && (
          <img
            className="w-full h-60 object-cover cursor-pointer"
            src={images[0]} // First image as preview
            alt={title}
            onClick={() => openImageViewer(images, 0)} // Pass array to viewer
          />
        )}
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="projects-card-title">{title}</h3>
            <div className="flex gap-2">
              {githubLink && (
                <span className="icon-container">
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <BsGithub />
                  </a>
                </span>
              )}
              {websiteLink && (
                <span className="icon-container">
                  <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                    <FaGlobe />
                  </a>
                </span>
              )}
            </div>
          </div>

          <p
            className="projects-card-description cursor-pointer"
            onClick={() => openDescriptionViewer(des)}
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
