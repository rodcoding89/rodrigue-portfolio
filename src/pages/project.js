import { useState } from 'react';
import { SearchProject } from './search-project';
import { projectList } from './project-data';
import { Card } from './card';

const sf = ['Développer des sites statics','SEO','Développer des sites dynamiques','Développer des applications web','Intégration continue (CI)','Déploiement continue (CD)', 'Test drive development (TDD)','Développer des applications mobile','Utilisation de GIT pour le versioning','Déployer / Tester(Jest,Cypress) / Déboguer des applications','Traitement des images',"Intégration d'une maquette","Utilisation d'ORM (Prisma)",'Intégration des APIs','Création des APIs de type REST'];
const se = ['Travailler en équipe','Autonome','Patient','Curieux','Rigoureux',"Capacité d'écoute","Communicatif","Ouvert à l'apprentissage d'autre technologie ou langage"];
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
          <div className='bg-img' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/bg-projects.jpg)` }}>
          </div>
          <SearchProject/>
          <div className='competence center'>
            <h3 className='regular'>Compétences</h3>
            <div className='bloc-competence'>
              <div className={activef+' flex justify-content-center align-items-center'} onClick={()=>{setActivef('active');setActivee('');setActiveTools('')}}>Savoir faire</div>
              <div className={activee + ' flex justify-content-center align-items-center'} onClick={()=>{setActivee('active');setActivef('');setActiveTools('')}}>Savoir être</div>
              <div className={activetools +' flex justify-content-center align-items-center'} onClick={()=>{setActivee('');setActivef('');setActiveTools('active')}}>Outils</div>
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
              <h3 className='regular'>Projets</h3>
              <div className='project-header'>
                  <div className={projectEnterprise + ' flex justify-content-center align-items-center'} onClick={()=>{setProjectEnterprise('active');setPersonalProject('');setProjectTraining('')}}>Projets entreprise</div>
                  <div className={projectTraining + ' flex justify-content-center align-items-center'} onClick={()=>{setProjectTraining('active');setPersonalProject('');setProjectEnterprise('')}}>Projets formation</div>
                  <div className={personalProject + ' flex justify-content-center align-items-center'} onClick={()=>{setProjectEnterprise('');setProjectTraining('');setPersonalProject('active')}}>Projets personnels</div>
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