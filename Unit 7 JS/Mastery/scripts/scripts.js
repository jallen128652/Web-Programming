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
function calculateTotal() {
    var state = document.getElementById('state');
    // vars that store boolean vals if checked or not
    var crew = document.getElementById('crew').checked;
    var vneck = document.getElementById('vee').checked;
    var sweater = document.getElementById('swtr').checked;
    var hoodie = document.getElementById('hoodie').checked;
    var tax, shipping, total, subTotal;

    if (crew === true) {
        var item1 = parseInt(document.getElementById('crew').value, 10) || 0;
    } else {
        item1 = 0;
    }
    if (vneck === true) {
        var item2 = parseInt(document.getElementById('vee').value, 10) || 0;
    } else {
        item2 = 0;
    }
    if (sweater === true) {
        var item3 = parseInt(document.getElementById('swtr').value, 10) || 0;
    } else {
        item3 = 0;
    }
    if (hoodie === true) {
        var item4 = parseInt(document.getElementById('hoodie').value, 10) || 0;
    } else {
        item4 = 0;
    }
    // adds up the subtotal 
    subTotal = item1 + item2 + item3 + item4;
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
// still need:
// array
// loop
// Try/Catch(Finally/Throw)
// Constant
// want:
// incorporate color drop down to change image 
// store order values in array and loop through the array to display order details for qty/type/color