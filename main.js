

// // import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// // import { getFirestore, collection, getDocs, query, where, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// // import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyCV1eiwKVZs1inaWkVTYVsisI3sIIlAGL0",
// //   authDomain: "crud-dd0b4.firebaseapp.com",
// //   projectId: "crud-dd0b4",
// //   storageBucket: "crud-dd0b4.firebasestorage.app",
// //   messagingSenderId: "818921146981",
// //   appId: "1:818921146981:web:dbbdba5635bcdf78d3548c"
// // };

// // const app = initializeApp(firebaseConfig);
// // const db = getFirestore(app);
// // const auth = getAuth(app);

// // // Navbar toggle function
// // const hamb = document.getElementById("hamburger");
// // hamb.addEventListener("click", function () {
// //   const navLinks = document.getElementById('navLinks');
// //   navLinks.classList.toggle('active');
// // });

// // // Handle logout button click
// // const logoutLink = document.getElementById("logoutLink");
// // logoutLink.onclick = async () => {
// //   await signOut(auth);
// //   alert('You have logged out!');
// // };

// // async function serv_Pro() {
// //   let dta = JSON.parse(localStorage.getItem("base64"));
// //   console.log(dta);
// //   const q = query(collection(db, "servdetails"));
// //   const querySnap = await getDocs(q);
// //   const productList2 = document.getElementById("productList2");
// //   productList2.setAttribute("class", "prolist");

// //   querySnap.forEach((val) => {
// //     const data = val.data();
// //     const productCard = document.createElement("div");
// //     productCard.classList.add("product-card");

// //     const productName = document.createElement("h3");
// //     productName.textContent = data.name;

// //     const productPrice = document.createElement("p");
// //     productPrice.textContent = `Price: ₹${data.price}`;
// //     productPrice.style.fontWeight = "600";
// //     productPrice.style.color = "black";

// //     const productDesc = document.createElement("p");
// //     productDesc.textContent = `Function type: ${data.functionType}`;

// //     const productCategory = document.createElement("p");
// //     productCategory.textContent = `Category: ${data.description}`;

// //     const productStock = document.createElement("p");
// //     productStock.textContent = `Timings: ${data.items}`;
// //     productStock.style.fontWeight = "600";

// //     const location = document.createElement("p");
// //     location.textContent = `Location: ${data.location}`;
// //     location.style.fontWeight = "700";
// //     location.style.color = "red";

// //     const productImage = document.createElement("img");
// //     productImage.src = data.imageUrl;
// //     // productImage.style.width = "20vw";

// //     const num = document.createElement("p");
// //     num.textContent = `Contact: ${data.contact}`;
// //     num.style.color = "orange";
// //     num.style.fontWeight = "700";

// //     const anchor = document.createElement("a");
// //     anchor.innerText = "Call us";
// //     anchor.href = "tel:" + num.textContent;
// //     // anchor.style.marginLeft="15%"
// //     // anchor.style.padding="2.5%"
// //     // anchor.style.width="8vw"
// //     // anchor.style.color="white"
// //     // anchor.style.fontWeight="100"
// //     // anchor.style.fontsize="1rem"
// //     // anchor.className = "btn btn-primary mt-2";
// //     // anchor.setAttribute("data-bs-toggle", "modal");
// //     // anchor.setAttribute("data-bs-target", "#bookingModal");

// //     const button = document.createElement("button");
// //     button.innerText = "Book Now";
// //     button.setAttribute("data-bs-toggle", "modal");
// //     button.setAttribute("data-bs-target", "#bookingModal");

// //     button.addEventListener("click", function () {
// //       const modalDetails = document.getElementById("modalDetails");
// //       modalDetails.innerHTML = `
// //         <div class="row">
// //           <div class="col-md-6">
// //             <img src="${data.imageUrl}" class="img-fluid rounded" alt="${data.name}">
// //           </div>
// //           <div class="col-md-6">
// //             <h4>${data.name}</h4>
// //             <p><strong>Price:</strong> ₹${data.price}</p>
// //             <p><strong>Location:</strong> ${data.location}</p>
// //             <p><strong>Category:</strong> ${data.functionType}</p>
// //             <p><strong>Function Type:</strong> ${data.description}</p>
// //             <p><strong>Items:</strong> ${data.items}</p>
// //             <p><strong>Contact:</strong> ${data.contact}</p>

// //             <button class="btn btn-success mt-3" id="confirmBtns">Confirm Booking</button>
// //           </div>
// //         </div>
// //       `;

// //       // Handle confirm booking button click
// //       document.getElementById("confirmBtns").addEventListener("click", function () {
// //         window.confirmBookings(data);
// //       });
// //     });

// //     productCard.append(productImage, productName, productPrice, productStock, location, productDesc, productCategory, num, button, anchor);
// //     productList2.appendChild(productCard);
// //   });
// // }

// // serv_Pro();

// // onAuthStateChanged(auth, user => {
// // const loginLink = document.getElementById("loginLink");
// // const logoutLink = document.getElementById("logoutLink");

// // if (user) {
// // // User is signed in
// // loginLink.innerText = "Profile";
// // loginLink.setAttribute("href", "profile.html");
// // logoutLink.style.display = 'inline-block';

