
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
async function serv_Pro() {
  const querySnap = await getDocs(query(collection(db, "servdetails")));
  const productList2 = document.getElementById("productList2");
  productList2.setAttribute("class", "prolist");
  productList2.innerHTML = ""; // Clear existing

  const allCards = []; // store all cards for controlled rendering

  querySnap.forEach((val) => {
    const data = val.data();
    const leftdiv = document.createElement("div");
    leftdiv.classList.add("leftdiv");

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
    productImage.style.borderRadius = "8px";

    const num = document.createElement("p");
    num.textContent = `Contact: ${data.contact}`;
    num.style.color = "blue";
    num.style.fontWeight = "700";

    const anchor = document.createElement("a");
    anchor.innerText = "Call us";
    anchor.href = "tel:" + data.contact;
    anchor.className = "btn btn-primary mt-2";
    anchor.setAttribute("id", "anchor");
    anchor.style.color = "white";

    const button = document.createElement("button");
    button.innerText = "Book Now";
    button.classList.add("Bookbtn");
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

    leftdiv.append(productName, productPrice, productStock, location, productDesc, productCategory, num);
    productCard.append(productImage, leftdiv, button, anchor);

    allCards.push(productCard); // store for later rendering
  });

  const initialDisplayCount = 3;
  let visibleCount = 0;

  function showMore() {
    const nextBatch = allCards.slice(visibleCount, visibleCount + initialDisplayCount);
    nextBatch.forEach(card => productList2.appendChild(card));
    visibleCount += nextBatch.length;

    if (visibleCount >= allCards.length) {
      showMoreBtn.style.display = "none";
    }
  }

  // Create Show More button if it doesn't exist
  let showMoreBtn = document.getElementById("showMoreBtn2");
  if (!showMoreBtn) {
    showMoreBtn = document.createElement("button");
    showMoreBtn.id = "showMoreBtn2";
    showMoreBtn.textContent = "Show More";
    showMoreBtn.className = "btn btn-outline-secondary d-block mx-auto mt-4";
    showMoreBtn.addEventListener("click", showMore);
let sec3=document.getElementById("sec3")
    sec3.appendChild(showMoreBtn);
  }

  // Display the first batch
  showMore();

  // Initialize filter after content rendered
  initCategoryFilter2();
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





// // async function fetchAllProducts() {
// //   const q = query(collection(db, "productsList"));
// //   const querySnapshot = await getDocs(q);

// //   const productList = document.getElementById("productList");
// //   productList.innerHTML = "";

// //   querySnapshot.forEach((doc) => {
// //     const data = doc.data();
// //     const leftdiv=document.createElement("div")
// //     leftdiv.classList.add("leftdiv")
// //     const productCard = document.createElement("div");
// //     productCard.classList.add("product-card");

// //     productCard.setAttribute("data-category", data.category?.toLowerCase() || "unknown");

// //     const productName = document.createElement("h3");
// //     productName.textContent = data.name;

// //     const productPrice = document.createElement("p");
// //     productPrice.textContent = `Price Per plate: ₹${data.price}`;
// //     productPrice.style.color = "red";
// //     productPrice.style.fontWeight = "600";

// //     const productLocation = document.createElement("p");
// //     productLocation.textContent = `Location: ${data.info}`;
// //     productLocation.style.color = "blue";
// //     productLocation.style.fontWeight = "600";

// //     // const productItems = document.createElement("p");
// //     // productItems.textContent = `Additional-Info: ${data.info}`;

// //     const productContact = document.createElement("p");
// //     productContact.textContent = `Cell: ${data.cell}`;

// //     const productDesc = document.createElement("p");
// //     productDesc.textContent = `Category: ${data.description}`;

// //     const productCategory = document.createElement("p");
// //     productCategory.textContent = `Tyoe of partiess: ${data.category}`;

// //     const productStock = document.createElement("p");
// //     productStock.textContent = `items-provided: ${data.stock}`;

// //     const productImage = document.createElement("img");
// //     productImage.src = data.image;
// //     productImage.alt = data.name;
    
// //     // productImage.style.width = "100%";
// //     productImage.style.borderRadius = "8px";

// //     const anchor = document.createElement("a");
// //     anchor.innerText = "Call us";
// //     anchor.setAttribute("id","anchor")
// //     anchor.style.color="white"
// //     anchor.href = "tel:91+" + data.num;
// //     anchor.className = "btn btn-primary mt-2";
// // // anchor.setAttribute("id","anchor")
// //     const button = document.createElement("button");
// //     button.innerText = "Book Now";
// //     button.className = "btn btn-success mt-2";
// //     button.setAttribute("data-bs-toggle", "modal");
// //     button.setAttribute("data-bs-target", "#bookingModal");

// //     button.addEventListener("click", function () {
// //       const modalDetails = document.getElementById("modalDetails");
// //       modalDetails.innerHTML = `
// //         <div class="row">
// //           <div class="col-md-6">
// //             <img src="${data.image}" class="img-fluid rounded" alt="${data.name}">
// //           </div>
// //           <div class="col-md-6">
// //             <h4>${data.name}</h4>
// //             <p><strong>Price:</strong> ₹${data.price}</p>
// //             <p><strong>Location:</strong> ${data.info}</p>
// //             <p><strong>Category:</strong> ${data.category}</p>
// //             <p><strong>Description:</strong> ${data.description}</p>
// //             <p><strong>Items:</strong> ${data.items}</p>
// //             <p><strong>Contact:</strong> ${data.cell}</p>
// //             <button class="btn btn-success mt-3" id="confirmBtns">Confirm Booking</button>
// //           </div>
// //         </div>
// //       `;

// //       document.getElementById("confirmBtns").addEventListener("click", function () {
// //         window.confirmBooking(data);
// //       });
// //     });

// //     productCard.append(
// //       productImage,
    
// //    leftdiv,
// //    button,
// //    anchor
// //     );
// //     leftdiv.append(productName,productDesc,
// //       productLocation,
      

// //       productCategory,
// //       productStock,
// //       productPrice,
// //       productContact,
      
// //     )

// //     productList.appendChild(productCard);
// //   });

// //   initCategoryFilter(); // call this after cards are loaded
// }
async function fetchAllProducts() {
  const q = query(collection(db, "productsList"));
  const querySnapshot = await getDocs(q);

  const productList = document.getElementById("productList");
  productList.innerHTML = "";

  const allCards = [];
  
  querySnapshot.forEach((doc) => {
    const data = doc.data();

    const leftdiv = document.createElement("div");
    leftdiv.classList.add("leftdiv");

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.setAttribute("data-category", data.category?.toLowerCase() || "unknown");

    const productImage = document.createElement("img");
    productImage.src = data.image;
    productImage.alt = data.name;
    productImage.style.borderRadius = "8px";

    const productName = document.createElement("h3");
    productName.textContent = data.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price Per plate: ₹${data.price}`;
    productPrice.style.color = "red";
    productPrice.style.fontWeight = "600";

    const productLocation = document.createElement("p");
    productLocation.textContent = `Location: ${data.info}`;
    productLocation.style.color = "blue";
    productLocation.style.fontWeight = "600";

    const productDesc = document.createElement("p");
    productDesc.textContent = `Category: ${data.description}`;

    const productCategory = document.createElement("p");
    productCategory.textContent = `Type of parties: ${data.category}`;

    const productStock = document.createElement("p");
    productStock.textContent = `Items provided: ${data.stock}`;

    const productContact = document.createElement("p");
    productContact.textContent = `Cell: ${data.cell}`;

    const anchor = document.createElement("a");
    anchor.innerText = "Call us";
    anchor.href = "tel:91+" + data.num;
    anchor.className = "btn btn-primary mt-2";
    anchor.style.color = "white";
    anchor.setAttribute("id","anchor")

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

    productCard.append(productImage, leftdiv, button, anchor);
    leftdiv.append(
      productName,
      productDesc,
      productLocation,
      productCategory,
      productStock,
      productPrice,
      productContact
    );

    allCards.push(productCard);
  });

  // Append only first 3 initially
  const initialCount = 3;
  let visibleCount = 0;

  function showMoreProducts() {
    const nextItems = allCards.slice(visibleCount, visibleCount + initialCount);
    nextItems.forEach(card => productList.appendChild(card));
    visibleCount += initialCount;

    // If no more items left to show, hide the button
    if (visibleCount >= allCards.length) {
      showMoreBtn.style.display = "none";
    }
  }

  // Create and append Show More button
  let showMoreBtn = document.getElementById("showMoreBtn");
  if (!showMoreBtn) {
    showMoreBtn = document.createElement("button");
    showMoreBtn.id = "showMoreBtn";
    showMoreBtn.textContent = "Show More";
    showMoreBtn.className = "btn btn-outline-secondary d-block mx-auto mt-4";
    showMoreBtn.addEventListener("click", showMoreProducts);
    productList.parentElement.appendChild(showMoreBtn);
  }

  // Show initial set
  showMoreProducts();
  initCategoryFilter()
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
  

fetchAllProducts()

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-Links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  