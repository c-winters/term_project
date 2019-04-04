// execute this function when the document is ready
$(document).ready(function() {
    // get our json file and execute this function
    $.getJSON("products.json", function(data){
        // for each object in our json file (there is only one and its an array)
        $.each(data, function() {
            // initiate columns and html string
            var columns = 1;    // column counter so we know when to start or end a row
            var html = "";      // html string that will be appended to #products div
            // start the container div for the bootstrap grid
            html += "<div class=\"container\">";
            // for each object in the object we are currently messing with (the json object array)
            $.each(this, function(key, value){
                var p = value;  // p for product to make our life easier
                // if columns is 1 we are at the start of a new row
                if(columns == 1){
                    // open the row div
                    html += "<div class=\"row\">";
                }
                // add the current product as a bootstrap card inside a bootstrap column
                html += (
                    "<div class=\"col-md-4 mb-3\">" +
                        "<div class=\"card\" id=\"product-card\">" +
                            "<div class=\"card-body\">" +
                                "<h5>" + p.name + "</h5><br>" +
                                "Category: " + p.category + "<br>" +
                                "Stock ID: #" + p.stockNumber + "<br>" +
                                "Quantity on hand: " + p.quantityOnHand + "kg<br>" +
                                "Price per gram: $" + p.price +
                            "</div>" +
                        "</div>" +
                    "</div>"
                );
                // if columns is 3 we are at the end of a row
                if(columns == 3){
                    // end the row div
                    html += "</div>";
                    // reset columns (will start at 1 again after increment)
                    columns = 0;
                }
                // increment columns
                columns++;
            });
            // close container div
            html += "</div>";
            // append our html string to the element with id products
            $("#products").append(html);
        });
    });
});