// // // Save user email to localStorage
// // const userProfile = [{ name: user.email }];
// // localStorage.setItem("Profiles", JSON.stringify(userProfile));
// // } else {
// // // User is signed out
// // loginLink.innerText = "Login";
// // loginLink.setAttribute("href", "Register.html");
// // logoutLink.style.display = 'none';
// // }
// // });


// // document.getElementById("categoryButtons").addEventListener("click", function (e) {
// //   if (e.target.classList.contains("category-btn")) {
// //     const selectedCategory = e.target.getAttribute("data-category").toLowerCase();
// //     if (selectedCategory === "all") {
// //       displayProducts(allProducts);
// //     } else {
// //       const filtered = allProducts.filter(p => p.category && p.category.toLowerCase().includes(selectedCategory));
// //       displayProducts(filtered);
// //     }
// //   }
// // });


// // window.confirmBooking = function (product) {
// //   const modalDetails = document.getElementById("modalDetails");
// //   modalDetails.innerHTML = `
// //     <div class="text-center">
// //       <h4>Pay for: ${product.name}</h4>
// //       <p>Total Amount: ₹${product.price}</p>
// //     </div>
// //     <form id="cardForm" class="mt-3">
// //       <div class="form-group mb-2">
// //         <input type="text" class="form-control" placeholder="Card Number" required>
// //       </div>
// //       <div class="form-group mb-2">
// //         <input type="text" class="form-control" placeholder="Name on Card" required>
// //       </div>
// //       <div class="form-row mb-2">
// //         <div class="col">
// //           <input type="text" class="form-control" placeholder="MM/YY" required>
// //         </div>
// //         <div class="col">
// //           <input type="text" class="form-control" placeholder="CVV" required>
// //         </div>
// //       </div>
// //       <button type="submit" class="btn btn-success w-100 mt-2">Pay ₹${product.price}</button>
// //     </form>
// //   `;

// //   const cardForm = document.getElementById("cardForm");
// //   cardForm.addEventListener("submit", function (e) {
// //     e.preventDefault();

// //     // Show loading spinner
// //     modalDetails.innerHTML = `
// //       <div class="text-center">
// //         <div class="spinner-border text-success" role="status"></div>
// //         <p class="mt-2">Processing Payment...</p>
// //       </div>
// //     `;

// //     setTimeout(() => {
// //       // Payment success UI
// //       modalDetails.innerHTML = `
// //         <div class="text-center">
// //           <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" style="width:100px;" alt="Success">
// //           <h3 class="text-success mt-3">Payment Successful!</h3>
// //           <p>Your booking for <strong>${product.name}</strong> is confirmed.</p>
// //         </div>
// //       `;

// //       // Save to Firestore
// //       const bookingData = {
// //         productName: product.name,
// //         price: product.price,
// //         category: product.category,
// //         location: product.description,
// //         image: product.image,
// //         timestamp: new Date().toISOString()
// //       };

// //       addDoc(collection(db, "bookings"), bookingData)
// //         .then(() => {
// //           console.log("✅ Booking saved to Firestore");

// //           // Redirect after 3 seconds
// //           setTimeout(() => {
// //             window.location.href = "mainn.html"; // change to your homepage
// //           }, 3000);
// //         })
// //         .catch(err => {
// //           console.error("❌ Error saving booking:", err);
// //           alert("Something went wrong. Please try again.");
// //         });

// //     }, 2000); // Simulate payment delay
// //   });
// // };

// // fetchAllProducts();

// // window.confirmBookings = function (product) {
// //   const modalDetails = document.getElementById("modalDetails");
// //   modalDetails.innerHTML = `
// //     <div class="text-center">
// //       <h4>Pay for: ${product.name}</h4>
// //       <p>Total Amount: ₹${product.price}</p>
// //     </div>
// //     <form id="cardForm" class="mt-3">
// //       <div class="form-group mb-2">
// //         <input type="text" class="form-control" placeholder="Enter First Name" required>
// //       </div>
// //       <div class="form-group mb-2">
// //         <input type="text" class="form-control" placeholder=" Enter Second Name" required>
// //       </div>
// //       <div class="form-row mb-2">
// //         <div class="col">
// //           <input type="text" class="form-control" placeholder="Gmail" required>
// //         </div>
// //         <div class="col">
// //           <input type="number" class="form-control" placeholder="Contact" required>
// //         </div>
// //       </div>
// //       <button type="submit" class="btn btn-success w-100 mt-2">Book</button>
// //     </form>
// //   `;
// //   modalDetails.innerHTML = `
// //       <div class="text-center">
// //         <div class="spinner-border text-success" role="status"></div>
// //         <p class="mt-2">Booking in Proccess...</p>
// //       </div>
// //     `;

// //     setTimeout(() => {
// //       // Payment success UI
// //       modalDetails.innerHTML = `
// //         <div class="text-center">
// //           <img src="https://icons.veryicon.com/png/o/leisure/weight-with-linear-icon/successful-booking.png" style="width:100px;" alt="Success">
// //           <h3 class="text-success mt-3">Booking  Successful!</h3>
// //           <p>Your booking for <strong>${product.name}</strong> is confirmed.</p>
// //         </div>
// //       `;
// //       },2000)
// // }
// // // Toggle mobile menu
// // const hamburger = document.getElementById("hamburger");
// // const navLinks = document.getElementById("navLinks");

