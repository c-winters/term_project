(function($){
    $.fn.menuPlugin = function() {
        return this.each(function() {
            var div = $("div.mPlug");
            div.css('margin', '1em auto')
               .css('padding', '1px');
            var list = $("ul.mPlug");
            list.css('text-align', 'center')
                .css('margin', 'auto')
                .css('padding', '1px');
            var listItems = $("li.mPlug");
            listItems.css('display', 'inline-block');
            var buttons = $("li button.mPlug");
            buttons.css('font-family', 'Montserrat, helvetica, sans-serif')
                   .css('font-weight', 'bold')
                   .css('text-decoration', 'none')
                   .css('font-size', '1.2em')
                   .css('background-color', '#c5d5e0ed')
                   .css('color', 'white')
                   .css('width', '12em')
                   .css('height', '3em')
                   .css('padding', 'auto')
                   .css('margin', 'auto')
                   .css('border-style', 'solid')
                   .css('border-width', '0.15em')
                   .css('border-color', '#4C4C4C')
                   .css('text-shadow', '0px 0px 10px #000000');
            buttons.mouseover(function() {
                $(this).css('background-color', 'rgba(183, 198, 209, 0.705)')
                       .css('text-transform', 'uppercase')
                       .css('text-shadow', '0px 0px 10px #000000')
                       .css('border-radius', '0.25em');
            });
            buttons.mouseout(function() {
                $(this).css('background-color', '#c5d5e0ed')
                       .css('text-shadow', 'none')
                       .css('text-transform', 'capitalize')
                       .css('text-shadow', '0px 0px 10px #000000')
                       .css('border-radius', '0.05em');
            });
        });
    }
})(jQuery);