// event listener calls fx 1 when the submit button is pressed
document.getElementById('order').addEventListener('submit', outerMain);
// event listeners 
document.getElementById("color1").addEventListener("change", updateImage);
document.getElementById("color2").addEventListener("change", updateImage);
document.getElementById("color3").addEventListener("change", updateImage);
document.getElementById("color4").addEventListener("change", updateImage);
// function for img src change
function updateImage(event) {
    // stores which item type dropdown
    const colorDropdownId = event.target.id;
    // stores the dropdown value
    const selectedColor = event.target.value;
    // selects dropdown by item type
    if (colorDropdownId === "color1") {
        let newImageSrc1;
        // stores new src based on dropdown selection
        if (selectedColor === "gray") {
            newImageSrc1 = "images/crewgray.jpg";
        } else if (selectedColor === "black") {
            newImageSrc1 = "images/crewblack.jpg";
        } else if (selectedColor === "red") {
            newImageSrc1 = "images/crewred.jpg";
        } else {
            newImageSrc1 = "images/crew.jpg";
        }
        // updates the src
        document.getElementById("crewImage").src = newImageSrc1;
    } else if (colorDropdownId === "color2") {
        let newImageSrc2;
        if (selectedColor === "gray") {
            newImageSrc2 = "images/vneckgray.jpg";
        } else if (selectedColor === "black") {
            newImageSrc2 = "images/vneckblack.jpg";
        } else if (selectedColor === "red") {
            newImageSrc2 = "images/vneckred.jpg";
        } else {
            newImageSrc2 = "images/vneck.jpg";
        }
        document.getElementById("veeImage").src = newImageSrc2;
    } else if (colorDropdownId === "color3") {
        let newImageSrc3;
        if (selectedColor === "gray") {
            newImageSrc3 = "images/sweatergray.jpg";
        } else if (selectedColor === "black") {
            newImageSrc3 = "images/sweaterblack.jpg";
        } else if (selectedColor === "red") {
            newImageSrc3 = "images/sweaterred.jpg";
        } else {
            newImageSrc3 = "images/sweater.jpg";
        }
        document.getElementById("swtrImage").src = newImageSrc3;
    } else if (colorDropdownId === "color4") {
        let newImageSrc4;
        if (selectedColor === "gray") {
            newImageSrc4 = "images/hoodiegray.jpg";
        } else if (selectedColor === "black") {
            newImageSrc4 = "images/hoodieblack.jpg";
        } else if (selectedColor === "red") {
            newImageSrc4 = "images/hoodiered.jpg";
        } else {
            newImageSrc4 = "images/hoodie.jpg";
        }
        document.getElementById("hoodieImage").src = newImageSrc4;
    }
}
// function 1 pass arg for submit button press
function outerMain(event) {
    // prevent default behavior on load
    event.preventDefault();
    // call the second function to validate the form is complete and store the value in validated
    var validated = validateForm();
    // evaluate and move to the calc fx call
    if (validated === true) {
        // recieve total from fx and store in the total var
        var total = calculateTotal(total);
        //  declare vars for the order   
        // print contact details for the customer    
        document.getElementById("oname").innerHTML = ("Customer name is: " + document.getElementById('name').value);
        document.getElementById("oemail").innerHTML = ("Email: " + document.getElementById('email').value);
        document.getElementById("oaddy").innerHTML = ("Address: \n" + document.getElementById('address').value);
        document.getElementById("ocity").innerHTML = (document.getElementById('city').value + ", " +
            document.getElementById('state').value + ". " + document.getElementById('zip').value);
        document.getElementById("ophone").innerHTML = ("Phone number: " + document.getElementById('phone').value);
        document.getElementById("ototal").innerHTML = ("Your total is: $" + total.toFixed(2));
    }
}
// fx 2 called from fx1
function validateForm() {
    // will be reused for taxes and validation
    var state = document.getElementById('state');
    // vars that store boolean vals if checked or not
    var crew = document.getElementById('crew').checked;
    var vneck = document.getElementById('vee').checked;
    var sweater = document.getElementById('swtr').checked;
    var hoodie = document.getElementById('hoodie').checked;
    // validate state is selected
    if (state.value === 'CS') {
        alert('Please choose your shipping state.');
        state.focus();
    } else {
        // validate item to order is checked
        if (crew === false && vneck === false && sweater === false && hoodie === false) {
            alert('Please select an item to purchase.');
            document.getElementById('item').focus();
        } else {
            return true;
        }
    }
}
// fx3 called ffrom fx1
function calculateTotal(total) {
    var state = document.getElementById('state');
    // vars that store boolean vals if checked or not
    var crew = document.getElementById('crew').checked;
    var vneck = document.getElementById('vee').checked;
    var sweater = document.getElementById('swtr').checked;
    var hoodie = document.getElementById('hoodie').checked;
    var qty1 = 0;
    var qty2 = 0;
    var qty3 = 0;
    var qty4 = 0;
    var tax, shipping, total, subTotal;
    const RATE = 0.0825;
    //  grab values and store in vars
    if (crew === true) {
        var item1 = parseInt(document.getElementById('crew').value, 10) || 0;
        qty1 = parseInt(document.getElementById("qty1").value, 10) || 0;
    } else {
        item1 = 0;
    }
    if (vneck === true) {
        var item2 = parseInt(document.getElementById('vee').value, 10) || 0;
        qty2 = parseInt(document.getElementById("qty2").value, 10) || 0;
    } else {
        item2 = 0;
    }
    if (sweater === true) {
        var item3 = parseInt(document.getElementById('swtr').value, 10) || 0;
        qty3 = parseInt(document.getElementById("qty3").value, 10) || 0;
    } else {
        item3 = 0;
    }
    if (hoodie === true) {
        var item4 = parseInt(document.getElementById('hoodie').value, 10) || 0;
        qty4 = parseInt(document.getElementById("qty4").value, 10) || 0;
    } else {
        item4 = 0;
    }
    // stores item qty's, sz's and colors in array
    var clr1 = document.getElementById("color1").value;
    var clr2 = document.getElementById("color2").value;
    var clr3 = document.getElementById("color3").value;
    var clr4 = document.getElementById("color4").value;

    var sz1 = document.getElementById("size1").value;
    var sz2 = document.getElementById("size2").value;
    var sz3 = document.getElementById("size3").value;
    var sz4 = document.getElementById("size4").value;

    var items = [];
    //  grab values and store in array
    if (crew === true) {
        items.push(qty1, " ", sz1, " ", clr1, " Crew Neck Tshirts @ $", item1, ".00, ");
    }
    if (vneck === true) {
        items.push(qty2, " ", sz2, " ", clr2, " V Neck Tshirts @ $", item2, ".00, ");
    }
    if (sweater === true) {
        items.push(qty3, " ", sz3, " ", clr3, " Sweaters @ $", item3, ".00, ");
    }
    if (hoodie === true) {
        items.push(qty4, " ", sz4, " ", clr4, " Hoodies @ $", item4, ".00, ");
    }
    // print items ordered to receipt from array loop
    let orders = "";
    for (i = 0; i < items.length; i++) {
        orders += items[i];
        document.getElementById("oColorQtyType").innerHTML = (orders);
    }

    // adds up the subtotal 
    subTotal = ((item1 * qty1) + (item2 * qty2) + (item3 * qty3) + (item4 * qty4));
    // calcs tax
    if (state.value === 'TX') {
        tax = parseInt(subTotal) * RATE;
    } else {
        tax = 0;
    }
    // switch case for shipping
    var shippingCO = document.querySelector('input[name = ship]:checked').value;
    switch (shippingCO) {
        case 'usps':
            shipping = 10;
            break;
        case 'fedex':
            shipping = 7;
            break;
        default:
            shipping = 0;
            break;
    }
    // print some values to receipt
    document.getElementById("sub").innerHTML = ("Sub Total: $" + subTotal.toFixed(2));
    document.getElementById("tax").innerHTML = ("Taxes: $" + tax.toFixed(2));
    document.getElementById("ship").innerHTML = ("Shipping: $" + shipping.toFixed(2))
    total = subTotal + tax + shipping;

    return total;
} 