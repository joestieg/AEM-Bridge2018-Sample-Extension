/**
 * It's not possible to use an event handler in a JSX file in the extensions folder that 
 * can communicate with the javascript running in the CEP extension. As a workaround,
 * the Adobe Bridge team recommends placing the JSX with event handler in the startup folder.
 * Launch Bridge-> Go to Edit->Preferences -> Statup Scripts -> Reveal my Startup Scripts. 
 * It opens the startup script folder. 
 */


if(xLib == undefined){
  var xLib = new ExternalObject("lib:\PlugPlugExternalObject");
}

if(xmpLib == undefined){
        if( Folder.fs == "Windows" ){
            var pathToLib = Folder.startup.fsName + "/AdobeXMPScript.dll";
        }else{
            var pathToLib = Folder.startup.fsName + "/AdobeXMPScript.framework";
        }
        var libfile = new File( pathToLib );
        var xmpLib = new ExternalObject("lib:" + pathToLib );
}

dispatchCepEvent = function (in_eventType, in_message) {
   
    if (xLib) {
        var eventObj = new CSXSEvent();
        eventObj.type = in_eventType;
        eventObj.data = in_message;
        eventObj.dispatch();
    }
}

onSelectedThumb = function(event){
   
    if(event.object instanceof Document && event.type == "selectionsChanged") {

            dispatchCepEvent("cep.extendscript.event.mySelection", "");
    }
}


app.eventHandlers.push({handler: onSelectedThumb});


