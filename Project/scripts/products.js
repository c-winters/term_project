$(document).ready(function() {
    var products;
    $.getJSON("products.json", function(data){
        $.each(data, function() {
            $.each(this, function(key, value){
                var p = value;
                $("#products").append(
                    "<div class=\"card\" id=\"product-card\">" +
                        "<div class=\"card-body\">" +
                            "Name: " + p.name + "<br>" +
                            "Category: " + p.category + "<br>" +
                            "Stock ID: #" + p.stockNumber + "<br>" +
                            "Quantity on hand: " + p.quantityOnHand + "kg<br>" +
                            "Price: $" + p.price +
                        "</div>" +
                    "</div>"
                )
            });
            products = data.Products;
            //console.log(products);
        });
    });
});
