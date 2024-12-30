import "./PastEvents.css";
import "./all.css";
function PastEvents() {
   
    return(
        <>
            <section className="timeline hidden" id="Events">
      <h1 className="subheading"  ><span style={{ color: "rgb(157, 234, 41)",  fontFamily: "cursive" }}>Recent</span> <span style={{fontFamily: "cursive" }}>Events</span></h1>
       
        <div className="main ">
            <div className="timeline_container">
                <div className="indicator_line"></div>
                <div className="timeline_box box-1 hidden" data-aos="fade-right" data-aos-offset="300" data-aos-duration="700"
                    data-aos-easing="ease-in-sine">
                    <div className="timeline_card">
                        <div className="icon">
                            <div className="circle"></div>
                        </div>
                        <div className="timeline_content">
                            <div className="company_box">
                                <h5 className="role">lorem-Thon</h5>
                                <p className="company_name">6th and 7th September 2024</p>
                            </div>
                            <div className="working_detail">
                                <h6 className="type"><span>Venue : MG AUDITORIUM</span></h6>
                                
                            </div>
                            <hr/>
                            <div className="tags">
                                <button className="tag_btn">Healthcare</button>
                                <button className="tag_btn">Education</button>
                                <button className="tag_btn">Sustainability</button>
                                <button className="tag_btn">Automation</button>
                                <button className="tag_btn">IoT</button>
                            </div>
                            <p className="desc">The IEEE Photonics Society , VIT Chennai presents <b>Pitch-a-thon</b>, a platform for creativity and innovation. Students pitch groundbreaking ideas to solve real-world challenges. Showcase your potential and shape the future of technology!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline_box box-2 hidden" data-aos="fade-left" data-aos-offset="300" data-aos-duration="700"
                    data-aos-easing="ease-in-sine">
                    <div className="timeline_card">
                        <div className="icon">
                            <div className="circle"></div>
                        </div>
                        <div className="timeline_content">
                            <div className="company_box">
                                <h5 className="role">lorem-Up-Ardiono </h5>
                                <p className="company_name">10th July 2024</p>
                            </div>
                            <div className="working_detail">
                                <h6 className="type"><span>Venue: Gmeet</span></h6>
                               
                            </div>
                            <hr/>
                            <div class="tags">
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque iusto rerum
                                recusandae delectus facilis excepturi, quasi culpa eius repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline_box box-1 hidden" data-aos="fade-right" data-aos-offset="30" data-aos-duration="700"
                    data-aos-easing="ease-in-sine">
                    <div className="timeline_card">
                        <div className="icon">
                            <div className="circle"></div>
                        </div>
                        <div className="timeline_content">
                            <div className="company_box">
                                <h5 className="role">Web Development Hackathon</h5>
                                <p className="company_name">27th May 2023</p>
                            </div>
                            <div className="working_detail">
                                <h6 className="type"><span>Venue:NETAJI AUDITORIUM</span></h6>
                                
                            </div>
                            <hr/>
                            <div className="tags">
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                 <button className="tag_btn">lorem</button>
                            </div>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eaque iusto rerum
                                recusandae delectus facilis excepturi, quasi culpa eius repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline_box box-2 hidden" data-aos="fade-left" data-aos-offset="30" data-aos-duration="700"
                    data-aos-easing="ease-in-sine">
                    <div className="timeline_card">
                        <div className="icon">
                            <div className="circle"></div>
                        </div>
                        <div className="timeline_content">
                            <div className="company_box">
                                <h5 className="role">Lorem</h5>
                                <p className="company_name">7th October 2023</p>
                            </div>
                            <div className="working_detail">
                                <h6 className="type"><span>Venue:Gmeet</span></h6>
                               
                            </div>
                            <hr/>
                            <div className="tags">
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                                <button className="tag_btn">lorem</button>
                            </div>
                            <p className="desc">Lorem ipsum dolor sit veniam, odit minima molestiae repudiandae similique facilis reprehenderit quod commodi. Quod, dolorem.
                            </p>
                        </div>
                    </div>
                </div>
             
            </div>
            
        </div>
        <div className="knowmore hidden">
          <a href="/moreteam" style={{ fontSize:"30px",  fontFamily: "cursive" }}>More Events</a>
        </div>
    
       
    </section>
        </>
    )
}
export default PastEvents;