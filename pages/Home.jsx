import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { VscGithub } from "react-icons/vsc";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <DIV>
      <div className="wrapper-info">
        <h3>Hello, It's Me</h3>
        <h1>Shraddha</h1>
        <h3>
          And I'm a
          <br />
          <span>Full Stack Web Developer</span>
          {/* <span>Backend Developer</span>
                <span>Frontend Developer</span> */}
        </h3>
        <div className="social-media">
          <Link to="https://github.com/ShraddhaMulekar" className="github">
            <VscGithub className="github_icon" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/shraddha-mulekar/"
            className="linkedin"
          >
            <TiSocialLinkedinCircular className="linkedin_icon" />
          </Link>
        </div>
        <button>
          <a href="\Resume1.pdf" download="Resume.pdf">
            Resume <IoMdDownload className="icon_download" />
          </a>
        </button>
      </div>
      <div className="img-div">
        <img className="img" src="/photo.jpg" alt="img" />
      </div>
    </DIV>
  );
};

export default Home;

const DIV = styled.div`
  margin-top: 120px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 120px 120px;
  /* border: solid green; */
  .wrapper-info {
    width: 50%;
    /* border: solid yellow; */
  }
  h3 {
    width: 100%;
    font-size: 30px;
    /* border: solid red; */
  }
  h1 {
    width: 100%;
    font-weight: 900;
    font-size: 50px;
  }
  .social-media {
    width: 30%;
    height: 100px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    gap: 20px;
    /* border: solid red; */
  }
  .github {
    width: 20%;
    /* border: solid; */
    font-size: 30px;
  }
  .github_icon {
    width: 100%;
  }
  .linkedin {
    width: 20%;
    font-size: 38px;
  }
  .linkedin_icon {
    width: 100%;
  }
  button {
    width: 15%;
    display: flex;
    padding: 10px;
    margin: 20px;
  }
  .img-div {
    width: 25%;
  }
  .img {
    width: 100%;
    height: 400px;
  }
  button a{
    display: flex;
    align-items: center;
  }
  a{
    width: 100% ;
    /* border: solid; */
  }
  .icon_download{
    width: 20px;
    height: 20px;
  }

  /* responsive */
  @media (max-width: 769px) {
    flex-direction: column;
    /* border:  solid rebeccapurple; */
    width: 100%;
    .wrapper-info {
      width: 80%;
      height: 350px;
      /* border: solid blue; */
    }
    button {
      width: 25%;
      margin: 5px;
    }
    .img-div {
      width: 70%;
    }
  }

  @media (max-width: 426px) {
    flex-direction: column;
    /* border:  solid rebeccapurple; */
    width: 100vw;
    .wrapper-info {
      width: 99vw;
      height: 350px;
      /* border: solid blue; */
      padding-left: 20px;
    }
    button {
      width: 25%;
      margin: 5px;
    }
    .img-div {
      width: 180%;
    }
    .github_icon {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .linkedin_icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;
