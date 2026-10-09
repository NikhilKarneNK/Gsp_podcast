import React from "react"
import './Home.css'
import { useState, useEffect } from "react"
import { fetchUsers, addUser, deleteUser } from "./index.js"
// import GSPImg from './public/GSP-PNG.png'
// import Insta from './public/insta.svg'
// import YouTube from './public/Utube.svg'
// import marquee from 'react-fast-marquee'
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { RampDemo } from "./demo.jsx"
// import { RampDemo } from "./demo.jsx";


export function Index(){

  const [users, setUsers] = useState([]);  
  const [formData, setFormData] = useState({
    name: "",
    
    mobile:"",
    city: "",
    text: "",
    textmsg: ""
  });
    
  // Load users on mount
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  // Handle form input
  const addText = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle to submit
  const handleSubmit = async (e) => {
      e.preventDefault();
    const confirmed = window.confirm("Do you want to submit your details?");
    if (!confirmed) {
      alert("❌ Submission cancelled.");
      return; // stop here, no data sent
    }
  
    // If OK clicked → continue
    const newUser = await addUser(formData);
    console.log("Added user:", newUser);
    const updated = await fetchUsers();
    setUsers(updated);
    alert("✅ Your details have been submitted!");

    
  }; 
  
{formData.mobile.match(/^\+91\d{10}$/) ? "Verified" : "Invalid"}

  // indian code +91
  // const mobile=useState("");
  // {(mobile.match(/+91 \ d{10}/)? "verified":"Invalid")}

  // const [mobile, setMobile] = useState("");
  // {mobile.match(/^\+91\d{10}$/) ? "verified" : "Invalid"}
  
  
    return(
  <div>     
          
          <h2 className="header"> Chat With GSP </h2>
              <div className="main">

                <div className="about">
      <svg viewBox="0 0 505 50"  className="svg-name">
      <text x="50%" y="50%" dy={'.35'} textAnchor="middle" className="name"> CHAT WITH GSP </text>   </svg> <sub>Real Talk Raw Truth</sub><br />
                    <p className='content'>Experience is not the number of years we spent, it's the number of situations we faced.</p>
                    <div className='social'>
                        <div className='insta'> <a href="https://www.instagram.com/chatwithgsp/"><img src="Insta.svg" alt=""  className='instaImg' /> </a> <br /> 
                         <b className='num'>1.5K+</b>  <br/> 
                         Followers</div>
                        <div className='youtube'> <a href="https://www.youtube.com/@chatwithgsp" target='_blank'> <img src="/Utube.svg" alt="" className='UTubeimg' /> </a> <br />
                        <b className='num'> 2.3k</b> <br />
                        Subscribers</div>

                    </div>
                    <div className='join'> <p className='toJoin'> Join The Community  </p></div>    

                </div> 

                <div className="img">
                    <img src="/GSP-PNG.png" alt=""  className='gspimg'/>
                </div>
               
             </div> 

              <div>
              <p className='title'> we have had on our channel</p>

           {/* <n className="gtag" >Guests</n>   */}
    <marquee  id='marqee'  speed={100}  >
     <div className='videos'>    
        <div className='video1' ><iframe   src="https://www.youtube.com/embed/oEh9BxW5ESY?si=DXf6EvtYGYvVEK4r" height={250} width={350} title="" frameborder="" referrerpolicy="" allowfullscreen></iframe> <br /> Cancelled NEET Exam </div>
        <div className='video1' ><iframe   src="https://www.youtube.com/embed/XPLk2k8u5pM?si=sGYvAjZ0dXu5UBeu" height={250} width={350} title="" frameborder=""  allowfullscreen></iframe> <br /> Due to Property </div>
        <div className='video1' ><iframe   src="https://www.youtube.com/embed/Hvvd0IYYsA0?si=wl0V9LuMK1kRlG_5" height={250} width={350} title="" frameborder=""  allowfullscreen></iframe> <br /> One Voices to motivate  </div>
        <div className='video1' ><iframe   src="https://www.youtube.com/embed/T5pD7rhyIZE?si=4PgOvuaj2ABBVqkU" height={250} width={350} title="" frameborder=""  allowfullscreen></iframe> <br /> Cases </div> 
        <div  className='video1'><iframe  src="https://www.youtube.com/embed/iIXs4yxUvrQ?si=FFA10olm4KpAW0aj"  height={250} width={350} title="" frameborder=""  allowfullscreen ></iframe> <br /> Relax with song</div>
   
    </div>
    </marquee>
 
     </div> 
     
 {/* name section */}
             {/* <div className='incharge'>
<marquee src={Marquee} behavior="" direction="up" className="founder" speed={0}> Chat With G. Sagar Paul</marquee> 
<marquee className="founder" direction="up" speed={1}> Raw Talks  & Raw Truth </marquee>
            </div>  */}

{/* <marquee  direction="down" height="100px" width="500px" scrollamount="5" speed={0} className="color" > <marquee behavior="alternate" direction="right" speed={0} className="color"> <button>Instagram</button></marquee></marquee> */}
 <br /> <br />
<h2 className='askQSn'> What Means <big>GSP ?</big></h2>
<p className='content'>This is the space where stories meet ideas, and conversations spark inspiration. <br /> and the little moments that make life extraordinary. </p>
  <div className="word-roatater"  >
            <span>Talk with Sagar Paul</span>
            <span><a href="https://www.youtube.com/@chatwithgsp" className="link" >Chat With GSP</a></span>
            <span>Real Talk Raw Truth </span>
            
  </div>  

            {/* contact section */}

             <div className='details'>
                 <div className='detail'>

                <div className='contact1'>
                    Let's Collaborate🤝🏻 <br />
Time to Start the Conversation.
                </div>
                    <div className='contact'>   
                      <form onSubmit={handleSubmit}>
                
                        <input type="text"  placeholder='Name :'  className='del'  name="name" value={formData.name}   onChange={addText} required title="Please fill the valid name only in Alphabets" />   <br /> 
                        <input type="tel"  placeholder='Phone :+91' className='del' name="mobile" value={formData.mobile} onChange={addText} required  title="Please enter the valid mobile number with (Country Code)" />   <br />
                        
                        <input type="text"   placeholder='City   :'  className='del'name="city" value={formData.city} onChange={addText} required />   <br />
                        <input type="text"   placeholder='Guest Enquiry:'  className='del' name="text"  value={formData.text} onChange={addText} required />   <br />
                        <textarea   placeholder='Brief Explain About Your Requriement' className='text'  value={formData.textmsg} onChange={addText} name='textmsg' required title="Required Message" ></textarea> <br />  
                       
                        <button className='submit' type="submit" title="Click to Submit"> Submit </button>
                        
                      </form>  
                   
                    </div>

             </div>
             </div>

       
       
            



 <footer className='footer'>
<div className='allicons'>
    
<a href="https://www.facebook.com/websoftdigitalmedia" className='icon' id='fb'><i class="fa-brands fa-facebook-f"></i></a> &nbsp;
<a href="https://in.linkedin.com/in/websoft-digital-media-545094296" className='icon' id='li'><i class="fa-brands fa-linkedin-in"></i></a>   &nbsp; 
<a href="https://www.instagram.com/chatwithgsp/"  className='icon' id='in'><i class="fa-brands fa-instagram"></i></a>  &nbsp; 
<a href="https://wa.me/8678215235" className='icon' id='wp'><i class="fa-brands fa-whatsapp"></i></a>  &nbsp; 
<a href="mailto:info@wstdigitalmedia.in.com" className='icon' id='em'><i class="fa-regular fa-envelope"></i></a>  &nbsp;
<a href="https://www.youtube.com/@chatwithgsp" className='icon' id='You'><i class="fa-brands fa-youtube"></i></a>  &nbsp; <br />
<br />
<small>Terms & Conditions |  Privacy & Policy </small>
<small> <a href="Rap"></a></small>
</div>

</footer> 

<div>

  {/* <nav>
   <Link to="/RampDemo"> HEllo</Link>
  </nav>  

    <Routes>
      <Route path="/" element={<Index />} ></Route>
      <Route path="/RapDemo" element={<RampDemo />}></Route>
    </Routes> */}


</div>
    
    
</div>


  )
    
    
}

