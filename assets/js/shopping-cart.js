document.getElementById("productOneQuantityIncrease").addEventListener('click', function() {
    productOneQuantity( true );
});

document.getElementById("productOneQuantityDecrease").addEventListener('click', function() {
    productOneQuantity(false);
});


function productOneQuantity( isIncrease ) {
    let productOneQuantityField = document.getElementById("productOneQuantity");
    let productOneQuantityNumber = parseInt( document.getElementById("productOneQuantity").value );
    if ( isIncrease ) {
        productOneQuantityField.value = productOneQuantityNumber + 1;
    } else {
        if ( productOneQuantityNumber > 0 ) {
            productOneQuantityField.value = productOneQuantityNumber - 1;
        }
    }
}