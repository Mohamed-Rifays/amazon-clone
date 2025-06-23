class Car{
  brand;
  model;
  speed;
  isTrunkOpen;

  constructor(brand , model, speed, isTrunkOpen){
    this.brand=brand;
    this.model=model;
    this.speed=speed;
    this.isTrunkOpen=isTrunkOpen;
  }

  displayInfo(){
     return `${this.brand} ${this.model} ${this.speed} km/hr  ${this.isTrunkOpen}`
  }

  go(){
    if(this.isTrunkOpen === 'close'){
         if(this.speed>0 && this.speed<200 ){
      return `${this.speed+=5} km/hr`
    }
        else{
          return 'max reached'
    }
    
    
    }
    else{
      return 'trunk is open'
    }
   
  }

  brake(){
    return `${this.speed-=5} km/hr`
  }

  openTrunk(){
   if (!this.speed>0){
    return 'wont work if the car is moving'
   }
   else{
    if(this.isTrunkOpen === 'open'){
      return 'True'
    }
    else{
      return 'False'
    }
   }
  }

  closeTrunk(){
   if(this.isTrunkOpen === 'open'){
    return 'True'
   }
   else{
    return 'False'
   }
  }
}

class RaceCar extends Car{
  acceleration;
}


const prop = new Car('Toyota','Corolla',2,'open');
const prop1=new Car('Tesla','Model 3',20,'closed');

console.log(prop);
console.log(prop1);
console.log(prop.displayInfo());
console.log(prop1.displayInfo());
console.log(prop.go())
console.log(prop1.go())
console.log(prop.brake());
console.log(prop1.brake());
console.log(prop.displayInfo());
console.log(prop1.displayInfo());