import React, { useEffect, useState } from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Projects = () => {
  const [projects, setProject] = useState([]);
  const fetchProject = async () => {
    const res = await fetch("/jsonFile/projectData.json");
    const data = await res.json();
    setProject(data);
  };
  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <DIV>
      <h1>My Projects</h1>
      <div className="project_container">
        {projects.map((project) => (
          <div key={project._id} className="project_detail">
            <div className="project_img_div">
              <img src={project.img} alt="" className="project_img" />
            </div>
            <div className="project_description">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <h3>Tech Stack</h3>
              <div className="imgs_div">
                {project.react_img && (
                  <img src={project.react_img} alt="react" />
                )}
                {project.redux_img && (
                  <img src={project.redux_img} alt="Redux" />
                )}
                {project.node_img && <img src={project.node_img} alt="node" />}
                {project.express_img && (
                  <img src={project.express_img} alt="express" />
                )}
                {project.mongoDB_img && (
                  <img src={project.mongoDB_img} alt="mongo" />
                )}
                {project.css_img && <img src={project.css_img} alt="css" />}
                {project.chakra_img && (
                  <img src={project.chakra_img} alt="chakra" />
                )}
              </div>
              <div className="btns_div">
                <button>
                  <Link to={project.github_link}>
                    <IoLogoGithub className="btn_icon" /> <span>GitHub</span>
                  </Link>
                </button>
                <button>
                  <Link to={project.deploy_link}>
                    <FaConnectdevelop className="btn_icon" /> Deployed
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DIV>
  );
};

export default Projects;

const DIV = styled.div`
  width: 100%;
  padding: 80px 120px;
  /* border: solid palegreen; */
  h1 {
    width: 100%;
    text-align: center;
    padding: 50px 0;
    font-size: 40px;
  }
  .project_container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px 0;
    /* border: solid red; */
  }
  .project_detail {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* border: solid purple; */
    box-shadow: rgba(70, 74, 80, 0.4) 0px 0px 0px 2px,
      rgba(107, 139, 176, 0.65) 0px 4px 6px -1px,
      rgba(180, 170, 170, 0.08) 0px 1px 0px inset;
    padding: 15px 0;
  }

  .project_img_div {
    width: 50%;
    height: auto;
    /* border: solid saddlebrown; */
  }
  .project_img_div img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  .project_description {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: solid pink; */
  }
  h2 {
    width: 100%;
    text-align: center;
    font-size: 28px;
  }
  p {
    width: 100%;
    font-size: 16px;
    padding: 20px 0;
  }
  h3 {
    text-align: center;
    width: 100%;
    font-size: 23px;
  }
  .imgs_div {
    width: 80%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .project_description img {
    width: 40px;
    height: 40px;
    margin: auto;
  }
  .btns_div {
    width: 70%;
    display: flex;
    align-items: center;
    padding: 30px;
    gap: 20px;
  }
  button {
    width: 120px;
    height: 45px;
    padding: 10px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: auto;
  }
  .btn_icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }

  /* Responsive */
  @media (max-width: 769px) {
    /* border: solid yellowgreen; */
    padding: 60px 30px;
    .project_detail {
      flex-direction: column;
    }
    .project_img_div {
      width: 100%;
    }
    .project_description {
      padding: 30px 20px;
      width: 100%;
    }
    .imgs_div {
      padding-top: 30px;
    }
    .btn_icon {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
  @media (max-width: 426px) {
    padding: 60px 15px;
  }
`;
