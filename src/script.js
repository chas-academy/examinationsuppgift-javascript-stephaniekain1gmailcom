const descInput = document.getElementById("desc")
const amountInput = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const balance = document.getElementById("balance")

let currentBalance = 0

function addIncome(){
    const description = descInput.value
    const amount = Number(amountInput.value)

    if (description === "" || amountInput.value === "") {
        return 
    }

    if (isNaN(amount)) {
        return 
    }

    const li = document.createElement("li")
    li.innerHTML = `${description} - ${amount} kr (Inkomst)`

    incomeList.appendChild(li)

    currentBalance = currentBalance + amount

    balance.innerHTML = currentBalance

    descInput.value = ""
    amountInput.value = ""
}

incomeBtn.addEventListener("click", () => {
    addIncome()
})

function addExpense(){
    const description = descInput.value
    const amount = Number(amountInput.value)

    if (description === "" || amountInput.value === "") {
        return 
    }

    if (isNaN(amount)) {
        return 
    }

    const li = document.createElement("li")
    li.innerHTML = `${description} - ${amount} kr (Utgift)`

    expenseList.appendChild(li)

    currentBalance = currentBalance - amount

    balance.innerHTML = currentBalance

    descInput.value = ""
    amountInput.value = ""
}

expenseBtn.addEventListener("click", () => {
    addExpense()
})