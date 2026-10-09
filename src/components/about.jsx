import React from "react";
import Marquee from "react-fast-marquee";
import './Home.css' 
export function  VideoScroller(){
    return(
        <div style={{ width: "100%", overflow: "hidden" }}>
           
<Marquee direction="left" speed={50} pauseOnHover gradient={false}>    
 <iframe  
        src="https://www.youtube.com/embed/oEh9BxW5ESY?si=DXf6EvtYGYvVEK4r" 
        height="250"
        width="300"
        title="video2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
  ></iframe> 
  <iframe  
        src="https://www.youtube.com/embed/XPLk2k8u5pM?si=sGYvAjZ0dXu5UBeu" 
        height="250"
        width="300"
        title="video2"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
  ></iframe> 
 <iframe   
        src="https://www.youtube.com/embed/Hvvd0IYYsA0?si=wl0V9LuMK1kRlG_5" 
        height="250"
        width="300"
        title="video3"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
 ></iframe> 
                     </Marquee>
        </div>
    )
}