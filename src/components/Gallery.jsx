import "./Gallery.css";
import "./all.css";
import img1 from "../assets/event1.png";


function Gallery(){
    return(
        <>
            <section class="gallery hidden" id="gallery">
      <h1 class="subheading"  ><span style={{ fontFamily:"cursive" }}>Events</span> <span style={{ color: "rgb(157, 234, 41)" ,fontFamily:"cursive"}}>Gallery</span></h1>
      <div class="grid-container">
            <div
              class="grid-item tall"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
              
            >
            <span class="overlay-text">The Robotics club launched a three-level series of workshops on Arduino and related projects. The Level 1 workshop, organized in a smart classroom, taught participants C/C++, the language of Arduino boards, and detailed code.</span>
        </div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event2.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span>
        </div>
      
            <div
              class="grid-item wide hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item tall wide hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:"url(../assets/event1.png)"}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span></div>
            <div
              class="grid-item hidden"
              style={{ backgroundImage:{img1}}}
            >
            <span class="overlay-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur aperiam doloremque ducimus velit pariatur! Et, vel totam quibusdam ea, temporibus sapiente possimus perferendis deleniti aut in recusandae suscipit debitis.</span>
          </div>
          </div>
    </section>
        </>
    )
}

export default Gallery;