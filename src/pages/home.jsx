import '../style/index.scss';
import { Link } from 'react-router-dom';
import { MetaComponent } from './meta-data';

export function Home(){
    return (
        <>
            <MetaComponent title='Home' description='Home page and some project links'/>
            <div className='home-container center flex align-items-center justify-content-space-between gap40 height87'>
            <div className='container-bloc w-60'>
                <h1 className='bold'>Freelance Web & Mobile App Developer</h1>
                <div className='para'>
                    <p>I began my university studies in Germany with a three-year Bachelor's program in Computer Science. I then continued my education in France, where I completed a Bac +4 and Bac +5 level training program, earning <a href="https://www.francecompetences.fr/recherche/rncp/35078/" style={{color:'lightblue',textDecoration:'underline'}} target="_blanc">the RNCP-certified title of IT and Information Systems Expert</a>... <a href='/about' style={{color:'lightblue',textDecoration:'underline'}}>Read more</a></p>
                </div>
                <button className="button-75"><span className="text">Download my CV</span></button>
            </div>
            <div className='rightbloc flex justify-content-space-between align-items-center gab10 w-35'>
                <div className='project'>
                    <h4>Projects</h4>
                    <ul className='projet-list'>
                        <li><Link to={`/project-detail/projectEntreprise/3`}>Chicken grill</Link></li>
                        <li><Link to={`/project-detail/projectEntreprise/2`}>Kebab de la gare</Link></li>
                        <li><Link to={`/project-detail/projectEntreprise/1`}>Avlis formation</Link></li>
                        <li><Link to={`/project-detail/projectFormation/13`}>Booking Sale</Link></li>
                        <li><Link to={`/project-detail/projectFormation/10`}>LovSid</Link></li>
                        <li><Link to={`/project-detail/projectPersonnel/15`}>Movie Api</Link></li>
                    </ul>
                </div>
                <div className='profil-foto'>
                    <img src={process.env.PUBLIC_URL+'assets/images/profil-photo.jpg'} alt='profil'/>
                </div>
            </div>
        </div>
        </>
    )
}