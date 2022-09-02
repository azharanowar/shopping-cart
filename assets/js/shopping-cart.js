document.getElementById("productOneQuantityIncrease").addEventListener('click', function() {
    const productQuantityFieldId = "productOneQuantity";
    const productPriceId = "productOnePrice";
    const productCurrentQuantity = productQuantityUpdate( true, productQuantityFieldId );
    productPriceUpdate( 1250, productCurrentQuantity, productPriceId );
});

document.getElementById("productOneQuantityDecrease").addEventListener('click', function() {
    const productQuantityFieldId = "productOneQuantity";
    const productPriceId = "productOnePrice";
    const productCurrentQuantity = productQuantityUpdate( false, productQuantityFieldId );
    productPriceUpdate( 1250, productCurrentQuantity, productPriceId );
});


document.getElementById("removeProductOne").addEventListener('click', function() {
    const productOne = document.getElementById("productOne");
    productOne.parentNode.removeChild(productOne);
    subtotalPriceUpdate();
    taxOfTotalPriceUpdate();
    totalPriceUpdate();
});


document.getElementById("productTwoQuantityIncrease").addEventListener('click', function() {
    const productQuantityFieldId = "productTwoQuantity";
    const productPriceId = "productTwoPrice";
    const productCurrentQuantity = productQuantityUpdate( true, productQuantityFieldId );
    productPriceUpdate( 50, productCurrentQuantity, productPriceId );
});

document.getElementById("productTwoQuantityDecrease").addEventListener('click', function() {
    const productQuantityFieldId = "productTwoQuantity";
    const productPriceId = "productTwoPrice";
    const productCurrentQuantity = productQuantityUpdate( false, productQuantityFieldId );
    productPriceUpdate( 50, productCurrentQuantity, productPriceId );
});


document.getElementById("removeProductTwo").addEventListener('click', function() {
    const productOne = document.getElementById("productTwo");
    productOne.parentNode.removeChild(productOne);
    subtotalPriceUpdate();
    taxOfTotalPriceUpdate();
    totalPriceUpdate();
});