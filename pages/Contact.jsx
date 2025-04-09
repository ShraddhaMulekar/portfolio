import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Contact = () => {
  return (
    <DIV>
      <h1>Contact Me</h1>
      <div className="contact_para">
        <p>Contact Number - +91 7083219467</p>
        <p>Email Address - mulekarshraddha@gmail.com</p>
        <p>Address - Nagpur, Maharashtra</p>
      </div>
      <div className="icon_contact">
        <Link to="https://www.linkedin.com/in/shraddha-mulekar/"><FaLinkedinIn className="icon" /></Link>
        <Link to="https://github.com/ShraddhaMulekar"><BsGithub className="icon" /></Link>
        <Link><IoIosMail className="icon" /></Link>
      </div>
    </DIV>
  );
};

export default Contact;

const DIV = styled.div`
  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    h1 {
    text-align: center;
    padding: 60px 0 10px 0;
    font-size: 40px;
  }
  p{
    padding: 15px 0;
    text-align: center;
    font-weight : bold
  }
  .icon_contact{
    width: 20%;
    height: 100px;
    /* border: solid; */
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 30px;
    padding: 20px  ;
    margin: auto;
  }
  .icon{
    width: 25px;
    height: 25px;
  }

  /* Responsive */
  @media (max-width: 769px){
    /* border: solid yellow; */
    padding: 60px 30px;   
    h1{
      width: 100%;
    }
    p{
      width: 100%;
    }
    .contact_para{
      width: 100%;
    }
  }
  @media (max-width: 426px){
    padding: 20px ;
    .icon_contact{
      width: 26%;
    }
  }
`
