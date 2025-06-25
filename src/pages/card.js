import { Link } from 'react-router-dom';
import '../style/index.scss';
export function Card({id,projectType,card}){
    return (
        <Link to={`/project-detail/${projectType}/${id}`} className="card dispaly-block">
            <img src={process.env.PUBLIC_URL+'/assets/images/'+card.projectImgUrl} alt={card.name}/>
            <div className="detail">
                <h4 className='white regular'>{card.name}</h4>
                {
                    card.entreprise && (<div className='flex justify-content-flex-start align-items-center gap10'><span className='darkred flex justify-content-flex-start align-items-center gap10'>Company : </span><em className='item'>{card.entreprise}</em></div>)
                }
                {
                    card.ecole && (<div className='flex justify-content-flex-start align-items-center gap10'><span className='darkred flex justify-content-flex-start align-items-center gap10'>School : </span><em className='item'>{card.ecole}</em></div>)
                }
                {
                    card.author && (<div className='flex justify-content-flex-start align-items-center gap10'><span className='darkred flex justify-content-flex-start align-items-center gap10'>Author : </span><em className='item'>{card.author}</em></div>)
                }
                {
                    card.pays && (<div className='flex justify-content-flex-start align-items-center gap10'><span className='darkred'>Country : </span><em className='item'>{card.pays}</em></div>)
                }
                <div className='flex justify-content-flex-start align-items-center gap10'><span className='darkred'>Year :</span><em className='item'>{card.year}</em></div>
                <p className='white medium' dangerouslySetInnerHTML={{__html:card.description.split(' ',10).join(' ')+'...'}}/>
            </div>
        </Link>
    )
}