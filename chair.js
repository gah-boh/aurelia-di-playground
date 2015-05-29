import {inject, Lazy} from 'aurelia-dependency-injection';
import {Legs} from './legs';
import {Seat} from './seat';

@inject(Legs, Lazy.of(Seat))
export class Chair {
    constructor(legs, getSeat) {
        console.log('Chair being constructed')
        legs.amountOfLegs();
        var seat = getSeat();
        seat.getRadius();
    }
}

