import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const SkillAbilities = () => {

  const [skills, setSkill] = useState([])

  const fetchData = async()=>{
    const res = await fetch `../jsonFile/skill.json`
    const data = await res.json()
    // console.log(data)
    setSkill(data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  // console.log(skills)
  return (
    <DIV>
      <h1>Skills & Abilities</h1>
      <div className='container' >
      {
        skills?.map((skill)=>(
          <div className='wrapper-imp-p' key={skill.id}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))        
      }
        </div>
    </DIV>
  )
}

export default SkillAbilities

const DIV = styled.div`
padding: 30px 120px;
width: 100%;
/* border: solid blue; */

  h1{
    width: 100%;
    text-align: center;
    padding: 100px 0 50px 0;
    font-size: 40px;
  }
  .container{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    width: 100%;
    /* border: solid red; */
  }
  .wrapper-imp-p{
    border: 1px solid darkgray;
    border-radius: 15px;
    display: flex;
    align-items: center;
    width: 150px;
    gap: 10px;
    padding: 15px 10px;
  }
  img{
    width: 40px;
    height: 40px;
  }

  /* Responsive */
  @media (max-width: 769px){
    /* border: solid darkgoldenrod; */
    padding: 60px 30px;    
  }
  @media (max-width: 426px){
    /* border: solid darkgoldenrod; */
    padding: 0 40px;    
  }
`