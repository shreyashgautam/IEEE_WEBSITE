import "./Boards.css";
import "./all.css";
import president from "../assets/event4.png"
function Boards(){
    return (
        <>
         <section class="adv team hidden" id="team">
      <h1 class="subheading"  ><span style={{fontFamily:"cursive"}}>Boa</span><span style={{fontFamily:"cursive",color: "rgb(157, 234, 41)"}}>rds</span></h1>
    
        <p> <span style={{color: "rgb(157, 234, 41)"}}>Lorem ipsum dolor sit,</span> <span>amet consectetur adipisicing elit...</span></p>
        <div class="row hidden">
          <div class="colunm hidden">
            <img src={president} alt="Profile"/>
            <div>
              <h3>Ishitva Pandey</h3>
              <p className="p1">President</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente commodi molestiae repellendus distinctio reprehenderit tenetur doloribus necessitatibus minus, voluptates eveniet iusto incidunt, ducimus quae facilis. Dolorem doloribus odit quia!</p>
               </div>
          </div>
          <div class="colunm hidden">
            <img src={president} alt="Profile"/>
            <div>
              <h3 >Anchutha AR Nair</h3>
              <p >Vice President</p>
              <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente commodi molestiae repellendus distinctio reprehenderit tenetur doloribus necessitatibus minus, voluptates eveniet iusto incidunt, ducimus quae facilis. Dolorem doloribus odit quia!</p>
            </div>
          </div>
          <div class="colunm hidden">
            <img src={president} alt="Profile"/>
            <div>
              <h3>Kshitij Shukla</h3>
              <p>Treasurer</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sapiente commodi molestiae repellendus distinctio reprehenderit tenetur doloribus necessitatibus minus, voluptates eveniet iusto incidunt, ducimus quae facilis. Dolorem doloribus odit quia!</p>
            </div>
        </div>
        
      </div>
      
    </section>
        </>
    )
}
export default Boards;