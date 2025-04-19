    // <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    

        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
        import { getFirestore, collection, getDocs, query, where} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
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
        hamb.addEventListener("click", function() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        });

        // Handle button click
        const logoutLink = document.getElementById("logoutLink");
        logoutLink.onclick = async () => {
            await signOut(auth);
            alert('You have logged out!');
        };

        async function serv_Pro() {
        let dta=JSON.parse(localStorage.getItem("base64")) 

console.log(dta);
            const q = query(collection(db, "servdetails"));
            const querySnap = await getDocs(q);
            const productList = document.getElementById("productList");
            productList.setAttribute("class","prolist") // Clear existing list
            console.log(querySnap);
            const productList2 = document.getElementById("productList2");
            productList2.setAttribute("class","prolist")
            querySnap.forEach((val)=>{
    console.log(val.data());
    
    const data=val.data()
    console.log(data[1]);
    
    const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                

                const productName = document.createElement("h3");
                productName.textContent =data.name ;

                const productPrice = document.createElement("p");
                productPrice.textContent = `Price: $${data.price}`;

                const productDesc = document.createElement("p");
                productDesc.textContent = `Description: ${data.description}}`;
                const productCategory = document.createElement("p");
                productCategory.textContent = `Category: ${data.functionType}`;

                const productStock = document.createElement("p");
                productStock.textContent = `Stock: ${data.items}`;

                const productImage = document.createElement("img");
                productImage.src = data.imageUrl;
                productImage.style.width="20vw"
                // productImage.alt = productData.name;
                const num = document.createElement("p");
                num.textContent = `cell:: ${data.contact}`;
                const anchor = document.createElement("a");
                anchor.innerText = "Call us";
                anchor.href = "tel:" + num;
                // anchor.style.border="2px solid black"

                 const button=document.createElement("button")
                button.innerText="Book-Now"
                button.addEventListener("click",
                function(movie) {

console.log("hello");
productName.textContent =data[1];
 
    });
    

    productCard.append(productImage,productName,productPrice,productDesc,productCategory,num,button,anchor)
 
productList2.appendChild(productCard)


})
document.getElementById("categoryButton").addEventListener("click", function (e) {
  if (e.target.classList.contains("category-btn")) {
    const selectedCategory = e.target.getAttribute("data-category").toLowerCase();
    if (selectedCategory === "all") {
      displayProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category && p.category.toLowerCase().includes(selectedCategory));
      displayProducts(filtered);
    }
  }
});

}

serv_Pro()

        // Fetch all products when the page loads
        // fetchAllProducts();

        onAuthStateChanged(auth, user => {
            const loginLink = document.getElementById("loginLink");
            if (user) {
                loginLink.innerText = "Profile";
                loginLink.setAttribute("href", "profile.html");
                document.getElementById("logoutLink").style.display = 'inline-block';
                console.log(user.email);

                let arr=[]
                let obj={name:user.email}
                arr.push(obj)
                const local=localStorage.setItem("Profiles",JSON.stringify(arr))
console.log(local);



            } else {
                loginLink.innerText = "Login";
                loginLink.setAttribute("href", "Register.html");
                document.getElementById("logoutLink").style.display = 'none';
            }
        });

//    


let allProducts = [];

async function fetchAllProducts() {

  const q = query(collection(db, "productsList"));
  const querySnapshot = await getDocs(q);
  const productList = document.getElementById("productList");
  productList.innerHTML = "";
  allProducts = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    allProducts.push(data);
  });

  displayProducts(allProducts);
}

function displayProducts(products) {

let daata=JSON.parse(localStorage.getItem("base64")) 
console.log(daata[0].url);

console.log(daata);
const productList = document.getElementById("productList");
productList.innerHTML = ""; // Clear the existing list

products.forEach((productData) => {
const productCard = document.createElement("div");
productCard.classList.add("product-card");

const productName = document.createElement("h3");
productName.textContent = productData.name || "Product Name Unavailable";

const productPrice = document.createElement("p");
productPrice.textContent = `Price: ₹${productData.price || "N/A"}`;

const productDesc = document.createElement("p");
productDesc.textContent = `Description: ${productData.description || "No Description"}`;

const productCategory = document.createElement("p");
productCategory.textContent = `Category: ${productData.category || "No Category"}`;

const productStock = document.createElement("p");
productStock.textContent = `Stock: ${productData.stock || "Out of stock"}`;

const productImage = document.createElement("img");
productImage.src = productData.image || 'fallback-image-url.jpg'; // Add fallback URL
productImage.style.width = "20vw";

const num = document.createElement("p");
num.textContent = `Contact: ${productData.cell || "N/A"}`;

const anchor = document.createElement("a");
anchor.innerText = "Call us";
anchor.href = "tel:+91" + num.textContent;

const button = document.createElement("button");
button.innerText = "Book Now";
button.addEventListener("click", function() {
  console.log("Booking product:", productData.name);
});

productCard.append(productImage, productName, productPrice, productDesc, productCategory, productStock, num, button, anchor);
productList.appendChild(productCard);  // Add the product card to the list
});
}

document.getElementById("categoryButtons").addEventListener("click", function (e) {
  if (e.target.classList.contains("category-btn")) {
    const selectedCategory = e.target.getAttribute("data-category").toLowerCase();
    if (selectedCategory === "all") {
      displayProducts(allProducts);
    } else {
      const filtered = allProducts.filter(p => p.category && p.category.toLowerCase().includes(selectedCategory));
      displayProducts(filtered);
    }
  }
});





fetchAllProducts()

    
    