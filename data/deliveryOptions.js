export const deliveryOptions=
[{
  id:'1',
  deleveryDays:7,
  priceCents:0
},
{
  id:'2',
  deleveryDays:3,
  priceCents:499
},
{
  id:'3',
  deleveryDays:1,
  priceCents:999
}]


export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

    deliveryOptions.forEach((option)=>{
      if (option.id===deliveryOptionId)
        deliveryOption=option;
    });

    return deliveryOption;
}


function isweekend(date){
  const dayOfWeek= date.format('dddd');
  return dayOfWeek==='Saturday' || dayOfWeek==='Sunday';
}

export function calculateDeliveryDate(deliveryOption){
   let remainingDays=deliveryOption.deliveryDays;
   let deliveryDate=dayjs();

   while (remainingDays>0){
   deliveryDate= deliveryDate.add(1,'days');

   if(!isweekend(deliveryDate)){
    remainingDays--;
   }
   }
   const dateString=deliveryDate.format('dddd, MMMM D')

   return dateString;
}
