import { Link } from 'react-router-dom';
import '../style/index.scss';
export function Socialmedia(){
    return (
        <div className="media">
            <Link to="mailto:rodriguekwayep.freelance@hotmail.com"><img src={process.env.PUBLIC_URL+'/assets/images/gmail.svg'} alt='gmail'/></Link>
            <Link to="https://www.linkedin.com/in/rod-tech-solutions-3a4302366" target='_blanc'><img src={process.env.PUBLIC_URL+'/assets/images/linkedin.svg'} alt='linkedin'/></Link>
        </div>
    )
}