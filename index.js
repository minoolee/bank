"use strict";
// Bank Project
//Bank class
/* public abstract class Account {} */
class Bank {
    constructor(name, members, postfach) {
        this.name = name;
        this.members = members;
        this.postfach = postfach;
    }
    register(newMember) {
        this.members.push(newMember);
    }
    login(memberName, memberAccoutNum, memberPassword) {
        const member = this.members.find((member) => member.name === memberName && member.accountNum === memberAccoutNum && member.password === memberPassword);
        if (member) {
            console.log(`Welcome ${memberName} \n Account balance: ${member.balance} \n Transfer \n postfach :`);
            return member;
        }
        else {
            console.log("Not found the member");
            console.log(`Do you want to try it again? or register`);
            return null;
        }
    }
    startPage() {
        console.log(`Welcome to ${this.name} your Bank`);
        console.log(`Login or register ?`);
    }
    deposit(memberIBN, memberBLZ, memberAccoutNum, amount) {
        const member = this.members.find((member) => member.IBAN === memberIBN && member.accountNum == memberAccoutNum && member.BLZ == memberBLZ);
        if (member) {
            member.balance += amount;
            console.log(`${amount}$ has been added in your bank account`);
            return member.balance; // return new balance
        }
        else {
            console.log('Please check your information');
        }
    }
}
const bank1 = new Bank('Banco de Portugal', [], []);
const same = {
    name: "Same Harvi",
    IBAN: "PT507",
    BLZ: 2345,
    accountNum: 4534,
    dateOfExpire: 11 / 22,
    password: "mi23",
    balance: 2000,
};
bank1.register(same);
const member = bank1.login("Same Harvi", 4534, "mi23");
if (member) {
    console.log(`Current balance: ${member.balance}`);
}
const balance = bank1.deposit("PT507", 2345, 4534, 657);
if (balance !== null) {
    console.log(`New balance: ${balance}`);
}