// // hamburger.addEventListener("click", () => {
// // navLinks.classList.toggle("active");
// // });
// // let allProducts = []; // Global array to hold all products

// // async function fetchAllProducts() {
// //   const productList = document.getElementById("productList"); // Make sure this exists in HTML
// //   productList.innerHTML = ""; // Clear previous content

// //   const q = query(collection(db, "productsList"));
// //   const querySnapshot = await getDocs(q);

// //   querySnapshot.forEach((doc) => {
// //     const data = doc.data();
// //     allProducts.push(data); // Store globally for filtering

// //     const productCard = document.createElement("div");
// //     productCard.classList.add("product-card");

// //     const productName = document.createElement("h3");
// //     productName.textContent = data.name;

// //     const productPrice = document.createElement("p");
// //     productPrice.textContent = `Price: ₹${data.price}`;

// //     const productDesc = document.createElement("p");
// //     productDesc.textContent = `Description: ${data.description}`;

// //     const productCategory = document.createElement("p");
// //     productCategory.textContent = `Category: ${data.category}`;

// //     const productItems = document.createElement("p");
// //     productItems.textContent = `Items: ${data.items}`;

// //     const contact = document.createElement("p");
// //     contact.textContent = `Contact: ${data.contact}`;
// //     contact.style.color = "orange";
// //     contact.style.fontWeight = "700";

// //     const bookBtn = document.createElement("button");
// //     bookBtn.innerText = "Book Now";
// //     bookBtn.setAttribute("data-bs-toggle", "modal");
// //     bookBtn.setAttribute("data-bs-target", "#bookingModal");

// //     bookBtn.addEventListener("click", () => {
// //       const modalDetails = document.getElementById("modalDetails");
// //       modalDetails.innerHTML = `
// //         <div class="row">
// //           <div class="col-md-6">
// //             <img src="${data.image}" class="img-fluid rounded" alt="${data.name}">
// //           </div>
// //           <div class="col-md-6">
// //             <h4>${data.name}</h4>
// //             <p><strong>Price:</strong> ₹${data.price}</p>
// //             <p><strong>Description:</strong> ${data.description}</p>
// //             <p><strong>Category:</strong> ${data.category}</p>
// //             <p><strong>Items:</strong> ${data.items}</p>
// //             <p><strong>Contact:</strong> ${data.contact}</p>
// //             <button class="btn btn-success mt-3" id="confirmBtn">Confirm Booking</button>
// //           </div>
// //         </div>
// //       `;

// //       document.getElementById("confirmBtn").addEventListener("click", () => {
// //         window.confirmBooking(data);
// //       });
// //     });

// //     productCard.append(productName, productPrice, productDesc, productCategory, productItems, contact, bookBtn);
// //     productList.appendChild(productCard);
// //   });
// // }


// // Firebase imports
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// import { getFirestore, collection, getDocs, query, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
// import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCV1eiwKVZs1inaWkVTYVsisI3sIIlAGL0",
//   authDomain: "crud-dd0b4.firebaseapp.com",
//   projectId: "crud-dd0b4",
//   storageBucket: "crud-dd0b4.firebasestorage.app",
//   messagingSenderId: "818921146981",
//   appId: "1:818921146981:web:dbbdba5635bcdf78d3548c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// // Global product array
// let allProducts = [];

// // Navbar toggle
// const hamb = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");
// hamb.addEventListener("click", () => navLinks.classList.toggle("active"));

// // Logout handler
// document.getElementById("logoutLink").onclick = async () => {
//   await signOut(auth);
//   alert("You have logged out!");
// };

// // Auth state change handler
// onAuthStateChanged(auth, (user) => {
//   const loginLink = document.getElementById("loginLink");
//   const logoutLink = document.getElementById("logoutLink");

//   if (user) {
//     loginLink.innerText = "Profile";
//     loginLink.setAttribute("href", "profile.html");
//     logoutLink.style.display = "inline-block";
//     localStorage.setItem("Profiles", JSON.stringify([{ name: user.email }]));
//   } else {
//     loginLink.innerText = "Login";
//     loginLink.setAttribute("href", "Register.html");
//     logoutLink.style.display = "none";
//   }
// });

// // Fetch and display productsList
// async function fetchAllProducts() {
//   const productList = document.getElementById("productList");
//   productList.innerHTML = "";
//   allProducts = [];

//   const q = query(collection(db, "productsList"));
//   const querySnapshot = await getDocs(q);

//   querySnapshot.forEach((doc) => {
//     const data = doc.data();
//     allProducts.push(data);
//     renderProductCard(data, productList);
//   });
// }

// // Fetch and display servdetails
// async function serv_Pro() {
//   const productList2 = document.getElementById("productList2");
//   productList2.innerHTML = "";

//   const q = query(collection(db, "servdetails"));
//   const querySnap = await getDocs(q);

