
const username1 = 'admin'
const username2 = 'user'
const password = '1234'

let username = prompt('Please enter your username.');
let pass = prompt('please Enter your password')

if((username ==username1|| username ==username2) && (pass == password)){
    alert('login succesfully✔️')
    let role = username
    let level 
    if (role=='admin'){
        level = 'high'
    }
    else if(role == 'user'){
        level = 'low'
    }
    alert(role+'   '+level)
    
    const Name = prompt('What is your name?')
    let age = prompt('How old are you?')
    const coffeeType = prompt(' coffee type :Espresso, Latte, Cappuccino')
    let quantity = prompt('How many cups do you want?')
    quantity = Number(quantity)
    age = Number(age)
    const espresso = 2.5
    const latte = 3.5
    const cappuccino = 4.0
    let total = 0
    const discount = 0.10
    let discountAmount =0
    let finalTotal = total
    if(coffeeType ==='Espresso'){
       total = quantity*espresso
    }else if(coffeeType === 'Latte'){
        total = quantity*latte
    }else if(coffeeType === 'Cappuccino'){
        total = quantity*cappuccino
    } else{
        alert('please fill correctly.')
    }

    if(age<18 || age>60) {
        
        discountAmount = total*discount;
        
    }
    finalTotal = total-discountAmount

        alert("Total: $" + total);
        alert("Discount: $" + discountAmount);
        alert("Final Total: $" + finalTotal);
    
const tipPercent = Number(prompt('Tip percentage (e.g., 0, 5, 10, 15):'));
const tipAmount = finalTotal * (tipPercent / 100);
const totalWithTip = finalTotal + tipAmount;

const peopleSplitting = Number(prompt('How many people are splitting the bill? (1, 2, or 3):'));
const amountPerPerson = totalWithTip / peopleSplitting;


alert(
  `Hello ${Name}!\n` +
  `You ordered ${quantity} ${coffeeType}(s).\n` +
  `Original total: $${total.toFixed(2)}\n` +
  `Discount: $${discountAmount.toFixed(2)}\n` +
  `Tip: $${tipAmount.toFixed(2)}\n` +
  `Total with Tip: $${totalWithTip.toFixed(2)}\n` +
  `Split between ${peopleSplitting} : ${amountPerPerson} each`
);


        
} else {
 alert('Invalid username or password⚠️')
}
