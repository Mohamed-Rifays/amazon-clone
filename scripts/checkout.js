import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/cart-class.js';
//import '../data/car.js'
//import '../data/backend-practice.js';
import { loadProducts, loadProductsFetch } from '../data/products.js';
import { loadCart } from '../data/cart.js';

async function loadPage(){
  
 try{
  //throw 'error 1';

  await loadProductsFetch();

  const value = await new Promise((resolve,reject)=>{
    //throw 'error 2
    loadCart(()=>{
      //reject('error 3')
      resolve('value 3');
    });
    
  });
 }

 catch (eroor) {
   console.log('unexpected error. Please Try Again Later.')
 }
  
  renderOrderSummary();
  renderPaymentSummary();

  
}
loadPage();


/*
Promise.all([
  loadProductsFetch(),
new Promise((resolve)=>{
    loadCart(()=>{
      resolve('value 2');
    });
    
  })

]).then((values)=>{
  console.log(values)
   renderOrderSummary();
   renderPaymentSummary();
});

/* 
new Promise((resolve)=>{
  loadProducts(()=>{ 
    resolve('value 1');
  });

}).then((value)=>{
  console.log(value)
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
    
  })
  
}).then(()=>{
   renderOrderSummary();
   renderPaymentSummary();
})
*/
/*
loadProducts(()=>{
  loadCart(()=>{
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/


