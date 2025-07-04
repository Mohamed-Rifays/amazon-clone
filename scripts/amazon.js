import  {cart,addToCart} from '../data/cart.js';
import {products,loadProducts} from '../data/products.js';
import {formatCurrency} from './utils/monney.js';
loadProducts(renderproductsGrid);

export function updatecartQuantity(){

      let carttotalquantity=0;

        cart.forEach((cartItem)=>{
          carttotalquantity+=cartItem.quantity;
        });

      document.querySelector('.js-cart-quantity').innerHTML=carttotalquantity;
    }


function renderproductsGrid(){
  


let productsHTML='';
products.forEach((products)=>{


productsHTML+=`

    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${products.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${products.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="${products.getStarsUrl()}">
        <div class="product-rating-count link-primary">
          ${products.rating.count}
        </div>
      </div>

      <div class="product-price">
       ${products.getPrice()}
      </div>

      <div class="product-quantity-container">
        <select class="js-quantity-selector-${products.id}">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      ${products.extraInfoHTML()}
      

      <div class="product-spacer"></div>

      <div class="added-to-cart js-added-to-cart-${products.id}
      ">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${products.id}">

        Add to Cart
      </button>
    </div>

    `
  })
  
    document.querySelector('.products-grid').innerHTML=productsHTML;
        
    
    function addedDisplay(productId){
      const addedMessage=document.querySelector(`.js-added-to-cart-${productId}`);
      addedMessage.classList.add('added-message');
  const previousTimeouts=addedMessageTimeouts[productId];
  
  if(previousTimeouts){
    clearTimeout(previousTimeouts);
  }

    const timeoutId=setTimeout(() => {
        addedMessage.classList.remove('added-message')
      }, 2000);

      addedMessageTimeouts[productId]=timeoutId;
    }

    const addedMessageTimeouts={};

    document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
      button.addEventListener('click',()=>{
        const productId=button.dataset.productId;
        
        addToCart(productId);
        updatecartQuantity();
        addedDisplay(productId);
  })
});
}   
          

        