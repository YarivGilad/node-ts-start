import log from '@ajar/marker';
import {Alian} from './space.js';

const { TODAY } = process.env;

let msg: string = "hello";

function saySomething(something:string):void{
    log.yellow('today\'s message is:',something); 
    const ET = new Alian();
    log.magenta('today is:',TODAY); 
}

saySomething(msg);