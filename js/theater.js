const ticket =  20;
const childSeniorTicket = 10;
const timeDiscount = 3;
function buyTicket() {
    const age = prompt("What is your age?");
    let cost = getBaseTicketCost(age);
    const isMatinee = prompt("Are you attending a matineee show?");
    if((isMatinee.toLocaleLowerCase() === 'yes') || (isMatinee.toLocaleLowerCase() === 'y')){
        cost -= timeDiscount;
    }
    alert(`Your ticket will cost: ${cost}`);
}
function getBaseTicketCost(age){
    if ((age >= 65) || (age <= 12)) {
        return childSeniorTicket;
    } else return ticket;
}


/* 
Blow is my first attempt without the instructions

const ticket = 20;
const ticketReduced = 10;
function buyTicket() {
    let price = getBaseTicketCost();
    const time = prompt("What time would you like to purchase? Morning - Evening - Matinee");
    if(time.toLocaleLowerCase() === 'matinee'){
        price -= 3;
    } 
    alert(`Your ticket price is ${price}.`);
}
function getBaseTicketCost() {
    const age = parseInt(prompt("What is your age?"));
    if (age < 12 || age > 65){
        return ticketReduced;
    } else {
        return ticket;
    }
}

*/