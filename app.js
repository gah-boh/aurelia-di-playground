import {Container} from 'aurelia-dependency-injection';

import {Chair} from './chair';

var container = new Container()
var chair = container.get(Chair);

console.log('Gabo');

