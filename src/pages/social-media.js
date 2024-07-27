import { Link } from 'react-router-dom';
import '../style/index.scss';
export function Socialmedia(){
    return (
        <div className="media">
            <Link to="mailto:kwayeprodrigue2012@gmail.com"><img src={process.env.PUBLIC_URL+'/assets/images/gmail.svg'} alt='gmail'/></Link>
            <Link to="https://www.linkedin.com/in/kk-rodrigue?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blanc'><img src={process.env.PUBLIC_URL+'/assets/images/linkedin.svg'} alt='linkedin'/></Link>
            <Link to="mailto:kwayeprodrigue@ymail.com"><img src={process.env.PUBLIC_URL+'/assets/images/yahoo.svg'} alt='yahoo'/></Link>
        </div>
    )
}