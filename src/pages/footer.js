import '../style/index.scss';
export function Footer(){
    const date = new Date().getFullYear();
    return (
        <footer>
           <div className='foot center flex justify-content-center flex-direction-column align-items-end'>
                <div>©copyright {date} tout droit reservé</div>
                <div>portfolio.fr</div>
            </div> 
        </footer>
    )
}