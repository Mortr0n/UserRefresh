class User {
    constructor(userName, email) {
        this.userName =  userName;
        this.email = email;
        this.accountBalance = 0;
    }

    makeDeposit(amount) {
        this.accountBalance += amount;
    }

    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }

    displayBalance() {
        console.log(this.userName + " has "  +"$"+ this.accountBalance + " in their account.");
    }

    transferMoney(user, amount) {
        this.accountBalance -= amount;
        user.accountBalance += amount;
    }

}

const chris = new User("Chris", "chris@mortr0n.com");
const misty = new User("Misty", "misty@mortr0n.com");
const jiraiya = new User("Jiraiya", "jiraiya@mortr0n.com");
chris.makeDeposit(400);
chris.makeDeposit(143);
chris.makeDeposit(500);
chris.makeWithdrawal(23);
chris.displayBalance();
misty.makeDeposit(900);
misty.makeDeposit(1900);
misty.makeWithdrawal(32);
misty.makeWithdrawal(329);
misty.displayBalance();
jiraiya.makeDeposit(10293);
jiraiya.makeDeposit(982);
jiraiya.makeWithdrawal(90);
jiraiya.makeWithdrawal(2);
jiraiya.makeWithdrawal(45);
jiraiya.displayBalance();
misty.transferMoney(chris, 200);
chris.displayBalance();
misty.displayBalance();
chris.transferMoney(jiraiya, 43);
jiraiya.displayBalance();
chris.displayBalance();