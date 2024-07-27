import { Link } from 'react-router-dom';
import '../style/index.scss';
export function Card({id,projectType,card}){
    return (
        <Link to={`/project-detail/${projectType}/${id}`} className="card dispaly-block">
            <img src={process.env.PUBLIC_URL+'/assets/images/'+card.projectCapture} alt={card.name}/>
            <div className="detail">
                <h4 className='white regular'>{card.name}</h4>
                {
                    card.entreprise && (<span className='white flex justify-content-flex-start align-items-center gap10'>Entreprise : {card.entreprise}<img className={card.class} src={process.env.PUBLIC_URL+'/assets/images/'+card.logoEntreprise} alt='logo entreprise'/></span>)
                }
                {
                    card.ecole && (<span className='white flex justify-content-flex-start align-items-center gap10'>Ecole : {card.ecole}<img className={card.class} src={process.env.PUBLIC_URL+'/assets/images/'+card.logoEcole} alt='logo ecole'/></span>)
                }
                {
                    card.author && (<span className='white flex justify-content-flex-start align-items-center gap10'>Auteur : {card.author}<img className={card.class} src={process.env.PUBLIC_URL+'/assets/images/'+card.logo} alt='logo'/></span>)
                }
                {
                    card.pays && (<span className='white'>Pays : {card.pays}</span>)
                }
                <span className='white'>Année : {card.year}</span>
                <p className='white medium'>{card.description.split(' ',10).join(' ')+'...'}</p>
            </div>
        </Link>
    )
}