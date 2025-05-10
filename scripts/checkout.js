import {cart,removeFromCart,updateQuantity} from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/monney.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions} from '../data/deliveryOptions.js';

hello();
const today=dayjs();
const deliveryDate=today.add(7,'days');
console.log(deliveryDate.format('dddd, MMMM, D'));

let cartSummaryHTML='';
cart.forEach((cartItem) => {
  const productId=cartItem.productId;

  let matchingProduct;

  products.forEach((product)=>{
    if(product.id===productId){
      matchingProduct=product;
    }
  });


  cartSummaryHTML+= `
<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
          <div class="delivery-date">
            Delivery date: Tuesday, June 21
          </div>

          <div class="cart-item-details-grid">
            <img class="product-image"
              src="${matchingProduct.image}">

            <div class="cart-item-details">
              <div class="product-name">
               ${matchingProduct.name}
              </div>
              <div class="product-price">
                ${formatCurrency(matchingProduct.priceCents)}
              </div>
              <div class="product-quantity">
                <span>
                  Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary js-update-quantity"
                data-product-id="${matchingProduct.id}">
                  Update
                </span>
                <input class="quantity-input js-quantity-input-${matchingProduct.id}">
                <span class="save-quantity-link link-primary"
                data-product-id="${productId}">Save</span>
                <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                  Delete
                </span>
              </div>
            </div>

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              
              ${deliveryOptionsHTML(matchingProduct)}
             
              
            </div>
          </div>
        </div>
  `;
});

function deliveryOptionsHTML(matchingProduct){
  let deliveryOptionHTML='';
 deliveryOptions.forEach((deliveryOption)=>{
  const today=dayjs();
  const deliveryDate=today.add(deliveryOption.deleveryDays,'days');
  const dateString=deliveryDate.format('dddd, MMMM D');
  
  const priceString= deliveryOption.priceCents===0?'FREE':`$${formatCurrency(deliveryOption.priceCents)} -`


 deliveryOptionHTML+=  `
      <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} - Shipping
                    </div>
                  </div>
                </div>
   `
 })
return deliveryOptionHTML;
}
document.querySelector('.js-order-summary').
innerHTML=cartSummaryHTML;

let carttotalquantity=0;

    cart.forEach((cartItem)=>{
      carttotalquantity+=cartItem.quantity;
    });

  document.querySelector('.js-update-Checkout-Quantity').innerHTML=`${carttotalquantity} items`;


document.querySelectorAll('.js-delete-link').forEach((link)=>{
   link.addEventListener('click',()=>{
   const productId=link.dataset.productId;
   removeFromCart(productId);

   const container=document.querySelector(
    `.js-cart-item-container-${productId}`
  );
container.remove();
const quantityAfterDelete=carttotalquantity-=1
     document.querySelector('.js-update-Checkout-Quantity').innerHTML=quantityAfterDelete
   });
});


document.querySelectorAll('.js-update-quantity').forEach((button)=>{
  const productId=button.dataset.productId;
   button.addEventListener('click',()=>{
      
    const container=document.querySelector(`.js-cart-item-container-${productId}`)

    container.classList.add('is-editing-quantity');
    

    
   })

   
 
})


document.querySelectorAll('.save-quantity-link').forEach((link)=>{
  const productId=link.dataset.productId;
 link.addEventListener('click',()=>{
 

  const inputValue=document.querySelector(`.js-quantity-input-${productId}`);

   const newQuantity=Number(inputValue.value);
   
    
   if(newQuantity<=0 || newQuantity>=1000){
    alert("quantity should be greater and less than 1000");
    return;
   }
   updateQuantity(productId,newQuantity);

  
   const container=document.querySelector(`.js-cart-item-container-${productId}`)

   container.classList.remove('is-editing-quantity')

  inputValue.value='';

 })
})


  



