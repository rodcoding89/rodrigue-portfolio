import '../style/index.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectList } from './project-data';

export function SearchProject(){
    const [filtedProject,setFiltedProject] = useState([]);
    function filterProject(searchParam){
        let allProject = [];
        projectList.projectEntreprise.forEach(p=>{
            p.content.techno.forEach(t=>{
                if (t.name.toLowerCase().includes(searchParam.toLowerCase())) {
                    //console.log(t.name.toLowerCase(),searchParam,p.content.techno,p.id);
                    allProject.push(p);
                    allProject = allProject.filter((value, index, self) => 
                        index === self.findIndex((t) => (
                          t.id === value.id
                        ))
                    );
                }
            })
        })
        projectList.projectFormation.forEach(p=>{
            p.content.techno.forEach(t=>{
                if (t.name.toLowerCase().includes(searchParam.toLowerCase())) {
                    allProject.push(p)
                    allProject = allProject.filter((value, index, self) => 
                        index === self.findIndex((t) => (
                          t.id === value.id
                        ))
                    );
                }
            })
        })
        projectList.projectPersonnel.forEach(p=>{
            p.content.techno.forEach(t=>{
                if (t.name.toLowerCase().includes(searchParam.toLowerCase())) {
                    allProject.push(p);
                    allProject = allProject.filter((value, index, self) => 
                        index === self.findIndex((t) => (
                          t.id === value.id
                        ))
                    );
                }
            })
        })
        if (searchParam === '') {
            allProject = [];
        }
        setFiltedProject(allProject)
        console.log(filtedProject); 
    }
    return (
        <div className='filterBloc'>
            <input type="text" onChange={(e)=>{filterProject(e.target.value)}} className="searchInput" placeholder='Rechercher un projet en saisissant un langage'/>
            <div className='matchedProject'>
                {
                    filtedProject.map(f=>{
                        return (
                            <Link key={f.id} to={`/project-detail/${f.id <= 6 ? 'projectEntreprise':f.id > 6 && f.id <= 9 ? 'projectFormation':'projectPersonnel'}/${f.id}`}>{f.content.name}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}