//   querySnap.forEach((val) => {
//     const data = val.data();
//     renderProductCard(data, productList2, true);
//   });
// }

// // Render card function
// function renderProductCard(data, container, isService = false) {
//   const productCard = document.createElement("div");
//   productCard.classList.add("product-card");

//   const fields = [
//     `<h3>${data.name}</h3>`,
//     `<p><strong>Price:</strong> ₹${data.price}</p>`,
//     isService ? `<p><strong>Function Type:</strong> ${data.functionType}</p>` : `<p><strong>Description:</strong> ${data.description}</p>`,
//     `<p><strong>Category:</strong> ${isService ? data.description : data.category}</p>`,
//     `<p><strong>Items:</strong> ${data.items}</p>`,
//     `<p style="color:orange;font-weight:700">Contact: ${data.contact}</p>`,
//     `<p style="color:red;font-weight:700">Location: ${data.location}</p>`
//   ];

//   productCard.innerHTML = fields.join("");

//   const img = document.createElement("img");
//   img.src = data.imageUrl || data.image;
//   img.className = "img-fluid rounded mb-2";
//   productCard.prepend(img);

//   const bookBtn = document.createElement("button");
//   bookBtn.className = "btn btn-success";
//   bookBtn.innerText = "Book Now";
//   bookBtn.setAttribute("data-bs-toggle", "modal");
//   bookBtn.setAttribute("data-bs-target", "#bookingModal");

//   bookBtn.addEventListener("click", () => {
//     const modalDetails = document.getElementById("modalDetails");
//     modalDetails.innerHTML = `
//       <div class="row">
//         <div class="col-md-6">
//           <img src="${img.src}" class="img-fluid rounded" alt="${data.name}">
//         </div>
//         <div class="col-md-6">
//           <h4>${data.name}</h4>
//           <p><strong>Price:</strong> ₹${data.price}</p>
//           <p><strong>Location:</strong> ${data.location}</p>
//           <p><strong>Category:</strong> ${data.category || data.description}</p>
//           <p><strong>Items:</strong> ${data.items}</p>
//           <p><strong>Contact:</strong> ${data.contact}</p>
//           <button class="btn btn-success mt-3" id="confirmBtn">Confirm Booking</button>
//         </div>
//       </div>
//     `;

//     document.getElementById("confirmBtn").addEventListener("click", () => {
//       if (isService) {
//         confirmFormBooking(data);
//       } else {
//         confirmPaymentBooking(data);
//       }
//     });
//   });

//   productCard.appendChild(bookBtn);
//   container.appendChild(productCard);
// }

// // Payment-based booking confirmation
// function confirmPaymentBooking(product) {
//   const modalDetails = document.getElementById("modalDetails");
//   modalDetails.innerHTML = `
//     <div class="text-center">
//       <h4>Pay for: ${product.name}</h4>
//       <p>Total Amount: ₹${product.price}</p>
//     </div>
//     <form id="cardForm" class="mt-3">
//       <input type="text" class="form-control mb-2" placeholder="Card Number" required>
//       <input type="text" class="form-control mb-2" placeholder="Name on Card" required>
//       <div class="form-row mb-2">
//         <div class="col">
//           <input type="text" class="form-control" placeholder="MM/YY" required>
//         </div>
//         <div class="col">
//           <input type="text" class="form-control" placeholder="CVV" required>
//         </div>
//       </div>
//       <button type="submit" class="btn btn-success w-100 mt-2">Pay ₹${product.price}</button>
//     </form>
//   `;

//   document.getElementById("cardForm").addEventListener("submit", (e) => {
//     e.preventDefault();
//     modalDetails.innerHTML = `<div class="text-center"><div class="spinner-border text-success"></div><p class="mt-2">Processing Payment...</p></div>`;

//     setTimeout(() => {
//       modalDetails.innerHTML = `<div class="text-center"><img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" style="width:100px;"><h3 class="text-success mt-3">Payment Successful!</h3><p>Your booking for <strong>${product.name}</strong> is confirmed.</p></div>`;
//       addDoc(collection(db, "bookings"), {
//         productName: product.name,
//         price: product.price,
//         category: product.category,
//         location: product.description,
//         image: product.image,
//         timestamp: new Date().toISOString()
//       });
//       setTimeout(() => window.location.href = "mainn.html", 3000);
//     }, 2000);
//   });
// }

// // Form-based booking confirmation
// function confirmFormBooking(product) {
//   const modalDetails = document.getElementById("modalDetails");
//   modalDetails.innerHTML = `
//     <form id="bookingForm">
//       <input type="text" class="form-control mb-2" placeholder="First Name" required>
//       <input type="text" class="form-control mb-2" placeholder="Last Name" required>
//       <input type="email" class="form-control mb-2" placeholder="Gmail" required>
//       <input type="number" class="form-control mb-2" placeholder="Contact Number" required>
//       <button type="submit" class="btn btn-success w-100 mt-2">Book</button>
//     </form>
//   `;

//   document.getElementById("bookingForm").addEventListener("submit", (e) => {
//     e.preventDefault();
//     modalDetails.innerHTML = `<div class="text-center"><div class="spinner-border text-success"></div><p class="mt-2">Booking in Process...</p></div>`;

