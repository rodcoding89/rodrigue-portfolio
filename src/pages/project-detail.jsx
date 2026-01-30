import { useParams } from "react-router-dom";
import { projectList } from "./project-data";
import { Link } from 'react-router-dom';
import { MetaComponent } from './meta-data';
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
    //console.log('project',project);
    return (
        <>
            <MetaComponent title={project.content.name} description={project.content.description}/>
            <div className="project-detail">
            <h1 className="bold teaser">{project.content.name}</h1>
            <div className="bloc-description gap25 flex align-items-center justify-content-center center">
                <div className="img"><img src={process.env.PUBLIC_URL+'/assets/images/'+project.content.projectImgUrl} alt={project.content.name}/></div>
                <div className="descrip">
                    <p className="" dangerouslySetInnerHTML={{__html:project.content.description}}/>
                    <div className="links flex gap20 justify-content-space-between align-items-center">
                        {
                            project.content.gitLink.includes('unavailable') ? (
                                <span onClick={()=>{alert('Git link unavailable for privacy reasons')}} className="git py-2 px-4 border-[1px] border-solid border-blue-700 rounded-lg cursor-pointer flex align-items-center justify-content-center flex-direction-column">
                                    <h6>GitHub</h6>
                                    <span className="flex gap10"><i className="fa fa-external-link" aria-hidden="true"></i>GitHub Link</span>
                                </span>
                            ): (
                                <Link to={project.content.gitLink} target="_blank" className="git py-2 px-4 border-[1px] border-solid border-blue-700 rounded-lg cursor-pointer flex align-items-center justify-content-center flex-direction-column">
                                    <h6>GitHub</h6>
                                    <span className="flex gap10"><i className="fa fa-external-link" aria-hidden="true"></i>GitHub Link</span>
                                </Link>
                            )
                        }
                        {
                            project.content.link.includes('unavailable') ? (
                                <span onClick={()=>{alert('Website unavailable for maintenance reasons')}} className="git py-2 px-4 border-[1px] border-solid border-blue-700 rounded-lg cursor-pointer flex align-items-center justify-content-center flex-direction-column">
                                    <h6>Link</h6>
                                    <span className="flex gap10"><i className="fa fa-external-link" aria-hidden="true"></i>Website Link</span>
                                </span>
                            ) : (
                                <Link to={project.content.link} target="_blank" className="site py-2 px-4 border-[1px] border-solid border-blue-700 rounded-lg cursor-pointer flex align-items-center justify-content-center flex-direction-column">
                                    <h6>Link</h6>
                                    <span className="flex gap10"><i className="fa fa-external-link" aria-hidden="true"></i>Website Link</span>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="techno center flex gap20 justify-content-space-around align-items-center flex-wrap">
                {
                    project.content.techno.map(t=>{
                        return (
                            t.name !== 'Other Modules' ? (
                                <div key={t.name} className="flex flex-direction-column align-items-center">
                                    <span className="regular">{t.name}</span>
                                    <img className="img-techno" src={process.env.PUBLIC_URL+'/assets/images/'+t.url} alt={t.name}/>
                                </div>
                            ): (
                                <div key={t.name} className="w-100">
                                    <span className="regular">{t.name}</span>
                                    <div className="module-content flex gap25 align-items-center justify-content-space-around flex-wrap">
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
        </>
    )
}