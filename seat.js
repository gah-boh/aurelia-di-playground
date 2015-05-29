export class Seat {
    constructor() {
        console.log('Seat being constructed');
        this.radius = 10;
    }
    getRadius() {
        console.log(`I have a seat radius of ${this.radius}`);
    }
}

