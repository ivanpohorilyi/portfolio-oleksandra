import React, { useState, useEffect } from "react";
import projectData from "../../data/projects.json";
import "../Portfolio/portfolio.sass";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData);
  }, []);

  return (
    <div className="portfolio-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <div
            data-bs-toggle="modal"
            data-bs-target={`#modal-${project.id}`}
          >
            <img
              src={project.mainImage}
              alt={project.title}
            />
            <div className="card-title">
              <h5>{project.title}</h5>
            </div>
          </div>

          <div
            className="modal fade"
            id={`modal-${project.id}`}
            tabIndex="-1"
            aria-labelledby={`modalLabel-${project.id}`}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={`modalLabel-${project.id}`}>
                    {project.title}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Закрыть"
                  ></button>
                </div>
                <div className="modal-body">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project Image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "10px",
                        objectFit: "cover",
                      }}
                    />
                  ))}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
