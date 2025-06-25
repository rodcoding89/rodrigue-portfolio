import { useState } from 'react';
import { SearchProject } from './search-project';
import { projectList } from './project-data';
import { Card } from './card';

const sf = [
  "Develop static websites",
  "SEO",
  "Develop dynamic websites",
  "Develop web applications",
  "Continuous Integration (CI)",
  "Continuous Deployment (CD)",
  "Test-Driven Development (TDD)",
  "Develop mobile applications",
  "Use GIT for version control",
  "Deploy / Test (Jest, Cypress) / Debug applications",
  "Image processing",
  "Integrate a design/mockup",
  "Use ORM (Prisma)",
  "API integration",
  "Create RESTful APIs","Containerization (Docker)"
];
const se = [
  "Team player",
  "Autonomous",
  "Patient",
  "Curious",
  "Detail-oriented",
  "Good listener",
  "Communicative",
  "Open to learning new technologies or languages"
];
const tools = ['Eclipse','Visual Studio Code','Git','GitHub','GitLab','Sublime Text','SVN','Android studio','Jira','GIMP','Paint.NET','Le terminal(CMD)','phpMyAdmin','MySQL Workbench','MySQL Server','Windows PC']
export function Project(){
  const [activef,setActivef] = useState('active');
  const [activee,setActivee] = useState('');
  const [activetools,setActiveTools] = useState('');
  const [projectEnterprise,setProjectEnterprise] = useState('active');
  const [projectTraining,setProjectTraining] = useState('');
  const [personalProject,setPersonalProject] = useState('');
    return (
        <div className='search-container'>
          <SearchProject/>
          <div className='competence center'>
            <h3 className='regular'>Skills</h3>
            <div className='bloc-competence'>
              <div className={activef+' flex justify-content-center align-items-center'} onClick={()=>{setActivef('active');setActivee('');setActiveTools('')}}>Expertise</div>
              <div className={activee + ' flex justify-content-center align-items-center'} onClick={()=>{setActivee('active');setActivef('');setActiveTools('')}}>Soft skills</div>
              <div className={activetools +' flex justify-content-center align-items-center'} onClick={()=>{setActivee('');setActivef('');setActiveTools('active')}}>Tools</div>
            </div>
            <div className='competence-content'>
              <div className='bloc-content'>
                {
                  activef === 'active' && (
                  <div className='savoirfaire flex justify-content-center align-items-center gap25'>
                    {sf.map(f=>{
                      return (<div key={f} className='item'>{f}</div>)
                    })}
                  </div>)
                }
                {
                  activee === 'active' && (
                    <div className='savoiretre flex justify-content-center align-items-center gap25'>
                      {se.map(s=>{
                        return (<div key={s} className='item'>{s}</div>)
                      })}
                    </div>
                  )
                }
                {
                  activetools === 'active' && (
                    <div className='tools flex justify-content-center align-items-center gap25'>
                      {tools.map(t=>{
                        return (<div key={t} className='item'>{t}</div>)
                      })}
                    </div>
                  )
                }
              </div>
            </div>
            <div className='project-bloc'>
              <h3 className='regular'>Projects</h3>
              <div className='project-header'>
                  <div className={projectEnterprise + ' flex justify-content-center align-items-center'} onClick={()=>{setProjectEnterprise('active');setPersonalProject('');setProjectTraining('')}}>Company / Freelance Projects</div>
                  <div className={projectTraining + ' flex justify-content-center align-items-center'} onClick={()=>{setProjectTraining('active');setPersonalProject('');setProjectEnterprise('')}}>Academic Projects</div>
              </div>
              <div className='project-content'>
                {
                  projectEnterprise && (
                    <div className='project-enterprise flex align-items-center justify-content-space-around flex-wrap gap25'>
                      {
                        projectList.projectEntreprise.map(p=>{
                          return <Card key={p.content.name} id={p.id} projectType='projectEntreprise' card={p.content}/>
                        })
                      }
                    </div>
                  )
                }
                {
                  projectTraining && (
                    <div className='projet-formation flex align-items-center justify-content-space-around flex-wrap gap25'>
                      {
                        projectList.projectFormation.map(p=>{
                          return <Card key={p.content.name} id={p.id} projectType='projectFormation' card={p.content}/>
                        })
                      }
                    </div>
                  )
                }
                {
                  personalProject && (
                    <div className='personal-project flex align-items-center justify-content-space-around flex-wrap gap25'>
                      {
                        projectList.projectPersonnel.map(p=>{
                          return <Card key={p.content.name} id={p.id} projectType='projectPersonnel' card={p.content}/>
                        })
                      }
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
    )
}