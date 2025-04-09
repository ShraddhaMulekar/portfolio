import React from 'react'
import { BsArrowUpSquareFill } from 'react-icons/bs'
import styled from 'styled-components'

const Footer = () => {
    const scrollToTop = ()=>{
        window.scrollTo({top:0, behavior:"smooth"})
    }
  return (
    <DIV>
        <p>Copyright © 2025 by Shraddha All right Reserved.</p>
        <button onClick={scrollToTop}><BsArrowUpSquareFill className='arrow-btn' /></button>
    </DIV>
  )
}

export default Footer

const DIV = styled.div`
  width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 120px;
    background: #3b3a3d;
    p{
    background: #3b3a3d;
    font-weight: bold;
    }
    button{
        width: 40px;
        height: 40px;
        border-radius: 10px;
    }
    .arrow-btn{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 769px){
    /* border: solid yellow; */
    padding: 30px;       
  }
  @media (max-width: 426px){
    /* border: solid yellow; */
    padding: 30px 15px;       
  }
`