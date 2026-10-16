//your code here
const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const addButton = document.getElementById("add-btn");
const cartItems = document.getElementById("cart-items");

let grandTotal = 0;

addButton.addEventListener("click", function () {
const itemName = nameInput.value.trim();
const itemPrice = Number(priceInput.value);


// Reject invalid input
if (
    itemName === "" ||
    priceInput.value.trim() === "" ||
    !Number.isFinite(itemPrice) ||
    itemPrice <= 0
) {
    alert("Please enter a valid item name and price.");
    return;
}

// Remove the initial total row when adding the first item
const totalElement = document.querySelector(
    '[data-ns-test="grandTotal"]'
);

if (totalElement) {
    totalElement.parentElement.remove();
}

// Create a new table row
const row = document.createElement("tr");

// Create the item name cell
const nameCell = document.createElement("td");
nameCell.setAttribute("data-ns-test", "item-name");
nameCell.textContent = itemName;

// Create the item price cell
const priceCell = document.createElement("td");
priceCell.setAttribute("data-ns-test", "item-price");
priceCell.textContent = itemPrice;

// Add cells to the row
row.appendChild(nameCell);
row.appendChild(priceCell);

// Add row to the table
cartItems.appendChild(row);

// Update grand total
grandTotal += itemPrice;

// Create the grand total row
const totalRow = document.createElement("tr");
const totalCell = document.createElement("td");

totalCell.colSpan = 2;
totalCell.setAttribute("data-ns-test", "grandTotal");
totalCell.textContent = grandTotal;

totalRow.appendChild(totalCell);
cartItems.appendChild(totalRow);

// Clear input fields
nameInput.value = "";
priceInput.value = "";


});
