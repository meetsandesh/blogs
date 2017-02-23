---
layout: post
title: Programming on Codingame!
---

Hello, there!

If you are seaching for tutorials of how to create custom plugins using jQuery, you have arrived at the right place. If you have little knowledge of javascript and/or jQuery, then you must realise that it is a raw power just like C language and almost anything can be achieved using javascript. Today I am going to show you how to create plugin using jQuery. Lets begin our journey.

First start writing as show below -

```javascript
(function ( $ ) {
    //all of your plugins go here
}( jQuery ));
```

This way of defining plugins is called **Immediately Invoked Function Expression**. There's a reason why i chose this style, the prominent one is that sometimes few javascript codes are written using *$* otation and sometimes using *jQuery* notation. Hence to make sure your code work with other pluings and still using the *$* notation. Here, we are passing **_jQuery_** to the function and naming it **_$_**.

![Tricky Business](https://meetsandesh.github.io/blog/images/tricky.jpg "Tricky, Huh?")

Now, lets name our plugin. Let it be _myPlugin_ . So our code looks like below -

```javascript
(function ( $ ) {
    //all of your plugins go here
    $.fn.myPlugin = function(options){
    
    };
}( jQuery ));
```

Now, lets talk about providing customization to the user (_the developers who will use your plugin_). Assume that you are generating a static _Hello World_ without using any styling, then it will work for those who are not concerned with styling; but for those who want _Hello World_ to printed in **Red* color and in **Italics** then your plugin is a waste for them. So, remember this, alsways create a plugins which is highly customizable from outside which we call settings.

So our new code looks like below - 

```javascript
(function ( $ ) {
    //all of your plugins go here
    $.fn.myPlugin = function(options){
        this.settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
    };
}( jQuery ));
```