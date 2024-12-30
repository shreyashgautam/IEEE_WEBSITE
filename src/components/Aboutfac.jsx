import "./About.css";
import "./all.css";
import hemanth from "../assets/fac_hemanth.png"
function Aboutfac(){
  
    return(
        <>
        <section className="About hidden">
      
      <div className="flexdisplay hidden">
        <div className="subcontainer hidden">
          <img src={hemanth} alt="" className="fac-image"/>
      </div>
          <div className="subcontainer">
              <h3 >Dr. Hemanth C</h3>
              <p className="abouttext">As the faculty coordinator of the IEEE Photonics Society, it is my privilege to introduce our dynamic and vibrant community. Our club is a hub of creativity, innovation, and collaborative learning. We provide a platform for students to explore their passion for robotics, expand their technical skills, and cultivate a problem-solving mindset. Through engaging workshops, exciting projects, and competitive events, we aim to inspire and empower our members to excel in the world of robotics. Our club fosters a supportive environment where students can network, share ideas, and work together to push the boundaries of technological advancement. With a dedicated team of mentors and enthusiastic members, we strive to create a transformative experience that prepares students for future challenges and opportunities in the field of robotics.</p>
        </div>
         
  
      </div>
     
  </section>
        </>
    )
}
export default Aboutfac;