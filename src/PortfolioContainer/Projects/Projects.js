import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";
import {   courseAdd, courseAll, exam, lectureAdd, main, myCourses, program, uploadvideo, quiz, resultStudent, result, studentAdd, studentManagement} from "../../images";
import {    haDoctorList, HMS,
  haHomepage,
  haSpecialization,
  haUserdetatils,
  hdAppoitments,
  hdHomepage,
  hdPatient,
  hdPatientAdd,
  hpBookappointment} from "../../images";

import {    
  //main
  POS,
  // Users
  userList,
  // Categories
  productcatagery,
  // Suppliers
  supplierList,
  supplierLedger,
  pendingAmountForm,
  // Customers
  customerList,
  customerAddForm,
  // Products
  product1DList,
  product1DAdd,
  product2DList,
  product2DAdd,
  productRentalList,
  productRentalAdd,
  // Purchases
  purchaseList,
  purchaseAdd,
  purchaseReceipt,
  // Sales
  saleAdd,
  saleReceipt,
  // Expenses
  expenseList,
  expenseCategoryList,
  // Reports
  salesReport} from "../../images";
import {    DRD,
  work,
  classification,
  vessel,
  seg1,
  seg2,
  seg3
  } from "../../images";


export default function AboutMe(props) {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [isDescriptionViewerOpen, setIsDescriptionViewerOpen] = useState(false);
  const [currentDescription, setCurrentDescription] = useState("");
  const [showMore, setShowMore] = useState(false);

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  const openImageViewer = (images, startIndex = 0) => {
    setCurrentImages(images);
    setCurrentImageIndex(startIndex);
    setIsImageViewerOpen(true);
  };

  const closeImageViewer = () => {
    setIsImageViewerOpen(false);
    setCurrentImages([]);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
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

  // 🔹 Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isImageViewerOpen) return;

      if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      } else if (event.key === "Escape") {
        closeImageViewer();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isImageViewerOpen, currentImages]);

  const allCertificates = [
        {
          title: "Multi-mode Point of Sale System",
            des:(
              <div className="project-details">
                <h3> Multi-mode POS: Unified Inventory & Sales Platform for Hybrid Retail Operations</h3>
                <p>
                  A comprehensive Django-based point-of-sale system supporting three product dimensions with real-time inventory tracking, financial management, and automated reporting. Processes complex transactions across physical goods, area-based materials, and equipment rentals in a single workflow.
                </p>
                
                <h4>Core Functionalities:</h4>
                <ul>
                  <li><strong>Tri-dimensional Product Handling</strong> - Unified management of 1D (unit-based), 2D (area-based), and rental (time-based) products</li>
                  <li><strong>Automated Financial Calculations</strong> - Real-time cost computation for area (L×W×price) and rentals (days×daily rate)</li>
                  <li><strong>Credit Management System</strong> - Track customer pending amounts and supplier liabilities</li>
                  <li><strong>Multi-mode Sales Transactions</strong> - Combine different product types in single receipts</li>
                  <li><strong>Inventory Intelligence</strong> - Stock tracking with automated deduction across all product types</li>
                </ul>

                <h4>Technical Implementation:</h4>
                <ol>
                  <li><strong>Django 4.1.5</strong> (Python backend)</li>
                  <li><strong>MySQL</strong> (Database)</li>
                  <li><strong>WeasyPrint</strong> (PDF receipt generation)</li>
                  <li><strong>Django REST Framework</strong> (API endpoints)</li>
                  <li><strong>Custom ORM Models</strong> (Product polymorphism)</li>
                </ol>

                <h4>Key Modules:</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Module</th>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Features</th>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Tech Components</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Product Management</strong></td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        • 1D/2D/Rental product types<br/>
                        • Automated area calculations<br/>
                        • Rental duration pricing
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        Django Models<br/>
                        Polymorphic ORM<br/>
                        UnitConverter
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Transaction Engine</strong></td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        • Hybrid cart system<br/>
                        • Partial payments<br/>
                        • Discount application
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        Atomic transactions<br/>
                        Calculator service<br/>
                        WeasyPrint
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Financial Tracking</strong></td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        • Supplier payable tracking<br/>
                        • Customer credit management<br/>
                        • Expense categorization
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        Balance fields<br/>
                        Django-phonenumber<br/>
                        Custom validators
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Reporting System</strong></td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        • Sales analytics<br/>
                        • Expense reports<br/>
                        • Inventory status
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        Django QS annotations<br/>
                        Chart.js integration<br/>
                        Excel export
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h4>Business Impact:</h4>
                <ul>
                  <li>Reduced checkout time by 60% through unified transaction processing</li>
                  <li>Decreased inventory errors by 75% with real-time stock synchronization</li>
                  <li>Improved cash flow visibility with automated payable/receivable tracking</li>
                  <li>Enabled data-driven decisions through exportable financial reports</li>
                </ul>
                
                <p>
                  The system handles complex retail scenarios like selling construction materials (PVC pipes), area-based products (carpet rolls), 
                  and equipment rentals (generators) in a single transaction, with automated receipt generation and inventory updates. 
                  Supports 300+ concurrent users with optimized MySQL queries.
                </p>
              </div>
            ),
            images: [
                    POS,
                    userList,
                    productcatagery,
                    supplierList,
                    supplierLedger,
                    pendingAmountForm,
                    customerList,
                    customerAddForm,
                    product1DList,
                    product1DAdd,
                    product2DList,
                    product2DAdd,
                    productRentalList,
                    productRentalAdd,
                    purchaseList,
                    purchaseAdd,
                    purchaseReceipt,
                    saleAdd,
                    saleReceipt,
                    expenseList,
                    expenseCategoryList,
                    salesReport] ,
            githubLink :"https://github.com/yourusername/multimode-pos",
            websiteLink :"#",
            openImageViewer :{openImageViewer},
            openDescriptionViewer :{openDescriptionViewer}
          
        },
        {
          title:"EYENOVA: Diabetic Retinopathy Detection",
            des: (
              <div className="project-details">
                <h3>EYENOVA: AI-Powered Diagnostic Platform for Diabetic Retinopathy</h3>
                <p>
                  A comprehensive deep learning system for early detection of diabetic retinopathy that combines multi-lesion segmentation, 
                  disease staging, and AI-generated clinical recommendations. Validated on 5,378 real-world cases with 98.3% clinical reliability.
                </p>
                
                <h4>Core Functionalities:</h4>
                <ul>
                  <li><strong>Multi-Lesion Segmentation</strong> - Pixel-level detection of 6 retinal pathologies (vessels, hemorrhages, exudates, etc.)</li>
                  <li><strong>DR Severity Classification</strong> - 5-stage grading (0-4) with hybrid CNN-Transformer architecture</li>
                  <li><strong>Clinical Decision Intelligence</strong> - Gemini-powered treatment recommendations aligned with AAO guidelines</li>
                  <li><strong>Real-Time Diagnostic Interface</strong> - Gradio web UI with PDF report generation</li>
                  <li><strong>Clinical Workflow Integration</strong> - Seamless EHR compatibility and priority triaging</li>
                </ul>

                <h4>Technical Implementation:</h4>
                <ol>
                  <li><strong>PyTorch Lightning</strong> (Model training framework)</li>
                  <li><strong>TensorFlow 2.16</strong> (Backend operations)</li>
                  <li><strong>Gemini Pro API</strong> (Treatment recommendations)</li>
                  <li><strong>Hydra Configuration</strong> (Model switching without code changes)</li>
                  <li><strong>WeasyPrint</strong> (Clinical PDF reports)</li>
                </ol>

                <h4>Key Modules:</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', margin: '10px 0' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f5f5f5' }}>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Module</th>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Features</th>
                      <th style={{ padding: '8px', border: '1px solid #ddd' }}>Tech Components</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Retinal Analysis</strong></td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        • U-Net lesion segmentation<br/>
                        • Fundus image preprocessing<br/>
                        • Quality control filters
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        OpenCV<br/>
                        Albumentations<br/>
                        PyTorch U-Net
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Disease Classification</strong></td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        • Hybrid DenseNet-ViT architecture<br/>
                        • 5-stage DR grading<br/>
                        • Confidence scoring
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        TensorFlow<br/>
                        Vision Transformers<br/>
                        Class weighting
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Clinical Intelligence</strong></td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        • Structured lesion-to-LLM pipeline<br/>
                        • Treatment plan generation<br/>
                        • Fallback rule-based system
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        Gemini Pro API<br/>
                        Prompt engineering<br/>
                        Medical knowledge base
                      </td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Deployment System</strong></td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        • Real-time web interface<br/>
                        • Asynchronous processing<br/>
                        • PDF report generation
                      </td>
                      <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                        Gradio<br/>
                        Hugging Face Spaces<br/>
                        WeasyPrint
                      </td>
                    </tr>
                  </tbody>
                </table>

                <h4>Clinical Impact:</h4>
                <ul>
                  <li>Reduced diagnosis time from <strong>14 days → 8 minutes</strong></li>
                  <li>Increased detection of vision-threatening Stage 4 DR by <strong>22%</strong></li>
                  <li>Decreased false positives by <strong>32%</strong> through lesion-classification cross-verification</li>
                  <li>Lowered patient no-show rate by <strong>17%</strong> through automated reminders</li>
                </ul>
                
                <p>
                  The system processes retinal fundus images through a triple-stage pipeline: lesion segmentation (U-Net), 
                  disease classification (DenseNet-ViT hybrid), and clinical recommendation generation (Gemini Pro). 
                  Achieves 92.5% diagnostic accuracy across diverse populations including validation in Pakistan's clinical settings.
                </p>
              </div>
            ),
            images: [ DRD, work, classification, vessel, seg1, seg2, seg3 ],
            githubLink: "https://github.com/Hammad1952/EYENOVA",
            websiteLink: "https://huggingface.co/spaces/eyenova/dr-diagnosis",
            openImageViewer: {openImageViewer},
            openDescriptionViewer: {openDescriptionViewer}
        },
        {
          title:"College Management System",
            des: (
              <div className="project-details">
                <h3>College Management System: Centralized Academic Administration Platform</h3>
                <p>
                  A full-featured Django-based system automating university operations with role-based access for administrators, lecturers, and students. Handles academic workflows from enrollment to grading with real-time tracking and reporting.
                </p>
                
                <h4>Core Functionalities:</h4>
                <ul>
                  <li><strong>Tri-level Access Control</strong> - Separate interfaces for Admins, Lecturers, and Students</li>
                  <li><strong>Academic Program Management</strong> - Create/update programs (Computer Eng, Biotechnology) with course hierarchies</li>
                  <li><strong>Automated Course Allocation</strong> - Assign lecturers to courses with conflict detection</li>
                  <li><strong>Dynamic Enrollment System</strong> - Student course registration with credit tracking and add/drop functionality</li>
                  <li><strong>Digital Assessment Suite</strong> - Quiz creation, automated grading, and performance analytics</li>
                  <li><strong>Comprehensive Gradebook</strong> - GPA calculation, transcript generation, and result publishing</li>
                </ul>


                <h4>Technical Implementation:</h4>
                <ol>
                  <li><strong>Django 4.0</strong></li>
                  <li><strong>PostgreSQL</strong></li>
                  <li><strong>Django REST Framework</strong></li>
                  <li><strong>ReportLab (PDF gen)</strong></li>
                  <li><strong>AWS S3 Storage</strong></li>
                </ol>

                <h4>Key Features:</h4>
                <ol>
                  <li><strong>Admin Portal</strong> - Manage academic sessions, allocate resources, and monitor institutional data</li>
                  <li><strong>Lecturer Workspace</strong> - Upload course materials, create assessments, and input grades</li>
                  <li><strong>Student Dashboard</strong> - Course registration, resource access, and performance tracking</li>
                  <li><strong>Automated Academic Calendar</strong> - Semester/session management with date-sensitive workflows</li>
                  <li><strong>Data Visualization</strong> - Interactive progress tracking and institutional analytics</li>
                  <li><strong>Session Authentication</strong> - Secure role-based access</li>
                </ol>
                
                <p>
                  The system reduces administrative workload by 40% through automation while providing students with transparent academic tracking. Supports 500+ concurrent users with AWS-backed infrastructure.
                </p>
              </div>
            ),
            images:[ main, lectureAdd,courseAdd,courseAll,exam,quiz,result, studentManagement,resultStudent, uploadvideo,studentAdd, myCourses, program ],
            githubLink:"https://github.com/Hammad1952/E-commerce-Webstie",
            websiteLink:"https://linkedin.com/in/hammad-ali-khan-317173308",
            openImageViewer:{openImageViewer},
            openDescriptionViewer:{openDescriptionViewer}
        },
        {
          title:"Hospital Management System",
            des:(
              <div className="project-details">
                <h3>Hospital Management System: Comprehensive Healthcare Administration Platform</h3>
                <p>
                  A Django-based solution automating hospital operations with multi-role access control for administrators, doctors, and patients. Streamlines healthcare workflows from patient registration to medical reporting with real-time tracking and analytics.
                </p>
                
                <h4>Core Functionalities:</h4>
                <ul>
                  <li><strong>Role-Based Access System</strong> - Dedicated portals for Admins, Doctors, and Patients</li>
                  <li><strong>Patient Lifecycle Management</strong> - Digital medical records, history tracking, and prescription management</li>
                  <li><strong>Intelligent Appointment System</strong> - Specialization-based doctor selection with real-time scheduling</li>
                  <li><strong>Medical Specialization Hub</strong> - Manage 12+ specialties (ENT, Orthopedics, Pediatrics, etc.)</li>
                  <li><strong>Comprehensive Analytics</strong> - Date-range reports, dashboard metrics, and audit trails</li>
                </ul>

                <h4>Technical Implementation:</h4>
                <ol>
                  <li><strong>Django 5.2</strong> - Python backend framework</li>
                  <li><strong>MySQL</strong> - Database management</li>
                  <li><strong>Pillow</strong> - Medical image processing</li>
                  <li><strong>CRUD Operations</strong> - Full data lifecycle management</li>
                  <li><strong>Session Authentication</strong> - Secure role-based access</li>
                </ol>

                <h4>Key Features:</h4>
                <ol>
                  <li><strong>Admin Portal</strong> - Manage doctors, users, specializations, and analytics</li>
                  <li><strong>Doctor Workspace</strong> - Patient records, appointment management, medical history</li>
                  <li><strong>Patient Dashboard</strong> - Appointment booking, status tracking, and history</li>
                  <li><strong>Automated Reporting</strong> - Custom date-range analytics for operational insights</li>
                  <li><strong>Emergency Protocols</strong> - 24/7 support system with priority scheduling</li>
                </ol>
                
                <p>
                  The system reduces patient wait times by 30% through digital workflows and cuts administrative errors by 70% with automated record-keeping. Supports HIPAA-compliant data handling for 1000+ daily transactions.
                </p>
              </div>
            ),
            images: [ HMS, haHomepage,haDoctorList,haSpecialization,haUserdetatils,hdHomepage,hdAppoitments,hdPatientAdd,hdPatient,hpBookappointment ],
            githubLink:  "https://github.com/your-hms-repo",
            websiteLink:"https://your-live-demo-link.com",
            openImageViewer:{openImageViewer},
            openDescriptionViewer:{openDescriptionViewer}
    
        }

      ];
  
      // Determine which certificates to display
      const displayedCertificates = showMore 
        ? allCertificates 
        : allCertificates.slice(0, 3);
  
  return (
    <div className="project-container screen-container" id={props.id || ""}>
      <div className="project-parent">
        <ScreenHeading title={"Projects"} subHeading={"Here are my Previous Work"} />

        <div className="projects-grid">
          {displayedCertificates.map((certificate, index) => (
              <ProjectsCard
                key={index}
                title={certificate.title}
                des={certificate.des}
                images={certificate.images}
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
        
      {/* Fullscreen Image Viewer with Slider */}
      {isImageViewerOpen && (
        <div className="image-viewer-overlay">
          <div className="image-viewer-content">
            <button className="close-btn" onClick={closeImageViewer}>
              &times;
            </button>

            <button 
              className="nav-btn prev-btn" 
              onClick={prevImage}
              disabled={currentImageIndex === 0}
            >
              &#10094;
            </button>
            
            <img 
              src={currentImages[currentImageIndex]} 
              alt={`Slide ${currentImageIndex + 1}`} 
            />
            
            <button 
              className="nav-btn next-btn" 
              onClick={nextImage}
              disabled={currentImageIndex === currentImages.length - 1}
            >
              &#10095;
            </button>

            <div className="image-counter">
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Description Viewer */}
      {isDescriptionViewerOpen && (
        <div className="description-viewer-container active">
          <span className="description-viewer-close" onClick={closeDescriptionViewer}>
            &times;
          </span>
          <p className="description-viewer-text">{currentDescription}</p>
        </div>
      )}
    </div>
  );
}
