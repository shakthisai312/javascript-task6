function displayMenu() {
    console.log("=== VENDING MACHINE MENU ===");
    console.log("1. Lays - $2");
    console.log("2. Monster - $3");
    console.log("3. Redbull - $1");
    console.log("4. Chocobar - $2");
    console.log("5. Brownie - $4");
    console.log("============================");
}

function calculateChange(price, amount) {
    return amount - price;
}

function finishPurchase(itemName, itemNumber) {
    for (let i = 3; i >= 1; i--) {
        console.log("Dispensing in... " + i);
    }
    alert(itemName + " is ready! Enjoy!");

    console.log("Pattern for Item " + itemNumber + ":");
    for (let row = 1; row <= itemNumber; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            line += col + " ";
        }
        console.log(line);
    }
}

function startMachine() {
    let runAgain = true;

    while (runAgain) {
        displayMenu();

        let itemInput = prompt("Enter the item number (1-5):");
        let itemNumber = Number(itemInput);

        if (isNaN(itemNumber) || itemNumber < 1 || itemNumber > 5) {
            alert("Invalid item number! Please enter a number between 1 and 5.");
            continue;
        }

        let moneyInput = prompt("Enter the amount of money you have:");
        let money = Number(moneyInput);

        if (isNaN(money) || money < 0) {
            alert("Invalid amount! Please enter a valid positive number.");
            continue;
        }

        let price = 0;
        let itemName = "";

        if (itemNumber === 1) {
            price = 2;
            itemName = "Lays";
        } else if (itemNumber === 2) {
            price = 3;
            itemName = "Monster";
        } else if (itemNumber === 3) {
            price = 1;
            itemName = "Redbull";
        } else if (itemNumber === 4) {
            price = 2;
            itemName = "Chocobar";
        } else if (itemNumber === 5) {
            price = 4;
            itemName = "Brownie";
        }

        if (money < price) {
            alert("Insufficient balance! " + itemName + " costs $" + price + ", but you only have $" + money + ".");
        } else if (money === price) {
            alert("You selected: " + itemName + "\nChange returned: $0");
            finishPurchase(itemName, itemNumber);
        } else {
            let change = calculateChange(price, money);
            alert("You selected: " + itemName + "\nChange returned: $" + change);
            finishPurchase(itemName, itemNumber);
        }

        runAgain = confirm("Do you want to make another purchase?");
    }

    alert("Thank you for using the Smart Vending Machine. Goodbye!");
    console.log("Thank you for using the Smart Vending Machine. Goodbye!");
}

startMachine();

