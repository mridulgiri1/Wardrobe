const cartContainer = document.getElementById("cart-container");
const cartTotal = document.getElementById("cart-total");
// const addedItems = document.getElementById("addedItems");

//retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateCartUi = () => {
  cartContainer.innerHTML = "";

  let total = 0;

  cart.forEach((item, index) => {
    const cartItems = document.createElement("div");
    cartItems.classList.add("cart-items");
    cartItems.innerHTML = `<div class="product-img"><img src="${
      item.img
    }" /></div>

          <div class="product-details">
            <h3>${item.name}</h3>
            <p class="item-price">${item.price.toLocaleString("en-US")}</p>

            <div class="quantity">
              <div  data-index="${index}" class="remove">-</div>
              <div class="quantity-details">${item.quantity}</div>
              <div data-index="${index}" class="add">+</div>
            </div>
          </div>

          <button data-index="${index}" class="delete-product">Delete</button>`;

    //append child cart-items inside cart-container
    cartContainer.appendChild(cartItems);


    //update total
    total += item.price * item.quantity;
    // addedItems.innerHTML = cart.length; //update total Items in the navbar
  });

  cartTotal.innerHTML = total.toLocaleString("en-us");

  //deleteItems
  const deleteItem = document.querySelectorAll(".delete-product");
  deleteItem.forEach((del) => {
    del.addEventListener("click", () => {
      const index = del.getAttribute("data-index");

      itemDelete(index);
    });
  });

  const remove = document.querySelectorAll(".remove");
  remove.forEach((rem) => {
    rem.addEventListener("click", () => {
      const index = rem.getAttribute("data-index");

      decQuantity(index);
    });
  });

  const add = document.querySelectorAll(".add");
  add.forEach((add) => {
    add.addEventListener("click", () => {
      const index = add.getAttribute("data-index");

      incQuantity(index);
    });
  });
};

function itemDelete(index) {
  cart.splice(index, 1);

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // addedItems.innerHTML = cart.length; //update total Items in the navbar

  //refresh page
  updateCartUi();
}

function decQuantity(index) {
  if (cart[index].quantity > 1) {
    if (cart[index].quantity--) {
      // Update localStorage
      localStorage.setItem("cart", JSON.stringify(cart));

      updQuantityAndPrice(index);
    }
  }
}

function incQuantity(index) {
  cart[index].quantity++;
  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  updQuantityAndPrice(index);
}

function updQuantityAndPrice(index) {
  const details = document.querySelectorAll(".quantity-details");

  // Update the quantity display
  details[index].innerHTML = cart[index].quantity;

  // Update the total price
  let total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  cartTotal.innerHTML = total.toLocaleString("en-us");
}

updateCartUi();
