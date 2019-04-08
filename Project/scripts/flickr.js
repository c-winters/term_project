
var getFlickr = function(searchTags){
    // flickr api url with json callback
    var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    // use getJSON, with 
    $.getJSON(flickrApiUrl, {
        id: "147817942@N03",
        tags: searchTags,
        tagmode: "any",
        format : "json"
    }).done(function(data) {
        var html = "";
        var col = 1;
        html += "<div class=\"container\">";
        $(data.items).each(function(index, element) {
            if(col == 1){
                html += "<div class=\"row\">";
            }
            html += "<div class=\"col-md-3 mb-3\">" +
                        "<div class=\"card\" id=\"product-card\">" +
                            "<div class=\"card-body\">" +
                                "<img id=\"flickr-img\" src=\"" + element.media.m + "\">" +
                            "</div>" +
                        "</div>" +
                    "</div>";
            if(col == 4){
                html += "</div>";
                col = 0;
            }
            col++;
        });
        html += "</div>";
        $("#flickr-pics").append(html);
    }).fail(function() {
        alert("Ajax call failed");
    });    
}

$(document).ready(function() {
    // get the menuPlugin going
    $("ul.mPlug").menuPlugin({ }); 
    // use our getFlickr function to fill the page with all tags
    getFlickr("spice, tea, coffee, oil");
    // listens for mPlug button clicks
    $("button.mPlug").click(function() {
        // empty the flickr-pics div in preparation for new images
        $("div#flickr-pics").empty();
        // use getFlickr function, pass this button's "tags" attribute to it
        getFlickr(this.getAttribute('tags'));
    });  
});

