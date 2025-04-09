import React from "react";
import { GoPerson } from "react-icons/go";
import styled from "styled-components";

const About = () => {
  return (
    <DIV id="about">
      <div className="wrapper-about">
        <h2>
          <GoPerson className="about_icon" /><span>About Me!</span>
        </h2>
        <div className="heading3">
          <h3>I'm Shraddha</h3>
          <h3>Full Stack Web Developer</h3>
        </div>
        <p>
          A MERN stack developer proficient in building web applications using
          MongoDB, Express.js, React.js, and Node.js. Strong understanding of
          both frontend (user interface and design) and backend (server-side
          logic and database management). Quick to learn new technologies and
          adapt to collaborative environments to build efficient and scalable
          applications.
        </p>
      </div>
      <div className="img_wrapper">
        <img src="/public/image_about.png" alt="gif" />
      </div>
    </DIV>
  );
};

export default About;

const DIV = styled.div`
  width: 100%;
  padding: 130px 120px;
  /* border: solid purple; */
  .about_icon{
    width: 40px;
  }
  h2 {
    width: 100%;
    text-align: center;
  }
  h3{
    width: 100%;
  }
  .wrapper-about{
    /* border: solid gold; */
    width: 100%;
  }
  .heading3 {
    width: 100%;
    font-size: 25px;
    padding: 10px 0 20px 0;
  }
  p{
    width: 100%;
    font-size: 18px;
    padding: 20px 0 40px 0;
    font-weight: 700;
  }
  .img_wrapper{
    width: 40%;
    height: 350px;
    margin: auto;
  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  /* responsive */
  @media (max-width: 769px){
    /* border: solid green; */
    padding: 120px 30px;
    .wrapper-about{
      width: 100%;
    }
    .img_wrapper{
      width: 100%;
      height: 401px;
      margin: 0;
    }
    .img_wrapper img{
      width: 100%;
      height: 100%;
    }
  }
`;
