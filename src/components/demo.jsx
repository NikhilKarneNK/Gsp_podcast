import { useState,useEffect } from "react";
import './Home.css'
//import { fetchUsers, addUser, deleteUser } from "./index.js";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import { About } from "./about";

export function RampDemo() {


  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    cell: "",
    textmsg: ""
  });

  // Load users on mount
  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  // Handle form input
  const handleChange = (e) => {
    let value = e.target.value;

  // Force email field to lowercase
    if (e.target.name === "email") {
      value = value.toLowerCase();
    }

    setFormData({ ...formData, [e.target.name]: value });
  };

  

  // const [text, setText] = useState(""); // state to hold input value
    
  // const [num, setNum] = useState('')
  // function UpdateNum(e){

  //   setNum(e.target.value);
  //   }

  // const [tel, setTel] = useState('');
  // function UpdateTel(e){

  //   setTel(e.target.value);
  //   }
  // const [email, setEmail] = useState('')
  // function UpdateEmail(e){

  //   setEmail(e.target.value);
  // }  
  
    // Submit new user await addUser(formData);
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   const confirmed = confirm("Do you want submit your details?")   // POST request

  //   console.log(confirmed);         // log response
  //   if (confirmed==true){
  //     alert("✅ Your details have been submitted!")
  //   }
  //   else{
  //     alert("❌ Submission cancelled.");
  //   }
    
  //   setUsers(updated);
  // // };
  // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const confirmed = confirm("Do you want to submit your details?"); // confirm popup

  //     console.log(confirmed); // log response

  //     if (confirmed) {
  //       // If OK clicked → submit
  //       const newUser = await addUser(formData);   // POST request
  //       console.log("Added user:", newUser);

  //       const updated = await fetchUsers();        // refresh list
  //       setUsers(updated);

  //       alert("✅ Your details have been submitted!");
  //     } else {
  //       alert("❌ Submission cancelled.");
  //   }
  // };
        
// Submit new user await addUser(formData);
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

  return (
    <div>

        
   <nav>
   <Link to="/about"> HEllo</Link>
  </nav> 

     <Routes>
      <Route path="/About" element={<About />} ></Route>
    </Routes> 
    

    {/* <title>Hello world</title> */}
    <div className='details'>
    <div className='detail'>  
      
      <div className='contact1'>
                    Let's Collaborate🤝🏻 <br />
Time to Start the Conversation.
                </div>
      <div className='contact'>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name} // bind state to input
        onChange={handleChange}  // update state on typing  or 2 way binding  (e) => setText(e.target.value)
        placeholder="Name    :"  className='del' required  name="name"/> <br />

      <input type="email" placeholder="Email    :" onChange={handleChange} value={formData.email}  className='del' required name="email"/>  <br />
      <input type="text" onChange={handleChange} value={formData.city} placeholder="City       :"  className='del' required name="city"/> <br />
      <input type="number" onChange={handleChange} value={formData.cell} placeholder="Phone   :+91"  className='del' required name="cell"/> <br />
      <textarea name="textmsg"   value={formData.textmsg}   placeholder='Brief Explain About Your Requriement' className='text' required  onChange={handleChange} ></textarea> <br />
      <button className='submit' type="submit"> Submit </button>
      </form>
      </div>
      </div>
      </div>

      <h2>User List</h2>
      {/* {users.map(user => (
        // <div key={user.id}>
        //   <p>{user.name} - {user.email}</p>
        //   <button onClick={() => deleteUser(user.id)}>Delete</button>
        // </div>
      ))} */}


    </div>
  );
}

