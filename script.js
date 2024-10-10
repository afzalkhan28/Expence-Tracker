let expenses = [];

function addExpense() {
    const expenseNameInput = document.getElementById('expense-name');
    const expenseAmountInput = document.getElementById('expense-amount');
    
    const expenseName = expenseNameInput.value.trim();
    const expenseAmount = parseFloat(expenseAmountInput.value.trim());

    if (!expenseName || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter valid details.');
        return;
    }

    const expense = {
        name: expenseName,
        amount: expenseAmount
    };

    expenses.push(expense);
    updateExpenseList();
    updateTotalExpense();

    expenseNameInput.value = '';
    expenseAmountInput.value = '';
}

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const listItem = document.createElement('li');
        listItem.textContent = `${expense.name}: Rs ${expense.amount.toFixed(2)}`;
        expenseList.appendChild(listItem);
    });
}

function updateTotalExpense() {
    const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById('total-expense').textContent = totalExpense.toFixed(2);
}
