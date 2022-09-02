document.getElementById("productOneQuantityIncrease").addEventListener('click', function() {
    productOneQuantity( true );
});

document.getElementById("productOneQuantityDecrease").addEventListener('click', function() {
    productOneQuantity(false);
});


function productOneQuantity( isIncrease ) {
    let productOneQuantityNumber = parseInt( document.getElementById("productOneQuantityNumber").value );
    if ( isIncrease ) {
        document.getElementById("productOneQuantityNumber").value = productOneQuantityNumber + 1;
    } else {
        if ( productOneQuantityNumber > 0 ) {
            document.getElementById("productOneQuantityNumber").value = productOneQuantityNumber - 1;
        }
    }
}