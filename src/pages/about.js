export function About(){
    return (
        <div className="about center flex align-items-center height87">
            <div className="bloc-about">
                <h1>About me</h1>
                <div className="about-para flex align-items-center justify-content-center gap25">
                    <p className="para">I began my university studies in Germany with a three-year Bachelor's program in Computer Science. I then continued my education in France, where I completed a Bac +4 and Bac +5 level training program, earning <a href="https://www.francecompetences.fr/recherche/rncp/35078/" style={{color:'lightblue',textDecoration:'underline'}} target="_blanc">the RNCP-certified title of IT and Information Systems Expert</a>.<br/><br/>During my time in Germany, I worked as a web developer for several companies, first through internships and later as a student employee. In France, I also completed multiple internships related to my studies, as well as a work-study placement.<br/><br/>After completing my education, I decided to start my career as a freelance developer.</p>
                    <img src={process.env.PUBLIC_URL+'assets/images/profil-photo.jpg'} alt='profil' className="about-img"/>
                </div>
            </div>
        </div>
    )
}