1. Define a constructor function called Card with cardNumber, cardName, cardHolder, cardBalance, and cardType properties.
2. Add a method to the Card prototype called makePayment which deducts the given amount from the cardBalance property if it is less than or equal to the current balance and logs the transaction details.
3. Add a method to the Card prototype called displayDetails which logs the card details including previous balance, available balance, and transaction details.
4. Define a constructor function called creditCard which inherits from the Card constructor using call() and sets its own prototype to be an object created from the Card prototype.
5. Set the constructor property of the creditCard prototype to be the creditCard constructor itself.
6. Define a constructor function called debitCard which also inherits from the Card constructor using call() and sets its own prototype to be an object created from the Card prototype.
7. Set the constructor property of the debitCard prototype to be the debitCard constructor itself.
8. Create instances of both creditCard and debitCard.
9. Call the makePayment() method on both instances to deduct amounts from their respective balances.
10.Check if the balance is greater than or equal to 0 and call the displayDetails() method on both instances to log their respective card details.