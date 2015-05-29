export function Backrest() {
    console.log('Factory Backrest Function');
    return function(){
        console.log('Inner Backrest Function');
    };
}

