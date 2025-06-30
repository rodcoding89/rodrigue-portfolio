import '../style/index.scss';
export function Footer(){
    const date = new Date().getFullYear();
    return (
        <footer>
           <div className='foot center flex justify-content-center flex-direction-column align-items-end'>
                <div>© Copyright {date} All rights reserved.</div>
                <div>portfolio.rodcoding.com</div>
            </div> 
        </footer>
    )
}