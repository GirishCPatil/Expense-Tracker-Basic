let expAmt = document.getElementById("expAmt");
let expDesc = document.getElementById("desc");
let expCat = document.getElementById("cat");
let addExpBtn = document.getElementById("addExpBtn");


addExpBtn.addEventListener("click", addExpense);

function addExpense(e) {
    e.preventDefault();
    let amount = expAmt.value;
    let description = expDesc.value;
    let category = expCat.value;  
    let li = document.createElement("li");
    li.innerHTML = `${amount} - ${description} - ${category}   <button onclick="deleteExpense(this)">Delete Expense</button> <button onclick="editExpense(this)">Edit Expense</button>`;
     document.getElementById("expenseList").appendChild(li);
    expAmt.value = "";
    expDesc.value = "";
    expCat.value = "";
}

function deleteExpense(button) {
    let li = button.parentElement;
    li.remove();
}   

function editExpense(button) {
    let li = button.parentElement;
    let [amount, description, category] = li.firstChild.textContent.split(" - ");
    expAmt.value = amount;
    expDesc.value = description;
    expCat.value = category;
    li.remove();
}
