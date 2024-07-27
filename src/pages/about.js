export function About(){
    return (
        <div className="about center flex align-items-center height87">
            <div>
                <h1>A propos de moi</h1>
                <div className="about-para flex align-items-center justify-content-center gap25">
                    <p className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <img className="w-40" src={process.env.PUBLIC_URL+'/assets/images/about.jpg'} alt="a propos de moi"/>
                </div>
            </div>
        </div>
    )
}