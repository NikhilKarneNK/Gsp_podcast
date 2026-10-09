# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


    // const [user, setUser] = useState('');
    // function UpdateUser(e){

    //   setUser(e.target.value);
    // }
    
    // const [tel, setTel] = useState('');
    // function UpdateTel(e){

    //   setTel(e.target.value);
    //  }  
    
    // const [city, setCity] = useState('');
    // function UpdateCity(e){

    //     setCity(e.target.value);
    // }
    // const [text, setText] = useState('');
    // function UpdateText(e){

    //     setText(e.targe.value);
    // }

    // const [content, setContent] = useState('');
    // function UpdateContent(e){

    //     setContent(e.target.value);
    // }
//   const addText = (e) => {
//     let value = e.target.value;

//   // Force email field to lowercase
//     if (e.target.name === "email") {
//       value = value.toLowerCase();
//     }

//     setFormData({ ...formData, [e.target.name]: value });
//   };


.up-slide{
  /* height: 100px; */
  color: red;
  text-align: center;
  animation-timing-function: linear;
  animation-duration: 5s;
  animation-name: movingcar;
  animation-direction: alternate;
  animation-iteration-count: infinite;


}

@keyframes movingcar {
  
  0%{ 
    opacity: 0;
    transform: translateY(0px);
    /* scale: 0.95;  */
  }
  10%{
    opacity: 1; 
    transform: translateY(-80px);
    /* scale: 1;  */
  }
  100%{
    opacity: 2;
    transform: translateY(-120px);
    /* scale: 3; */
  }
}


svg text {
    text-transform: uppercase;
    animation: stroke 2s linear forwards;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
    animation-name: stroke;
    animation-timeline: auto;
    animation-range-start: normal;
    animation-range-end: normal;
    stroke-width: 2;
    stroke: var(--primary);
    font-size: 200px;
    font-weight: 500;
}


// add with note in submit button.
  e.preventDefault();

  const confirmed = window.confirm("Do you want to submit your details?");
  if (!confirmed) {
    alert("❌ Submission cancelled.");
    return;
  }

  // Ask for a comment/note (not stored in DB)
  const note = window.prompt("Add a comment before submitting:", "");

  // Submit only formData to DB
  const newUser = await addUser(formData);
  console.log("Added user:", newUser);

  const updated = await fetchUsers();
  setUsers(updated);

  // Show success alert with note included
  alert(`✅ Your details have been submitted!\nComment: ${note || "No comment"}`);


import React from "react";
import Marquee from "react-fast-marquee";

export default function VideoScroller() {
  return (
    <!-- <Marquee direction="left" speed={50} gradient={false}>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID1" title="YouTube video 1"></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID2" title="YouTube video 2"></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID3" title="YouTube video 3"></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID4" title="YouTube video 4"></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID5" title="YouTube video 5"></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID6" title="YouTube video 6"></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID7" title="YouTube video 7"></iframe>
      <iframe width="300" height="200" src="https://www.youtube.com/embed/VIDEO_ID8" title="YouTube video 8"></iframe>
    </Marquee>
  );
} -->
