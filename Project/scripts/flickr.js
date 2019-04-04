$(function() {
    var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne";

    $.getJSON(flickrApiUrl, {
        tags: "spice, spices, tea, coffee",
        tagmode: "all",
        format: "json"
    }).done(function(data) {
        console.log(data);
    }).fail(function() {
        alert("Ajax call failed");
    });
});