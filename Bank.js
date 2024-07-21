function Bank(){
    let balance = 5000; // private variable

    return{
        getBalance(otp){
            if(otp==5589)
            {
                console.log("Your bank account balance is ",balance);
            }
            else{
                console.log("Wrong user!");
            }
            
        },

        deposit(otp, amount){
            if(otp==12345){
                balance+=amount;
                console.log("You have successfully deposited ", amount);
                console.log("Your current balance is ", balance);
            }
            else{
                console.log("Wrong user!");
            }
            

        },
        withdraw(otp, amount){
            if(otp==654321){
                balance-=amount;
                console.log("You balance has been dabeted to your account successfully Rs.", amount);
                console.log("Your current balance is ", balance);
            }
            else{
                console.log("Wrong user!");
            }
            

        }
    }
}

let account = new Bank();

account.getBalance(5589);
account.deposit(12345,1000);
account.withdraw(654321,1000);
account.getBalance();


