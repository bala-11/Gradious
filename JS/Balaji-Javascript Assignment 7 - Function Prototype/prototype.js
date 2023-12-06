function Card(cardNumber,cardName,cardHolder,cardBalance,cardType){
    this.cardName = cardName;
    this.cardHolder = cardHolder;
    this.cardNumber = cardNumber;
    this.cardBalance = cardBalance;
    this.cardType = cardType;
}



Card.prototype.makePayment = function(amount){
    this.amount = amount;
    if(this.cardBalance >= amount){
        console.log(`You have debited ${amount} in your account ${this.cardNumber} at ${new Date()}`);
        this.cardBalance -= amount;
    }
    else{
        console.log(`Insufficient Balance`+"\n");
        this.cardBalance -= amount;
    }
};

Card.prototype.displayDetails = function(){
    console.log(`Card Name : ${this.cardName}`);
    console.log(`Card Type : ${this.cardType}`);
    console.log(`Card Holder : ${this.cardHolder}`);
    console.log(`Card number : ${this.cardNumber}`);
    let previousBalance = this.cardBalance  + this.amount;
    console.log(`Previous Balance : ${previousBalance}`);
    console.log(`Available balance :${this.cardBalance}`+"\n");
};


function creditCard(cardName,cardHolder,cardNumber,cardBalance,cardType){
    Card.call(this,cardName,cardHolder,cardNumber,cardBalance,cardType);
}

creditCard.prototype = Object.create(Card.prototype);
creditCard.prototype.constructor = creditCard;



function debitCard(cardName,cardHolder,cardNumber,cardBalance,cardType){
    Card.call(this,cardName,cardHolder,cardNumber,cardBalance,cardType);
}

debitCard.prototype = Object.create(Card.prototype);
debitCard.prototype.constructor = debitCard;


const credit =  new creditCard(23454598,"Visa","Balaji",130000,"CREDIT CARD");
credit.makePayment(5000);
if(credit.cardBalance >= 0){
    credit.displayDetails();
}



const debit = new debitCard(233243535,"Master","Balaji",5000,"DEBIT CARD");
debit.makePayment(1000);

if(debit.cardBalance >= 0){
    debit.displayDetails();
}
