// import React, { useState } from "react";

// export function MobileInput() {
//   const [mobile, setMobile] = useState("");

//   const isValid = /^\+91\d{10}$/.test(mobile);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter mobile number (+91XXXXXXXXXX)"
//         value={mobile}
//         onChange={(e) => setMobile(e.target.value)}
//       />
//       <p>{isValid ? "✅ Verified" : "❌ Invalid"}</p>
//     </div>
//   );
// }

// export default MobileInput;


import React, { useState } from "react";

export function MobileForm() {
//   const [users, setUsers] = useState([]);    

  const [error, setError] = useState("");
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

  const handleSubmit = async(e) => {
    e.preventDefault(); // stop default submit

    // Validation: must match +91 followed by 10 digits
    const regex = /^\+91\d{10}$/;
    if (!regex.test(formData.mobile.trim())) {
      setError("Please verify your number with country code (+91XXXXXXXXXX). after 10 digits mobile no. ");
      return;
    }

    // If valid, clear error and proceed
    setError("");
    alert("Form submitted successfully!");
    // here you can send formData to your database
    
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
    <form onSubmit={handleSubmit}>
  <input type="text"  placeholder='Name :'  className='del'  name="name" value={formData.name}   onChange={addText} required title="Please fill the valid name only in Alphabets" />   <br /> 

      <input
        type="tel"
          className='del'
        name="mobile"
        placeholder="+91XXXXXXXXXX"
        value={formData.mobile}
        onChange={addText}
      /> <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
                        
                        <input type="text"   placeholder='City   :'  className='del'name="city" value={formData.city} onChange={addText} required />   <br />
                        <input type="text"   placeholder='Guest Enquiry:'  className='del' name="text"  value={formData.text} onChange={addText} required />   <br />
                        <textarea   placeholder='Brief Explain About Your Requriement' className='text'  value={formData.textmsg} onChange={addText} name='textmsg' required title="Required Message" ></textarea> <br />  
                       
                        <button className='submit' type="submit" title="Click to Submit"> Submit </button>
    </form>
  );
}

export default MobileForm;
