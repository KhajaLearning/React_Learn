import React, { useState } from "react";
// import { MOCK_PROJECTS } from './MockProjects'
import { Project } from "./Project";
import PropTypes from "prop-types";
import ProjectCards from "./ProjectCards";
import ProjectEditForm from "./ProjectEditForm";

function ProjectList({ projects, onSave }) {
  //   console.log("3456789", projects);
  // const {projects} = props;
  // const projects = props.projects
  //   let proName = projects.map((project) => (
  //     // console.log('qwer', project);
  //     <li key={project.id}>{project.name}</li>
  //   ));
  //   console.log("sdfghj", proName);
  //   //   return <pre>{JSON.stringify(projects, null, " ")}</pre>;
  //   return <ul>{proName}</ul>;

  //25-01-2024 start
  const [projectBeingEdited, setProjectBeingEdited] = useState({});
  const handleEdit = (project) => {
    setProjectBeingEdited(project);
  };

  const cancelEdit = (project) => {
    setProjectBeingEdited({});
  };
  return (
    // className="row" will display horizontal or row wise
    //    <ul className="row">
    //      {projects.map((project) => (
    //        <li key={project.id}>{project.name}</li>
    //      ))}
    //   </ul>

    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {/* <ProjectCards project={project} onEdit={handleEdit} />
          <ProjectEditForm /> */}
          {project === projectBeingEdited ? (
            <ProjectEditForm onCancel={cancelEdit} onSave={onSave} project= {project}/>
          ) : (
            <ProjectCards project={project} onEdit={handleEdit} />
          )}
          {/* <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
              <h5 className="strong">
                <strong>{project.name}</strong>
              </h5>
              <p>{project.description}</p>
              <p>Budget : {project.budget.toLocaleString()}</p>
            </section>
          </div> */}
        </div>
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  //property / method will be camel case, class or component name will be pascal case
  projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ProjectList;
