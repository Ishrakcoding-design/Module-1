// bank app part 3

let balance = Number(localStorage.getItem("balance")) || 0;

let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];


let wrongAttempts = 0;





// ELEMENTS

const balanceText =
    document.getElementById("balance");

const transactionList =
    document.getElementById("transactionList");







// UPDATE BALANCE

function updateBalance() {


    balanceText.innerHTML =
        "Rs." + balance;


    localStorage.setItem(
        "balance",
        balance
    );


}








// ADD TRANSACTION

function addTransaction(type, amount, category) {



    let transaction = {


        id:
            "TXN" + Math.floor(Math.random() * 100000),


        type: type,


        category: category,


        amount: amount,


        status: "Successful",


        date:
            new Date().toLocaleDateString()



    };



    transactions.push(transaction);



    localStorage.setItem(

        "transactions",

        JSON.stringify(transactions)

    );



    showTransactions();



}








// SHOW TRANSACTIONS


function showTransactions() {



    transactionList.innerHTML = "";



    transactions.forEach(function (t) {



        transactionList.innerHTML += `


<tr>


<td>
${t.id}
</td>


<td>
${t.category}
</td>


<td>
Rs.${t.amount}
</td>


<td>
${t.status}
</td>


<td>
${t.date}
</td>



</tr>


`;



    });



}









// DEPOSIT


document
    .getElementById("depositBtn")
    .onclick = function () {



        let amount =
            Number(document.getElementById("amount").value);



        if (amount > 0) {



            balance += amount;



            updateBalance();



            addTransaction(

                "Credit",

                amount,

                "Income"

            );



            alert("Money Deposited");


        }



    };









// WITHDRAW


document
    .getElementById("withdrawBtn")
    .onclick = function () {



        let amount =
            Number(document.getElementById("amount").value);



        if (amount <= balance && amount > 0) {



            balance -= amount;


            updateBalance();



            addTransaction(

                "Debit",

                amount,

                "Shopping"

            );



            alert("Money Withdrawn");


        }

        else {


            alert("Insufficient Balance");


        }


    };










// TRANSFER


document
    .getElementById("transferBtn")
    .onclick = function () {



        let amount =
            Number(document.getElementById("amount").value);



        if (amount <= balance) {


            balance -= amount;


            updateBalance();



            addTransaction(

                "Transfer",

                amount,

                "Transfer"

            );



            alert("Money Transferred");


        }

        else {


            alert("Not enough balance");


        }


    };









// HIDE SHOW BALANCE


document
    .getElementById("hideBalanceBtn")
    .onclick = function () {


        if (balanceText.style.display === "none") {


            balanceText.style.display = "block";


        }

        else {


            balanceText.style.display = "none";


        }


    };









// LOGIN SYSTEM


document
    .getElementById("loginBtn")
    .onclick = function () {



        if (wrongAttempts >= 3) {


            document.getElementById("securityStatus")
                .innerHTML =
                "Account Locked";


            return;


        }




        let pin =
            document.getElementById("pin").value;



        if (pin === "1234") {


            alert("Login Successful");


            wrongAttempts = 0;


        }

        else {


            wrongAttempts++;


            alert(
                "Wrong PIN Attempts: " +
                wrongAttempts
            );



        }



    };









// LOGOUT


document
    .getElementById("logoutBtn")
    .onclick = function () {


        alert("Logged out successfully");


    };









// DARK MODE


document
    .getElementById("darkModeBtn")
    .onclick = function () {


        document.body.classList.toggle("dark");


    };









// SEARCH TRANSACTION


document
    .getElementById("searchTransaction")
    .onkeyup = function () {



        let value =
            this.value.toLowerCase();



        let rows =
            document.querySelectorAll("#transactionList tr");



        rows.forEach(function (row) {



            row.style.display =

                row.innerText
                    .toLowerCase()
                    .includes(value)

                    ? ""

                    : "none";



        });


    };









// DOWNLOAD STATEMENT


document
    .getElementById("downloadStatement")
    .onclick = function () {


        let data =
            JSON.stringify(
                transactions,
                null,
                2
            );



        let file =
            new Blob(
                [data],
                {
                    type: "application/json"
                }
            );



        let link =
            document.createElement("a");


        link.href =
            URL.createObjectURL(file);


        link.download =
            "statement.json";


        link.click();


    };









// CREATE ACCOUNT


document
    .getElementById("createAccount")
    .onclick = function () {


        let number =
            Math.floor(
                Math.random() * 9000000000
            ) + 1000000000;



        document
            .getElementById("accountNumber")
            .innerHTML =
            number;



        alert(
            "New Account Created"
        );


    };








// CHART JS


new Chart(

    document.getElementById("expenseChart"),


    {


        type: "doughnut",


        data: {


            labels: [

                "Income",

                "Expense"

            ],


            datasets: [{


                data: [

                    balance,

                    1000

                ]


            }]


        }



    }

);










// START


updateBalance();


showTransactions();