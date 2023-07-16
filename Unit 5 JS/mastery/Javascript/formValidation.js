// event listener calls fx 1 when the submit button is pressed
document.getElementById('order').addEventListener('submit', outerMain);
// function 1
function outerMain(event) {
    // prevent default behavior on load
    event.preventDefault();
    // call the second function to validate the form is complete and store the value in validated
    var validated = validateForm();
    // evaluate and move to the calc fx call
    if (validated === true) {
        // recieve total from fx and store in the total var
        var total = calculateTotal();
        //  declare vars for the order   
        // print contact details for the customer    
        console.log("Customer name is: " + document.getElementById('name').value);
        console.log("Email: " + document.getElementById('email').value);
        console.log("Address: \n" + document.getElementById('address').value + "\n" +
            document.getElementById('city').value + ", " + document.getElementById('state').value + ". " +
            document.getElementById('zip').value);
        console.log("Phone number: " + document.getElementById('phone').value);
        console.log("Your total is: $" + total.toFixed(2));
    }
}
// fx 2 called from fx1
function validateForm() {
    // will be reused for taxes and validation
    var state = document.getElementById('state');
    // vars that store boolean vals if checked or not
    var hat = document.getElementById('hat').checked;
    var mug = document.getElementById('mug').checked;
    var koozie = document.getElementById('koozie').checked;
    // validate state is selected
    if (state.value === 'CS') {
        alert('Please choose your shipping state.');
        state.focus();
    } else {
        // validate item to order is checked
        if (hat === false && mug === false && koozie === false) {
            alert('Please select an item to purchase.');
            document.getElementById('item').focus();
        } else {
            return true;
        }
    }
}
// fx3 called ffrom fx1
function calculateTotal() {
    var state = document.getElementById('state');
    // vars that store boolean vals if checked or not
    var hat = document.getElementById('hat').checked;
    var mug = document.getElementById('mug').checked;
    var koozie = document.getElementById('koozie').checked;
    var tax, shipping, total, subTotal;

    if (hat === true) {
        var item1 = parseInt(document.getElementById('hat').value, 10) || 0;
    } else {
        item1 = 0;
    }
    if (mug === true) {
        var item2 = parseInt(document.getElementById('mug').value, 10) || 0;
    } else {
        item2 = 0;
    }
    if (koozie === true) {
        var item3 = parseInt(document.getElementById('koozie').value, 10) || 0;
    } else {
        item3 = 0;
    }
    // adds up the subtotal 
    subTotal = item1 + item2 + item3;
    // calcs tax
    if (state.value === 'TX') {
        tax = parseInt(subTotal) * 0.0825
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
    total = subTotal + tax + shipping;
    return total;
}





