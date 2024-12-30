import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Leads.css";
import "./all.css";
import president from "../assets/event4.png";
import akshat from "../assets/akshat_lead.png";
import lakshita from "../assets/lakshita_lead.png";
import radhi from "../assets/radhi_lead.png";
import shreya from "../assets/shreya_lead.png";
import ashish from "../assets/ashish_lead.png";
import Slider from "react-slick";

function Leads() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600, // Increased speed for faster slide transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500, // Reduced autoplay delay
    arrows: false,
  };

  const members = [
    {
      id: 1,
      name:"Shreya Narasimha Kamath",
      role: "WIP",
      description: "An aspiring electronics engineer , I am passionate about exploring advanced technologies like quantum communication and photonics while driving innovation through impactful projects and leadership roles.",
      image: shreya,
    },
    {
      id: 2,
      name:"Ashish Pujapanda",
      role: "Technical Lead",
      description: "Enthusiastic , Ready to Help anyone .",
      image: ashish,
    },
    {
      id: 3,
      name:"Akshat Upadhyay",
      role: "Operation Lead",
      description: "As the Operations Lead, I am passionate about fostering collaboration and driving impactful events for our members.",
      image: akshat,
    },
    {
        id: 4,
        name:"Satyam kumar",
        role: "Operation Lead",
        description: "As the Operations Lead, I am passionate about fostering collaboration and driving impactful events for our members.",
        image: president,
      },
    {
      id: 5,
      name:"Lakshita KJ",
      role: "Design Lead",
      description: "Just a passionate soul who loves playing with colours and getting creative to whip up cool designs",
      image: lakshita,
    },
    {
      id: 6,
      name:"Radhika P",
      role: "Editorial Lead",
      description: "oversee content creation and ensure impactful communication for our club, blending creativity and precision to represent our vision effectively.",
      image: radhi,
    },
  ];

  return (
    <>
      <section className="adv team hidden" id="team">
        <h1 className="subheading">
          <span style={{ fontFamily: "cursive" }}>Le</span>
          <span style={{ fontFamily: "cursive", color: "rgb(157, 234, 41)" }}>ads</span>
        </h1>

        <p>
          <span style={{ color: "rgb(157, 234, 41)" }}>Lorem ipsum dolor sit,</span>{" "}
          <span>amet consectetur adipisicing elit...</span>
        </p>

        <Slider {...settings}>
          {members.map((member) => (
            <div className="carousel-item" key={member.id}>
              <div className="colunm hidden">
                <img src={member.image} alt={member.role} />
                <div>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        
      </section>
    </>
  );
}

export default Leads;
