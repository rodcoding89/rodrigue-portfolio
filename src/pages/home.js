import '../style/index.scss';
import { Link } from 'react-router-dom';
export function Home(){
    return (
        <div className='home-container center flex align-items-center justify-content-space-between gap40 height87'>
            <div className='container-bloc w-55'>
                <h1 className='bold'>Développeur web / mobile.</h1>
                <div className='para'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim auctor enim, id elementum quam aliquam sit amet. Praesent vel mattis orci. Sed ac consequat leo, vel consequat eros. Curabitur ut ligula posuere</p>
                    <p>
                    augue vitae, fringilla erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                </div>
                <button className="button-75"><span className="text">Télécharger mon CV</span></button>
            </div>
            <div className='rightbloc flex justify-content-space-around align-items-center gab25 w-30'>
                <div className='project'>
                    <h4>Projets</h4>
                    <ul className='projet-list'>
                        <li><Link to={`/project-detail/projectEntreprise/3`}>Chicken grill</Link></li>
                        <li><Link to={`/project-detail/projectEntreprise/2`}>Kebab de la gare</Link></li>
                        <li><Link to={`/project-detail/projectEntreprise/1`}>Avlis formation</Link></li>
                        <li><Link to={`/project-detail/projectFormation/7`}>Reservation de salle</Link></li>
                        <li><Link to={`/project-detail/projectFormation/9`}>Site e-commerce</Link></li>
                        <li><Link to={`/project-detail/projectPersonnel/12`}>Movie api</Link></li>
                    </ul>
                </div>
                <div className='profil-foto'>
                    <img src={process.env.PUBLIC_URL+'assets/images/profil-photo.jpg'} alt='profil'/>
                </div>
            </div>
        </div>
    )
}