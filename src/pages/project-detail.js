import { useParams } from "react-router-dom";
import { projectList } from "./project-data";
import { Link } from 'react-router-dom';
import '../style/index.scss';
export function ProjectDetail(){
    const {type,id} = useParams();
    const paramId = parseInt(id);
    let project = {};
    Object.entries(projectList).forEach(([k,v])=>{
        if (k === type) {
            v.forEach(item=>{
                if (item.id === paramId) {
                    console.log('item',item)
                    project = item;
                }else{
                    console.log('param id',typeof(paramId),'item id',typeof(item.id),item.id,paramId)
                }
            })
        }
    });
    console.log('project',project);
    return (
        <div className="project-detail">
            <div className='bg-img' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/bg-projects.jpg)` }}>
            </div>
            <h1 className="bold teaser">{project.content.name}</h1>
            <div className="bloc-description gap25 flex align-items-center justify-content-center center">
                <div className="img"><img src={process.env.PUBLIC_URL+'/assets/images/'+project.content.projectImgUrl} alt={project.content.name}/></div>
                <div className="descrip">
                    <p className="">{project.content.description}</p>
                    <div className="links flex gap20 justify-content-space-between align-items-center">
                        {
                            project.content.gitLink.includes('#') ? (
                                <Link to={project.content.gitLink} onClick={()=>{alert('Lien git pas disponible pour raison de confidentialité')}} className="git flex align-items-center justify-content-center flex-direction-column">
                                    <h6>Github</h6>
                                    <span className="flex gap10"><i className="fa fa-external-link" aria-hidden="true"></i>Lien github</span>
                                </Link>
                            ): (
                                <Link to={project.content.gitLink} target="_blank" className="git flex align-items-center justify-content-center flex-direction-column">
                                    <h6>Github</h6>
                                    <span className="flex gap10"><i className="fa fa-external-link" aria-hidden="true"></i>Lien github</span>
                                </Link>
                            )
                        }
                        <Link to={project.content.link} target="_blank" className="site flex align-items-center justify-content-center flex-direction-column">
                            <h6>Lien externe</h6>
                            <span className="flex gap10"><i className="fa fa-external-link" aria-hidden="true"></i>Lien site</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="techno center flex gap20 justify-content-space-around align-items-center flex-wrap">
                {
                    project.content.techno.map(t=>{
                        return (
                            t.name !== 'Modules' ? (
                                <div key={t.name} className="flex flex-direction-column align-items-center">
                                    <span className="regular">{t.name}</span>
                                    <img className="img-techno" src={process.env.PUBLIC_URL+'/assets/images/'+t.url} alt={t.name}/>
                                </div>
                            ): (
                                <div key={t.name} className="w-100">
                                    <span className="regular">{t.name}</span>
                                    <div className="module-content flex gap25 align-items-center justify-content-space-around">
                                        {
                                            t.content.map(c=>{
                                                return (<span>{c}</span>)
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        )
                    })
                }
            </div>
        </div>
    )
}