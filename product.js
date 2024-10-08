const addCart = document.querySelectorAll(".add-cart");

addCart.forEach((button) => {
  button.addEventListener("click", () => {
    let name = button.getAttribute("data-name");
    let price = parseFloat(button.getAttribute("data-price"));
    let img = button.getAttribute("data-image");
    let quantity = button.getAttribute("data-quantity");

    // Get current cart from local Storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    //add new item to cart
    cart.push({ name, price, img, quantity });

    //save update cart to local Storage
    localStorage.setItem("cart", JSON.stringify(cart));
  });
});
