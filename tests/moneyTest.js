import {formatCurrency} from '../scripts/utils/monney.js';

console.log("test suite: format currency")

console.log('converts cents into dollars')

if(formatCurrency(2095)==='20.95'){
  console.log('passed')
}
else{
  console.log('failed')
}


console.log('works wiht zero')

if(formatCurrency(0)==='0.00'){
  console.log('passed')
}
else{
  console.log("failed")
}

console.log("rounds up to the nearest cent")
if(formatCurrency(2000.5)==='20.01'){
  console.log("passed")
}
else{

  console.log("failed")
}


console.log("rounds up to the nearest cent")

if(formatCurrency(2000.4)==='20.00'){
  console.log("passed")
}
else{

  console.log("failed")
}