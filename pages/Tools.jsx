import React from "react";
import styled from "styled-components";

const Tools = () => {
  return (
    <DIV >
      <h1>Tools</h1>
      <div className="container-tag">
        <div className="tag-div">
          <img
            className="tag-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqXdrAQwLaiu5ZCBGzTUZkaSzOtvmAXRF8Xw&s"
            alt="git"
          />
          <p className="tag-para">GIT</p>
        </div>

        <div className="tag-div">
          <img
            className="tag-img"
            src="https://cdn.iconscout.com/icon/free/png-256/free-npm-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175132.png"
            alt="npm"
          />
          <p className="tag-para">NPM</p>
        </div>

        <div className="tag-div">
          <img
            className="tag-img"
            src="https://code.visualstudio.com/assets/branding/app-icon.png"
            alt="vscode"
          />
          <p className="tag-para">VSCode</p>
        </div>
      </div>
      <div className="skill-container">
        <div className="skill-div">
          <img
            className="skill-img"
            src="https://cdn-icons-png.flaticon.com/512/13/13706.png"
            alt="frontend"
          />
          <h2>Front-End Development</h2>
          <p className="skill-para">HTML | CSS | JavaScript</p>
          <button>Read More</button>
        </div>
        <div className="skill-div">
          <img
            className="skill-img"
            src="https://pngimg.com/d/server_PNG30.png"
            alt="backend"
          />
          <h2>Back-End Development</h2>
          <p className="skill-para">NodeJS | Express | MongoDB</p>
          <button>Read More</button>
        </div>
        <div className="skill-div">
          <img
            className="skill-img"
            src="https://cdn1.iconfinder.com/data/icons/computer-world/128/box-512.png"
            alt="dsa"
          />
          <h2>Data Structure Algorithm</h2>
          <p className="skill-para">LinkedList | Recursion | Binary</p>
          <button>Read More</button>
        </div>
      </div>
    </DIV>
  );
};

export default Tools;

const DIV = styled.div`
  padding: 10px 120px;
  width: 100%;
  /* border: solid brown; */
  h1 {
    width: 100%;
    text-align: center;
    padding: 50px 0;
    font-size: 40px;
  }
  .container-tag {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 30px;
  }
  .tag-div {
    padding: 20px 40px;
    width: 32%;
    display: flex;
    align-items: center;
    gap: 15px;
    border: 1px solid gray;
    border-radius: 15px;
  }
  .tag-img {
    width: 40px;
    height: 40px;
  }
  .tag-para {
    font-size: 12px;
    color: #657884;
  }
  .skill-container {
    width: 100%;
    display: flex;
    align-items: center;
    /* border: solid red; */
    gap: 30px;
    margin: 30px 0;
}
.skill-div {
    padding: 40px 0;
    width: 32%;
    border: 1px solid gray;
    border-radius: 15px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
  h2{
    width: 100%;
    text-align: center;
  }
  p{
    width: 100%;
    text-align: center;
  }
  .skill-img {
    width: 60px;
    height: 60px;
  }
  button{
    padding : 10px ;
    margin-top: 10px;
    border-radius: 50px;
    width: 140px;
    height: 40px;
  }

  /* Responsive */
  @media (max-width: 769px){
    /* border: solid pink; */
    padding: 60px 30px;   
    .tag-div{
      gap: 0;
    }
    .skill-div p{
      font-size: 13px;
    } 
    .skill-div h2{
      font-size: 20px;
    }
  }
  @media (max-width: 426px){
    /* border: solid pink; */
    padding: 60px 10px;   
    .tag-div{
      padding: 20px 20px;
    }
    .skill-container{
      flex-wrap: wrap;
    }
    .skill-div{
      width: 80%;
    }
    .container-tag{
      gap: 15px;
    }
  }
`;
