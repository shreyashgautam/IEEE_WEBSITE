import "./Boards.css";
import "./all.css";
import president from "../assets/event4.png"
function Advisory(){
    return (
        <>
         <section class="adv team hidden" id="team">
      <h1 class="subheading"  ><span style={{fontFamily:"cursive",color: "rgb(157, 234, 41)"}}>Advi</span><span style={{fontFamily:"cursive"}}>sory</span></h1>
    
        <p>Lorem ipsum dolor sit, <span style={{color: "rgb(157, 234, 41)"}}>amet consectetur adipisicing elit...</span></p>
        <div class="row hidden">
          <div class="colunm hidden">
            <img src={president} alt="Profile"/>
            <div>
              <h3>lorem</h3>
              <p className="p1">President</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente commodi molestiae repellendus distinctio reprehenderit tenetur doloribus necessitatibus minus, voluptates eveniet iusto incidunt, ducimus quae facilis. Dolorem doloribus odit quia!</p>
               </div>
          </div>
          <div class="colunm hidden">
            <img src={president} alt="Profile"/>
            <div>
              <h3 >lorem</h3>
              <p >Vice President</p>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente commodi molestiae repellendus distinctio reprehenderit tenetur doloribus necessitatibus minus, voluptates eveniet iusto incidunt, ducimus quae facilis. Dolorem doloribus odit quia!</p>
            </div>
          </div>
          <div class="colunm hidden">
            <img src={president} alt="Profile"/>
            <div>
              <h3>lorem</h3>
              <p>Treasurer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente commodi molestiae repellendus distinctio reprehenderit tenetur doloribus necessitatibus minus, voluptates eveniet iusto incidunt, ducimus quae facilis. Dolorem doloribus odit quia!</p>
            </div>
        </div>
        
      </div>
     
    </section>
        </>
    )
}
export default Advisory;