const API_URL = "http://localhost:4000/applicationdetails";
// Utility: generate random digits
function randomDigits(length) {
  const digits = "0123456789";
  return Array.from({ length }, () => digits[Math.floor(Math.random() * digits.length)]).join("");
}

// Fetch all users
export async function fetchUsers() {
  const response = await fetch(API_URL); // GET request
  return response.json();
}

// Add a new user

export async function addUser(data) {
  // Always start with 26, then add random digits
  const newId = "2026" + randomDigits(2);  // e.g., 2638, 2671

  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, id: newId }),
  });
  return response.json(); // return the created user
}

// Delete a user

export async function deleteUser(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}



//////////////////////////
// Fetch existing users
// //const users = await fetchUsers();
// Find max ID and increment
// const newId = users.length > 0 ? Math.max(...users.map(u => parseInt(u.id) || 0)) + 1 : 1;
// function myScript(){

//   return

// let fetchUsers = async () => {
//   let response = await fetch("http://localhost:4000/userdetails");
//   let userData = await response.json();
//   console.log(userData);
//   // userData.map((value) => {
//     // ! Creating the elements
//     // let container = document.createElement("article");
//     // let username = document.createElement("p");
//     // let email = document.createElement("p");
//     // let dob = document.createElement("p");
//     // let gender = document.createElement("p");
//     // let buttonContainer = document.createElement("div");
//     // let updateButton = document.createElement("button");
//     // let deleteButton = document.createElement("button");

    
    
//     //! Assigning the functions to the buttons
// //  5 delete button fuction
//     // deleteButton.addEventListener("click", () => {
//     //   deleteUser(value.id);
//     // });

    
//     // 2 ! Assigning the values to the elements

//     // username.innerHTML = `Name : ${value.name}`;
//     // email.innerHTML = `Email : ${value.email}`;
//     // dob.innerHTML = `Date of birth : ${value.dob}`;
//     // updateButton.innerHTML = "Update";
//     // deleteButton.innerHTML = "Delete";
//     // gender.innerHTML = `Gender : ${value.gender}`;

//     // // 2 ! Append the values to the containers
//     // buttonContainer.append(updateButton, deleteButton);
//     // container.append(username, email, city, cell, textmsg, buttonContainer);
//     // displayContainer.append(container);
//  // });
// };
// fetchUsers();


// // 3 To capture the data from form

// let form = document.querySelector("form");
// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   let formData = new FormData(form);
//   console.log(formData.get("name"));
//   console.log(formData.get("email"));
//   console.log(formData.get("city"));
//   console.log(formData.get("cell"));
//   console.log(formData.get("textmsg"));

//   let details = {
//     name: formData.get("name"),
//     email: formData.get("email"),
//     City: formData.get("city"),
//     phone: formData.get("cell"),
//     textmsg: formData.get("textmsg"),
//   };
//   addUsers(details);
//   });

//   //  4 ! Adding the user
// let addUsers = async (data) => {
//   await fetch("http://localhost:4000/userdetails", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//     },
//     //this method used to convert normal object to the json object
//     body: JSON.stringify(data),
//   });
// };

// // 6 ! Deleting the user

// // let deleteUser = async (id) => {
// //   await fetch(`http://localhost:4000/userdetails/${id}`, {
// //     method: "DELETE",
// //   });
// // };

// }

