let mobiles = [
    {
        id: 1,
        name: "iPhone 16",
        price: 50000,
        quantity: 5
    },
    {
        id: 2,
        name: "Samsung S25",
        price: 40000,
        quantity: 8
    }
];

function displayMobiles() {
    const table = document.getElementById("mobileTable");

    table.innerHTML = "";

    mobiles.forEach(function (mobile) {
        table.innerHTML += `
            <tr>
                <td>${mobile.id}</td>
                <td>${mobile.name}</td>
                <td>${mobile.price}</td>
                <td>${mobile.quantity}</td>
                <td>
                    <button onclick="updateMobile(${mobile.id})">Update</button>
                    <button onclick="deleteMobile(${mobile.id})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function addMobile() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const quantity = document.getElementById("quantity").value;

    if (name === "" || price === "" || quantity === "") {
        alert("Please enter all data");
        return;
    }

    const newMobile = {
        id: mobiles.length + 1,
        name: name,
        price: Number(price),
        quantity: Number(quantity)
    };

    mobiles.push(newMobile);

    clearInputs();
    displayMobiles();
}

function deleteMobile(id) {
    mobiles = mobiles.filter(function (mobile) {
        return mobile.id !== id;
    });

    displayMobiles();
}

function updateMobile(id) {
    const mobile = mobiles.find(function (mobile) {
        return mobile.id === id;
    });

    const newName = prompt("Enter new mobile name", mobile.name);
    const newPrice = prompt("Enter new price", mobile.price);
    const newQuantity = prompt("Enter new quantity", mobile.quantity);

    if (newName !== null && newPrice !== null && newQuantity !== null) {
        mobile.name = newName;
        mobile.price = Number(newPrice);
        mobile.quantity = Number(newQuantity);

        displayMobiles();
    }
}

function clearInputs() {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
}

displayMobiles();