import gif from "../assets/giphy.gif"
import "./About.css";
import "./all.css";
function About(){

    return(
        
        <>
         <section className="About hidden">
        <h1 className="subheading"  ><span style={{ fontFamily: "cursive"}}>About</span> <span style={{ fontFamily: "cursive",color: "rgb(157, 234, 41)"}}>Us</span></h1>
        <div className="flexdisplay hidden">
            <div className="subcontainer" id="about">
                <h3>About IEEE PHOTONICS SOCIETY Club</h3>
                <p className="abouttext">The IEEE Photonics Society at VIT Chennai is dedicated to advancing the field of photonics, the science of light, by fostering research, education, and innovation. Our society brings together students, professionals, and researchers to explore and develop cutting-edge technologies in communication, optics, lasers, and quantum systems. Through workshops, seminars, and collaborative projects, we aim to inspire the next generation of photonics leaders and shape the future of light-based technologies.</p>   </div>
            <div className="subcontainer hidden">
                <img src={gif} alt="gif" />
            </div>
    
        </div>
        </section>
        </>
    )
}
export default About;