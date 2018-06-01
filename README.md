# AEM-Bridge2018-Sample-Extension
It's not possible to use an event handler in a JSX file in the extensions folder that can communicate with the javascript running in the CEP extension. As a workaround,
the Adobe Bridge team recommends placing the JSX with event handler in the startup folder. (i.e. C:\Users\USERNAME\AppData\Roaming\Adobe\Bridge CC 2018\Startup Scripts)

Put this event handler call in your main.js file to call function.

 //Begin event handler call from JSX to trigger populate    
    csInterface.addEventListener("cep.extendscript.event.mySelection", function() {
    csInterface.evalScript( 'sendObjToHTML()', function(result) {       
                var data= result;
                populate('#metadata', $.parseJSON(data)); 
            });
        });    
 //End event handler call from JSX to trigger populate
