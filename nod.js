const products=[
{ id:1, name:"Elegant Dress", price:80, category:"clothes", image:"https://images.unsplash.com/photo-1520975916090-3105956dac38"},
{ id:2, name:"High Heels", price:95, category:"shoes", image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2"},
{ id:3, name:"Luxury Perfume", price:120, category:"perfume", image:"https://images.unsplash.com/photo-1585386959984-a41552231658"},
{ id:4, name:"Ladies Handbag", price:70, category:"accessories", image:"https://images.unsplash.com/photo-1584917865442-de89df76afd3"},
{ id:5, name:"Summer Outfit", price:65, category:"clothes", image:"https://images.unsplash.com/photo-1483985988355-763728e1935b"},
{ id:6, name:"Fashion Sneakers", price:85, category:"shoes", image:"https://images.unsplash.com/photo-1528701800489-20be9c06b5b9"}
];

let cart=[];
const grid=document.getElementById("productGrid");

function displayProducts(items){
  grid.innerHTML="";
  items.forEach(p=>{
    grid.innerHTML+=`
      <div class="product-card">
        <img src="${p.image}">
        <div class="product-info">
          <h4>${p.name}</h4>
          <p>$${p.price}</p>
          <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    `;
  });
}

displayProducts(products);

function filterProducts(category, event){
  document.querySelectorAll(".filter button").forEach(btn=>btn.classList.remove("active"));
  event.target.classList.add("active");

  if(category==="all"){
    displayProducts(products);
  }else{
    displayProducts(products.filter(p=>p.category===category));
  }
}

function addToCart(id){
  const item=products.find(p=>p.id===id);
  cart.push(item);
  updateCart();
}

function updateCart(){
  const cartItems=document.getElementById("cartItems");
  const totalEl=document.getElementById("total");
  const count=document.getElementById("count");

  cartItems.innerHTML="";
  let total=0;

  cart.forEach(item=>{
    total+=item.price;
    cartItems.innerHTML+=`
      <div class="cart-item">
        <span>${item.name}</span>
        <span>$${item.price}</span>
      </div>`;
  });

  totalEl.innerText=total;
  count.innerText=cart.length;
}

function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
}

function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}

function scrollToShop(){
  document.getElementById("shop").scrollIntoView({behavior:"smooth"});
}

function checkout(){
  alert("Order placed successfully!");
  cart=[];
  updateCart();
}