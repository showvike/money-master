document.getElementById("btn-cal").addEventListener("click", function () {
    const totalIncome = parseFloat(document.getElementById("total-income").value);
    const foodExpense = parseFloat(document.getElementById("food-expense").value);
    const rentExpense = parseFloat(document.getElementById("rent-expense").value);
    const clothesExpense = parseFloat(document.getElementById("clothes-expense").value);

    const totalExpense = foodExpense + rentExpense + clothesExpense;
    document.getElementById("total-expense").innerText = totalExpense;

    const balance = totalIncome - totalExpense;
    document.getElementById("balance").innerText = balance;
});
