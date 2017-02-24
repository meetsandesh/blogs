---
layout: post
title: Creating custom plugin using jQuery!
---

Hi, everyone! If you are seaching for tutorials of how to create custom plugins using jQuery, you have arrived at the right place. If you have little knowledge of javascript and/or jQuery, then you must realise that it is a raw power just like C language and almost anything can be achieved using javascript. Today I am going to show you how to create plugin using jQuery. Lets begin our journey.

First start writing as show below -

```javascript
(function ( $ ) {
    //all of your plugins go here
}( jQuery ));
```

This way of defining plugins is called **Immediately Invoked Function Expression**. There's a reason why i chose this style, the prominent one is that sometimes few javascript codes are written using *$* otation and sometimes using *jQuery* notation. Hence to make sure your code work with other pluings and still using the *$* notation. Here, we are passing **_jQuery_** to the function and naming it **_$_**.

![Tricky Business](https://meetsandesh.github.io/blogs/images/tricky.jpg "Tricky, Huh?")

Now, lets name our plugin. Let it be _myPlugin_ . So our code looks like below -

```javascript
(function ( $ ) {
    //all of your plugins go here
    $.fn.myPlugin = function(options){
    
    };
}( jQuery ));
```

Now, lets set the goal of the plugin. Well, if you are creating a plugin then it must do something. So our plugin will print _Hello World_ and will contain two buttons with following jobs - 

* change text color
* change backgound color
and a checkbox which will
* toggle italics


Lets talk about providing customization to the user (_the developers who will use your plugin_). Assume that you are generating a static _Hello World_ without using any styling, then it will work for those who are not concerned with styling; but for those who want _Hello World_ to printed in **Red** color and in **Italics** then your plugin is a waste for them. So, remember this, always create a plugins which is highly customizable from outside which we call settings.

So our new code looks like below - 

```javascript
(function ( $ ) {
    //all of your plugins go here
    $.fn.myPlugin = function(options){
        this.settings = $.extend({
            //these settings are the defaults, you can override them while applying the plugin
            text: 'Hello World',
            defaultColor: '#230067',
            defaultBgColor: '#556b2f'
        }, options );
    };
}( jQuery ));
```

Here, I have written **this.settings** this is to make sure that **settings** is available outside of the plugin. Now, lets create initialization function.

```javascript
(function ( $ ) {
    //all of your plugins go here
    $.fn.myPlugin = function(options){
        this.settings = $.extend({
            //these settings are the defaults, you can override them while applying the plugin
            text: 'Hello World',
            defaultColor: '#230067',
            defaultBgColor: '#556b2f'
        }, options );
        var attributes=this.settings;
        var element=$(this);
        this.methods={
            _init: function(){
            
            }
        };
        var listOfMethods=this.methods;
        listOfMethods._init();
        return this;
    };
}( jQuery ));
```

Few things to notice here -
* **this.methods** is used again to make this variable available outside of the plugin.
* before **return** statement, **listOfMethods._init();** is written in order to initialize the plugin before returning.
* **return** statement is written in order to make chaining available after _program control_ has returned from the plugin. 
* **element** variable gives the div/element of HTML on which your plugin is being applied. 

Now, lets create content -

```javascript
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
            _init: function(){
                listOfMethods._bindContent();
            }
        };
        var listOfMethods=this.methods;
        listOfMethods._init();
        return this;
    };
}( jQuery ));
```

As you can see, we created **bindContent()** function and pasted the required content in the DOM.

Now, if you press any button/ check or uncheck a text box, nothing will happen; so, lets bind functionality with them.

```javascript
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
                    //code for changing text color
                });
                element.find('#myPlugin_bg_colour').on("click",function(){
                    //code for changing background 
                });
                element.find('#myPlugin_italics').on("change",function(){
                    //code for italcis effect
                });
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
```

Here, I have created **_bindActions()** function in order to bind fnctionalities in the plugin, and used it after binding the html client.

Lets create another function to generate random colors in **_#rrggbb_** format and name it **_generateRandomColor()**.

So, Final Code will look like as follows -
```javascript
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
                    //code for changing text color
                    var nextColor=listOfMethods._generateRandomColor();
                    element.find('#myPlugin_text').css('color',nextColor);
                });
                element.find('#myPlugin_bg_colour').on("click",function(){
                    //code for changing background 
                    var nextBgColor=listOfMethods._generateRandomColor();
                    element.find('#myPlugin_text').css('background-color',nextBgColor);
                });
                element.find('#myPlugin_italics').on("change",function(){
                    //code for italcis effect
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
```

And to use it -

```HTML
<html>
    <body>
        <div id="applyPlugin"></div>
        <script>
            $('#applyPlugin').myPlugin();
        </script>
    </body>
</html>
```

The above snippet will show _Hello World_ with default text colors and background colors. But if you want to change default settings, then you can override it as follows -

```HTML
<html>
    <body>
        <div id="applyPlugin"></div>
        <script>
            $('#applyPlugin').myPlugin({
                text: 'Hello, there!', //Or your custom text
                defaultColor: '#230067', //your custom color
                defaultBgColor: '#556b2f' //your custom background color
            });
        </script>
    </body>
</html>
```

I have created working [example](https://meetsandesh.github.io/blogs/staticPages/Creating-custom-plugin-using-jQuery-example/plugin-using-jQuery-example.html) for your reference.

Thank you, and stay tuned for new tutorials.

Bye!!!
