$(document).ready(function() {
    $.getJSON("products.json", function(data){
        $.each(data, function() {
            var productsArray = data.Products;
            console.log(productsArray);
        });
    });
});