//     setTimeout(() => {
//       modalDetails.innerHTML = `<div class="text-center"><img src="https://icons.veryicon.com/png/o/leisure/weight-with-linear-icon/successful-booking.png" style="width:100px;"><h3 class="text-success mt-3">Booking Successful!</h3><p>Your booking for <strong>${product.name}</strong> is confirmed.</p></div>`;
//     }, 2000);
//   });
// }

// // Category filter logic
// document.getElementById("categoryButtons").addEventListener("click", (e) => {
//   if (e.target.classList.contains("category-btn")) {
//     const selectedCategory = e.target.getAttribute("data-category").toLowerCase();
//     const filteredProducts = selectedCategory === "all"
//       ? allProducts
//       : allProducts.filter(p => p.category && p.category.toLowerCase().includes(selectedCategory));

//     const productList = document.getElementById("productList");
//     productList.innerHTML = "";
//     filteredProducts.forEach(product => renderProductCard(product, productList));
//   }
// });

// // Initial fetch
// fetchAllProducts();
// serv_Pro();
/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script> */

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getFirestore, collection, getDocs, query, where, addDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCV1eiwKVZs1inaWkVTYVsisI3sIIlAGL0",
  authDomain: "crud-dd0b4.firebaseapp.com",
  projectId: "crud-dd0b4",
  storageBucket: "crud-dd0b4.firebasestorage.app",
  messagingSenderId: "818921146981",
  appId: "1:818921146981:web:dbbdba5635bcdf78d3548c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Navbar toggle function
const hamb = document.getElementById("hamburger");
hamb.addEventListener("click", function () {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
});

// Handle logout button click
const logoutLink = document.getElementById("logoutLink");
logoutLink.onclick = async () => {
  await signOut(auth);
  alert('You have logged out!');
};

// async function serv_Pro() {
//   let dta = JSON.parse(localStorage.getItem("base64"));
//   console.log(dta);
//   const q = query(collection(db, "servdetails"));
//   const querySnap = await getDocs(q);
//   const productList2 = document.getElementById("productList2");
//   productList2.setAttribute("class", "prolist");
//   querySnap.forEach((val) => {
//     const data = val.data();
//     const productCard = document.createElement("div");
//     productCard.classList.add("product-card");

//     const productName = document.createElement("h3");
//     productName.textContent = data.name;

//     const productPrice = document.createElement("p");
//     productPrice.textContent = `Price: ₹${data.price}`;
//     productPrice.style.fontWeight = "600";
//     productPrice.style.color = "black";

//     const productDesc = document.createElement("p");
//     productDesc.textContent = `Function type: ${data.functionType}`;

//     const productCategory = document.createElement("p");
//     productCategory.textContent = `Category: ${data.description}`;

//     const productStock = document.createElement("p");
//     productStock.textContent = `Timings: ${data.items}`;
//     productStock.style.fontWeight = "600";

//     const location = document.createElement("p");
//     location.textContent = `Location: ${data.location}`;
//     location.style.fontWeight = "700";
//     location.style.color = "red";

//     const productImage = document.createElement("img");
//     productImage.src = data.imageUrl;
//     // productImage.style.width = "20vw";

//     const num = document.createElement("p");
//     num.textContent = `Contact: ${data.contact}`;
//     num.style.color = "orange";
//     num.style.fontWeight = "700";

//     const anchor = document.createElement("a");
//     anchor.innerText = "Call us";
//     anchor.href = "tel:" + num.textContent;
//     // anchor.style.marginLeft="15%"
//     anchor.style.padding="2.5%"
//     // anchor.style.width="8vw"
//     anchor.style.color="white"
//     anchor.style.fontWeight="100"
//     anchor.style.fontsize="1rem"
//     anchor.className = "btn btn-primary mt-2";
//     anchor.setAttribute("id", "anchor");

//     anchor.setAttribute("data-bs-toggle", "modal");
//     anchor.setAttribute("data-bs-target", "#bookingModal");

//     const button = document.createElement("button");
//     button.innerText = "Book Now";

//     button.setAttribute("data-bs-toggle", "modal");
//     button.setAttribute("data-bs-target", "#bookingModal");

//     button.addEventListener("click", function () {
//       const modalDetails = document.getElementById("modalDetails");
//       modalDetails.innerHTML = `
//         <div class="row">
//           <div class="col-md-6">
//             <img src="${data.imageUrl}" class="img-fluid rounded" alt="${data.name}">
//           </div>
//           <div class="col-md-6">
//             <h4>${data.name}</h4>
//             <p><strong>Price:</strong> ₹${data.price}</p>
//             <p><strong>Location:</strong> ${data.location}</p>
//             <p><strong>Category:</strong> ${data.functionType}</p>
//             <p><strong>Function Type:</strong> ${data.description}</p>
//             <p><strong>Items:</strong> ${data.items}</p>
//             <p><strong>Contact:</strong> ${data.contact}</p>

//             <button class="btn btn-success mt-3" id="confirmBtns">Confirm Booking</button>
//           </div>
//         </div>
//       `;

