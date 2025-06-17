import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import {formatCurrency} from '../utils/monney.js'
export function renderPaymentSummary(){
let productPricecents=0;
let shippingPriceCents=0;
 let carttotalquantity=0;
   cart.forEach((cartItem)=>{
    const product= getProduct(cartItem.productId);
      productPricecents+=product.priceCents * cartItem.quantity;

      const deliveryOption=getDeliveryOption(cartItem.deliveryOptionId)
      shippingPriceCents+=deliveryOption.priceCents;
      carttotalquantity+=cartItem.quantity;
   });

    const totaBeforeTax=productPricecents+shippingPriceCents;
    const taxCents=totaBeforeTax * 0.1;
    const totalCents=totaBeforeTax+taxCents;

    const paymentSummaryHTML=`
         <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${carttotalquantity}):</div>
            <div class="payment-summary-money">
            $${formatCurrency(productPricecents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">
            $${formatCurrency(shippingPriceCents)}
            </div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">
            $${formatCurrency(totaBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">
            $${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">
            $${formatCurrency(totalCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
    `

    document.querySelector('.js-payment-summary').innerHTML=paymentSummaryHTML;
}