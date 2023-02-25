import React from 'react'
import './Skills.scss'
import skillsImage from '../../assets/templateImg/tech-icons.png'
import Skill from './Skill'

import {c,python,aws,gcloud,vc,R,mysql,mongodb,sk,html,opencv,pytorch,tensorflow} from '../../assets/templateImg/skills_icons/skillIcon'


const Skills = () => {
  return (
    <section id="skills">
      <h5>The Skills I have</h5>
      <h2>Skills</h2>
      <div className="container skills_container">
        <div className="left">
          <div className="image">
            <img src={skillsImage} alt="" />
          </div>
        </div>
        <div className="right">
          <h4>Languages</h4>
          <div className="skills_cont">
            <Skill logo={python}/>
            <Skill logo={R}/>
            <Skill logo={c}/>

          </div>
          <h4>Framework</h4>
          <div className="skills_cont">
            <Skill logo={pytorch}/>
            <Skill logo={tensorflow}/>
            <Skill logo={opencv}/>
            <Skill logo={R}/>
            <Skill logo={sk}/>
          </div>
          <h4>Frontend</h4>
          <div className="skills_cont">
            <Skill logo={html}/>
          </div>
          <h4>Database</h4>
          <div className="skills_cont">
            <Skill logo={mysql}/>
            <Skill logo={mongodb}/>   
          </div>
          <h4>Cloud</h4>
          <div className="skills_cont">
            <Skill logo={aws}/>
            <Skill logo={gcloud}/>   
          </div>
          <h4>VCS</h4>
          <div className="skills_cont">
            <Skill logo={vc}/>   
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Skills