//       // Handle confirm booking button click
//       document.getElementById("confirmBtns").addEventListener("click", function () {
//         window.confirmBookingss(data);
//       });
//     });

//     productCard.append(productImage, productName, productPrice, productStock, location, productDesc, productCategory, num, button, anchor);
//     productList2.appendChild(productCard);
//   });
// }
async function serv_Pro() {
  const querySnap = await getDocs(query(collection(db, "servdetails")));
  const productList2 = document.getElementById("productList2");
  productList2.setAttribute("class", "prolist");
  productList2.innerHTML = ""; // Clear existing

  querySnap.forEach((val) => {
    const data = val.data();

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("data-category", data.description?.toLowerCase() || "unknown");

    const productName = document.createElement("h3");
    productName.textContent = data.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: ₹${data.price}`;
    productPrice.style.fontWeight = "600";
    productPrice.style.color = "black";

    const productDesc = document.createElement("p");
    productDesc.textContent = `Function type: ${data.functionType}`;

    const productCategory = document.createElement("p");
    productCategory.textContent = `Category: ${data.description}`;

    const productStock = document.createElement("p");
    productStock.textContent = `Timings: ${data.items}`;
    productStock.style.fontWeight = "600";

    const location = document.createElement("p");
    location.textContent = `Location: ${data.location}`;
    location.style.fontWeight = "700";
    location.style.color = "red";

    const productImage = document.createElement("img");
    productImage.src = data.imageUrl;
    productImage.alt = data.name;
    productImage.style.width = "100%";
    productImage.style.borderRadius = "8px";

    const num = document.createElement("p");
    num.textContent = `Contact: ${data.contact}`;
    num.style.color = "orange";
    num.style.fontWeight = "700";

    const anchor = document.createElement("a");
    anchor.innerText = "Call us";
    anchor.href = "tel:" + data.contact;
    anchor.style.padding = "2.5%";
    anchor.style.color = "white";
    anchor.className = "btn btn-primary mt-2";
    anchor.setAttribute("id","anchor")

    // anchor.setAttribute("data-bs-toggle", "modal");
    // anchor.setAttribute("data-bs-target", "#bookingModal");

    const button = document.createElement("button");
    button.innerText = "Book Now";
    button.className = "btn btn-success mt-2";
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#bookingModal");

    button.addEventListener("click", function () {
      const modalDetails = document.getElementById("modalDetails");
      modalDetails.innerHTML = `
        <div class="row">
          <div class="col-md-6">
            <img src="${data.imageUrl}" class="img-fluid rounded" alt="${data.name}">
          </div>
          <div class="col-md-6">
            <h4>${data.name}</h4>
            <p><strong>Price:</strong> ₹${data.price}</p>
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Category:</strong> ${data.functionType}</p>
            <p><strong>Function Type:</strong> ${data.description}</p>
            <p><strong>Items:</strong> ${data.items}</p>
            <p><strong>Contact:</strong> ${data.contact}</p>
            <button class="btn btn-success mt-3" id="confirmBtns">Confirm Booking</button>
          </div>
        </div>
      `;
      document.getElementById("confirmBtns").addEventListener("click", function () {
        window.confirmBookingss(data);
      });
    });

    productCard.append(productImage, productName, productPrice, productStock, location, productDesc, productCategory, num, button, anchor);
    productList2.appendChild(productCard);
  });

  initCategoryFilter2(); // initialize after cards loaded
}
function initCategoryFilter2() {
  const buttons = document.querySelectorAll(".category2-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.getAttribute("data-category");
      const cards = document.querySelectorAll("#productList2 .product-card");

      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });

      buttons.forEach((btn) => btn.classList.replace("btn-dark", "btn-outline-dark"));
      button.classList.replace("btn-outline-dark", "btn-dark");
    });
  });
}


window.confirmBookingss = function (data) {
    const modalDetails = document.getElementById("modalDetails");
    modalDetails.innerHTML = `
      <div class="text-center">
        <h4>Pay for: ${data.name}</h4>
        <p>Total Amount: ₹${data.price}</p>
      </div>
      <form id="cardForm" class="mt-3">
        <div class="form-group mb-2">
          <input type="text" class="form-control" placeholder="Enter First Name" required>
        </div>
        <div class="form-group mb-2">
          <input type="text" class="form-control" placeholder=" Enter Second Name" required>
        </div>
        <div class="form-row mb-2">
          <div class="col">
            <input type="text" class="form-control" placeholder="Gmail" required>
          </div>
          <div class="col">
            <input type="number" class="form-control" placeholder="Contact" required>
          </div>
        </div>
        <button type="submit" class="btn btn-success w-100 mt-2">Book</button>
      </form>
    `;

    const cardForm = document.getElementById("cardForm");
  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading spinner
    modalDetails.innerHTML = `
      <div class="text-center">
        <div class="spinner-border text-success" role="status"></div>
        <p class="mt-2">Booking in proccess...</p>
      </div>
    `;

    setTimeout(() => {
      // Payment success UI
      modalDetails.innerHTML = `
        <div class="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" style="width:100px;" alt="Success">
          <h3 class="text-success mt-3">Booking succesfull!</h3>
          <p>Your booking for <strong>${data.name}</strong> is confirmed.</p>
        </div>
      `;

      // Save to Firestore
      const bookingData = {
        productName: product.name,
        price: product.price,
        category: product.category,
        location: product.description,
        image: product.image,
        timestamp: new Date().toISOString()
      };

      addDoc(collection(db, "bookings"), bookingData)
        .then(() => {
          console.log("✅ Booking saved to Firestore");

          // Redirect after 3 seconds
          setTimeout(() => {
            window.location.href = "mainn.html"; // change to your homepage
          }, 3000);
        })
        .catch(err => {
          console.error("❌ Error saving booking:", err);
          alert("Something went wrong. Please try again.");
        });

    }, 2000); // Simulate payment delay
  });

}


serv_Pro();

onAuthStateChanged(auth, user => {
const loginLink = document.getElementById("loginLink");
const logoutLink = document.getElementById("logoutLink");

if (user) {
// User is signed in
loginLink.innerText = "Profile";
loginLink.setAttribute("href", "profile.html");
logoutLink.style.display = 'inline-block';

// Save user email to localStorage
const userProfile = [{ name: user.email }];
localStorage.setItem("Profiles", JSON.stringify(userProfile));
} else {
// User is signed out
loginLink.innerText = "Login";
loginLink.setAttribute("href", "Register.html");
logoutLink.style.display = 'none';
}
});




// async function fetchAllProducts() {
//     const q = query(collection(db, "productsList"));
//     const querySnapshot = await getDocs(q);
//     // const data = val.data();

//     const productList = document.getElementById("productList");
//     productList.innerHTML = ""; // Clear existing list

//     querySnapshot.forEach((doc) => {

//         const productData = doc.data();
//         // const data=doc.data()
//         const productCard = document.createElement("div");
//         productCard.classList.add("product-card");

//         const productName = document.createElement("h3");
//         productName.textContent = productData.name;

//         const productPrice = document.createElement("p");
//         productPrice.textContent = `Price Per Head: $${productData.price}`;
// productPrice.style.color="red"
// productPrice.style.fontWeight="600"

//         const product1 = document.createElement("p");
//         product1.textContent = `location: ${productData.info}`;

//         const product2 = document.createElement("p");
//         product2.textContent = `Items Provided: ${productData.items}`;

//         const product3 = document.createElement("p");
//         product3.textContent = `cell: ${productData.cell}`;
//         const productDesc = document.createElement("p");
//         productDesc.textContent = `Description: ${productData.description}`;

//         const productCategory = document.createElement("p");
//         productCategory.textContent = `Category: ${productData.category}`;

//         const productStock = document.createElement("p");
//         productStock.textContent = `Stock: ${productData.stock}`;
//         const productImage = document.createElement("img");
//         productImage.src = productData.image;
//         productImage.alt = productData.name;

//         const anchor = document.createElement("a");
//         anchor.innerText = "Call us";
//         anchor.href = "tel:91+" + productData.num;

//         // anchor.style.marginLeft="15%"
//     anchor.style.padding="2%"
  
//     // anchor.style.width="80vw"
//     anchor.style.color="white"
//     // anchor.style.fontWeight="100"
//     anchor.style.fontsize="1rem"
//     anchor.className = "btn btn-primary mt-2";
//     anchor.setAttribute("id", "anchor");
//     anchor.setAttribute("data-bs-toggle", "modal");
//     anchor.setAttribute("data-bs-target", "#bookingModal");

//         const button=document.createElement("button")
//         button.innerText="Book-Now"
        
//     button.setAttribute("data-bs-toggle", "modal");
//     button.setAttribute("data-bs-target", "#bookingModal");
//     button.addEventListener("click", function () {
//         console.log("hello");
//         const data = doc.data();

//         const modalDetails = document.getElementById("modalDetails");
//         modalDetails.innerHTML = `
//         <div class="row">
//           <div class="col-md-6">
//             <img src="${data.image}" class="img-fluid rounded" alt="${data.name}">
//           </div>
//           <div class="col-md-6">
//             <h4>${data.name}</h4>
//             <p><strong>Price:</strong> ₹${data.price}</p>
//             <p><strong>Location:</strong> ${data.location}</p>
//             <p><strong>Category:</strong> ${data.functionType}</p>
//             <p><strong>Function Type:</strong> ${data.description}</p>
//             <p><strong>Items:</strong> ${data.items}</p>
//             <p><strong>Contact:</strong> ${data.contact}</p>

//             <button class="btn btn-success mt-3" id="confirmBtns">Confirm Booking</button>
//           </div>
//         </div>
//         `;
  
//         // Handle confirm booking button click
//         document.getElementById("confirmBtns").addEventListener("click", function () {
//           window.confirmBooking(data);
//         });
//       });


      
  
//       productCard.append(productName,product1, productImage, productPrice, productDesc, productCategory, productStock,product2,product3, button,anchor);
//       productList.appendChild(productCard);
//     })
// }
async function fetchAllProducts() {
  const q = query(collection(db, "productsList"));
  const querySnapshot = await getDocs(q);

  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("data-category", data.category?.toLowerCase() || "unknown");

    const productName = document.createElement("h3");
    productName.textContent = data.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price Per Head: ₹${data.price}`;
    productPrice.style.color = "red";
    productPrice.style.fontWeight = "600";

    const productLocation = document.createElement("p");
    productLocation.textContent = `Location: ${data.info}`;

    const productItems = document.createElement("p");
    productItems.textContent = `Items Provided: ${data.items}`;

    const productContact = document.createElement("p");
    productContact.textContent = `Cell: ${data.cell}`;

    const productDesc = document.createElement("p");
    productDesc.textContent = `Description: ${data.description}`;

    const productCategory = document.createElement("p");
    productCategory.textContent = `Category: ${data.category}`;

    const productStock = document.createElement("p");
    productStock.textContent = `Stock: ${data.stock}`;

    const productImage = document.createElement("img");
    productImage.src = data.image;
    productImage.alt = data.name;
    productImage.style.width = "100%";
    productImage.style.borderRadius = "8px";

    const anchor = document.createElement("a");
    anchor.innerText = "Call us";
    anchor.setAttribute("id","anchor")
    anchor.style.color="white"
    anchor.href = "tel:91+" + data.num;
    anchor.className = "btn btn-primary mt-2";
// anchor.setAttribute("id","anchor")
    const button = document.createElement("button");
    button.innerText = "Book Now";
    button.className = "btn btn-success mt-2";
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#bookingModal");

    button.addEventListener("click", function () {
      const modalDetails = document.getElementById("modalDetails");
      modalDetails.innerHTML = `
        <div class="row">
          <div class="col-md-6">
            <img src="${data.image}" class="img-fluid rounded" alt="${data.name}">
          </div>
          <div class="col-md-6">
            <h4>${data.name}</h4>
            <p><strong>Price:</strong> ₹${data.price}</p>
            <p><strong>Location:</strong> ${data.info}</p>
            <p><strong>Category:</strong> ${data.category}</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Items:</strong> ${data.items}</p>
            <p><strong>Contact:</strong> ${data.cell}</p>
            <button class="btn btn-success mt-3" id="confirmBtns">Confirm Booking</button>
          </div>
        </div>
      `;

      document.getElementById("confirmBtns").addEventListener("click", function () {
        window.confirmBooking(data);
      });
    });

    productCard.append(
      productName,
      productImage,
      productPrice,
      productLocation,
      productDesc,
      productCategory,
      productStock,
      productItems,
      productContact,
      button,
      anchor
    );

    productList.appendChild(productCard);
  });

  initCategoryFilter(); // call this after cards are loaded
}
function initCategoryFilter() {
  const buttons = document.querySelectorAll(".category-btns");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.getAttribute("data-category");
      const cards = document.querySelectorAll(".product-card");

      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
          // console.log("no opp");
          
        }
      });

      // Toggle active button style
      buttons.forEach((btn) => btn.classList.replace("btn-dark", "btn-outline-dark"));
      button.classList.replace("btn-outline-dark", "btn-dark");
    });
  });
}


window.confirmBooking = function (data) {
  const modalDetails = document.getElementById("modalDetails");
  console.log("hel");
  
  modalDetails.innerHTML = `
    <div class="text-center">
      <h4>Pay for: ${data.name}</h4>
      <p>Total Amount: ₹${data.price}</p>
    </div>
    <form id="cardForm" class="mt-3">
      <div class="form-group mb-2">
        <input type="text" class="form-control" placeholder="Card Number" required>
      </div>
      <div class="form-group mb-2">
        <input type="text" class="form-control" placeholder="Name on Card" required>
      </div>
      <div class="form-row mb-2">
        <div class="col">
          <input type="text" class="form-control" placeholder="MM/YY" required>
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="CVV" required>
        </div>
      </div>
      <button type="submit" class="btn btn-success w-100 mt-2">Pay ₹${data.price}</button>
    </form>
  `;

  const cardForm = document.getElementById("cardForm");
  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading spinner
    modalDetails.innerHTML = `
      <div class="text-center">
        <div class="spinner-border text-success" role="status"></div>
        <p class="mt-2">Processing Payment...</p>
      </div>
    `;

    setTimeout(() => {
      // Payment success UI
      modalDetails.innerHTML = `
        <div class="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" style="width:100px;" alt="Success">
          <h3 class="text-success mt-3">Payment Successful!</h3>
          <p>Your booking for <strong>${data.name}</strong> is confirmed.</p>
        </div>
      `;

      // Save to Firestore
    
    },2000)
  })
  
}
  //     addDoc(collection(db, "bookings"), bookingData)
  //       .then(() => {
  //         console.log("✅ Booking saved to Firestore");

  //         // Redirect after 3 seconds
  //         setTimeout(() => {
  //           window.location.href = "mainn.html"; // change to your homepage
  //         }, 3000);
  //       })
  //       .catch(err => {
  //         console.error("❌ Error saving booking:", err);
  //         alert("Something went wrong. Please try again.");
  //       });

  //   }, 2000); // Simulate payment delay
  // });



// Toggle mobile menu


fetchAllProducts()

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-Links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  