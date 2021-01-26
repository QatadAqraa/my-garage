'use strict'

var name = document.getElementById("carsName");
var img = document.createElement('img');
var carCategory = document.getElementById("modelCategory");
var carYear = document.getElementById("modelYear");
var arrayOfCars = [];

console.log(arrayOfCars);

function Car(name, img, carCategory, carYear){
    this.name=name;
    this.img='Images/'+name.src;
    this.carCategory=carCategory;
    this.carYear =carYear;
    arrayOfCars.push(this.arrayOfCars);
}

var bmw = new Car ("BMW")
