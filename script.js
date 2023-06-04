// fetching 
async function getMenu() {
    try {
        const response = await fetch("https://sandeep836.github.io/json/food.json");
        const menu = await response.json();
        return menu;
        // console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

// Function 2:
function takeOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const burgers = ['Cheeseburger', 'Veggie Burger', 'Chicken Burger'];
            const randomBurgers = [];
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * burgers.length);
                randomBurgers.push(burgers[randomIndex]);
            }
            const order = { burgers: randomBurgers };
            resolve(order);
        }, 2500);
    });
}

// Function 3:
function orderPrep() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

// Function 4:
function payOrder() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

// Function 5:
function thankyouFnc() {
    alert('Thank you for visiting us,Hope you enjoy it.');
}

// Display menu 
async function displayMenu() {
    const menuContainer = document.getElementById('menu-container');
    try {
        const menu = await getMenu();
        menu.forEach((item) => {
            const menuItem = document.createElement('div');
            menuItem.classList.add('menu-item');

            const itemName = document.createElement('h3');
            itemName.textContent = item.name;

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;

            const itemPrice = document.createElement('p');
            itemPrice.textContent = `Price: $${item.price}`;

            menuItem.appendChild(itemName);
            menuItem.appendChild(itemDescription);
            menuItem.appendChild(itemPrice);

            menuContainer.appendChild(menuItem);
        });
    } catch (error) {
        console.log('Error fetching menu:', error);
    }
}

// Start order process
async function ORDERNOW() {
    try {
        const order = await takeOrder();
        console.log('Take Order', order);

        const orderStatus = await orderPrep();
        console.log('Order Preparation', orderStatus);

        const paymentStatus = await payOrder();
        console.log('Pay Order', paymentStatus);

        if (paymentStatus.paid) {
            thankyouFnc();
            console.log('Step 4: Thank You');
        }
    } catch (error) {
        console.log('Error:', error);
    }
}

// Load menu 
window.onload = displayMenu;