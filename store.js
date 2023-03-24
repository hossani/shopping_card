// Le div parent
const cart=document.getElementById("cart");
//  la liste des produits
const productList = [
  { name: "Shoes",
    price: 500,
    quantity: 0 },
  { name: "Jacket",
    price: 800,
    quantity: 0 },
{ name: "T-shirt",
    price: 200,
    quantity: 0 } ];
    const title=document.createElement("h2");
    title.innerHTML='My wallet';
    cart.appendChild(title);
// La déclaration les carateristiques des produits
productList.forEach((product) => {
  const div = document.createElement("div");
  const name = document.createElement("p");
  name.innerHTML = product.name;
  const decreaseButton = document.createElement("button");
  decreaseButton.style.backgroundColor= "red";
  decreaseButton.innerHTML = "-";
  const quantity = document.createElement("span");
  quantity.innerHTML = product.quantity;
  const addButton = document.createElement("button");
  addButton.style.backgroundColor= "green";
  addButton.innerHTML = "+";
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  const likeButton = document.createElement("button");
  likeButton.innerHTML = "❤";

  // Les boutons pour chaque produit
  decreaseButton.addEventListener("click", () => {
    if (product.quantity > 0) {
        product.quantity--;
      quantity.innerHTML = product.quantity;
    }
    updateTotal();
    });
  addButton.addEventListener("click", () => {
    product.quantity++;
    quantity.innerHTML = product.quantity;
    updateTotal();
  });
    deleteButton.addEventListener("click", () => {
    product.quantity=0;
    div.remove();
    updateTotal();
    });
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("liked");
  });
  // La liaison entre les elements child avec les elements parent
  div.appendChild(name);
  div.appendChild(addButton);
  div.appendChild(quantity);
  div.appendChild(decreaseButton);
  div.appendChild(deleteButton);
  div.appendChild(likeButton);
  cart.appendChild(div);
});

// Création de l'élément div total
const total = document.createElement("div");

// Lié l'element div total avec div cart
cart.appendChild(total);

// Fonction calcul le prix total
function updateTotal() {
  let prixTotal = 0;
  productList.forEach((product) => {
    prixTotal += product.price * product.quantity;
  });
  total.innerHTML = `Prix total : ${prixTotal}$`;
}
// Initialisation du prix 
updateTotal();
