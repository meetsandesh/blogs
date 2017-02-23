(function ( $ ) {
    //all of your plugins go here
    $.fn.myPlugin = function(options){
        this.settings = $.extend({
            //these settings are the defaults, you can override them while applying the plugin
            text: 'Hello World',
            defaultColor: '#568923',
            defaultBgColor: '#AA56BB'
        }, options );
        var attributes=this.settings;
        var element=$(this);
        this.methods={
            _bindContent: function(){
                var htmlContent=    '<div id="myPlugin_content">'+
                                        '<div id="myPlugin_text" style="color: '+attributes.defaultColor+'; background-color: '+attributes.defaultBgColor+'">'+
                                            attributes.text+
                                        '</div>'+
                                        '<input type="checkbox" id="myPlugin_italics" name="myPlugin_italics">Show in Italics<br>'+
                                        '<button id="myPlugin_colour">Change Text Colour</button>'+
                                        '<button id="myPlugin_bg_colour">Change Background Colour</button>'+
                                    '</div>';
                element.html(htmlContent);
            },
            _bindActions: function(){
                element.find('#myPlugin_colour').on("click",function(){
                    var nextColor=listOfMethods._generateRandomColor();
                    element.find('#myPlugin_text').css('color',nextColor);
                });
                element.find('#myPlugin_bg_colour').on("click",function(){
                    var nextBgColor=listOfMethods._generateRandomColor();
                    element.find('#myPlugin_text').css('background-color',nextBgColor);
                });
                element.find('#myPlugin_italics').on("change",function(){
                    var htmlContent=attributes.text;
                    if(this.checked){
                        var htmlContent='<em>'+attributes.text+'</em>';
                    }
                    element.find('#myPlugin_text').html(htmlContent);
                });
            },
            _generateRandomColor: function() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            },
            _init: function(){
                listOfMethods._bindContent();
                listOfMethods._bindActions();
            }
        };
        var listOfMethods=this.methods;
        listOfMethods._init();
        return this;
    };
}( jQuery ));