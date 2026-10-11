let again;

do {
    let num = Number(prompt("Enter a number:"));

    if (num < 1 || !Number.isInteger(num)) {
        alert("Please enter a positive whole number.");
    } else {
        let result;

        if (num % 2 == 0) {
            result = "Even";
        } else {
            result = "Odd";
        }

        function table(n) {
            console.log("Multiplication Table:");
            for (let i = 1; i <= 10; i++) {
                console.log(n + " x " + i + " = " + (n * i));
            }
        }

        table(num);

        let sum = 0;

        for (let i = 1; i <= num; i++) {
            sum = sum + i;
        }

        console.log("Sum = " + sum);

        if (num % 2 == 0) {
            console.log("Square Pattern:");

            for (let i = 1; i <= num; i++) {
                let row = "";

                for (let j = 1; j <= num; j++) {
                    row = row + "* ";
                }

                console.log(row);
            }
        } else {
            console.log("Triangle Pattern:");

            for (let i = 1; i <= num; i++) {
                let row = "";

                for (let j = 1; j <= i; j++) {
                    row = row + "* ";
                }

                console.log(row);
            }
        }

        alert("Number is " + result + "\nSum = " + sum);
    }

    again = confirm("Do you want to run again?");

} while (again);

