class Vehicle {
  constructor(
    private model: string,
    private year: number,
    private brand: string
  ) {}
}

class Car extends Vehicle {
  private doors: number

  constructor (model: string,
    year: number,
    brand: string,
    doors: number) {
    super(model, year, brand)
    this.doors = doors
  }
}

class Motocycle extends Vehicle {
  wheels: number
  passengers: number

  constructor(model: string, year: number, brand: string, passengers: number) {
    super(model, year, brand)
    this.wheels = 2
    this.passengers = passengers
  }
}

export {Car, Motocycle}