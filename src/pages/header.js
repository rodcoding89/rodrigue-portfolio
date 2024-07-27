import { useState } from 'react';
import '../style/index.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export function Header(){
    const [hambugerMenu,setHambugerMenu] = useState(false);
    const {pathname} = useLocation();
    function handleRemoveNav(){
        let nav = document.querySelector('header');
        if (nav.classList.contains('menuhambuger')) {
            setHambugerMenu(false);
        }else{
            setHambugerMenu(true);
        }
    }
    return (
        <header className={hambugerMenu ? 'menuhambuger':''}>
            <div onClick={()=>{handleRemoveNav()}} className='menu-button'></div>
            <nav>
                <Link onClick={()=>{setHambugerMenu(false)}} to="/" className={pathname === '/'?'active-link light':'light'}>Acceuil</Link>
                <Link onClick={()=>{setHambugerMenu(false)}} to="/projects" className={pathname === '/projects'?'active-link light':'light'}>Projets</Link>
                <Link onClick={()=>{setHambugerMenu(false)}} to="/about" className={pathname === '/about'?'active-link light':'light'}>A propos</Link>
                <Link onClick={()=>{setHambugerMenu(false)}} to="/contact" className={pathname === '/contact'?'active-link light':'light'}>Contact</Link>
            </nav> 
        </header>
    )
}