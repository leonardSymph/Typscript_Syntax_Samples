// class ArrayOfNumbers {
//   constructor(public collection: number[]){}

//   get(index:number): number{
//     return this.collection[index]
//   }
// }

// class ArrayOfStrings {
//   collection: string[];
//   constructor(stringArray: string[]){
//     this.collection = stringArray;
//   }

//   get(index:number):string {
//     return this.collection[index]
//   }
// }

// // generics
// class ArrayOfAnything<T>{
//   constructor(public collection:T[]){}

//   get(index:number): T{
//     return this.collection[index]
//   }
// }

// // type inference
// const arr = new ArrayOfAnything(['a','b', 'c']);

// // Example of generics with functions
// function printStrings(arr: string[]): void{
//   for(let i = 0; i < arr.length; i++ ){
//     console.log(arr[i])
//   }
// }

// function printNumbers(arr: number[]): void{
//   for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//   }
// }

// function printAnything<T>(arr: T[]): void{
//   for(let i = 0; i<arr.length; i++){
//     console.log(arr[i])
//   }
// }

// printAnything<string>(['a','b','c']);
// // type inference
// printAnything([1,2,3])

// // Generic Contraints

// class Car {
//   print():void{
//     console.log("I am a car");
//   }
// }

// class House {
//   print():void{
//     console.log("I am a house");
//   }
// }

// interface Printable {
//   print():void
// }

// function printHousesOrCars<T extends Printable>(arr: T[]){
//   for (let i = 0; i < length; i++) {
//     arr[i].print();
//   }
// }

// printHousesOrCars<House>([new House(), new Car()]);
// printHousesOrCars<Car>([new Car(), new Car()])
