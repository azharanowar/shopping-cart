document.getElementById("productOneQuantityIncrease").addEventListener('click', function() {
    const productQuantityFieldId = "productOneQuantity";
    const productPriceId = "productOnePrice";
    const productCurrentQuantity = productQuantityUpdate( true, productQuantityFieldId );
    const productTotalPrice = productPriceUpdate( 1250, productCurrentQuantity, productPriceId );
    subtotalPriceUpdate();
});

document.getElementById("productOneQuantityDecrease").addEventListener('click', function() {
    const productQuantityFieldId = "productOneQuantity";
    const productPriceId = "productOnePrice";
    const productCurrentQuantity = productQuantityUpdate( false, productQuantityFieldId );
    productPriceUpdate( 1250, productCurrentQuantity, productPriceId );
    subtotalPriceUpdate();
});


document.getElementById("productTwoQuantityIncrease").addEventListener('click', function() {
    const productQuantityFieldId = "productTwoQuantity";
    const productPriceId = "productTwoPrice";
    const productCurrentQuantity = productQuantityUpdate( true, productQuantityFieldId );
    productPriceUpdate( 50, productCurrentQuantity, productPriceId );
    subtotalPriceUpdate();
});

document.getElementById("productTwoQuantityDecrease").addEventListener('click', function() {
    const productQuantityFieldId = "productTwoQuantity";
    const productPriceId = "productTwoPrice";
    const productCurrentQuantity = productQuantityUpdate( false, productQuantityFieldId );
    productPriceUpdate( 50, productCurrentQuantity, productPriceId );
    subtotalPriceUpdate();
});