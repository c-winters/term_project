$(document).ready(function() {
    $.getJSON("products.json", function(data){
        $.each(data, function() {
            var products = data.Products;
            console.log(products);
        });
    });
});
