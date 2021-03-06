 /**
  * Artyom commands examples. Just add this file after artyom is loaded in your document.
  * You can save all your commands in this file or simply follow the workflow :
  *
  * @copyright Carlos Delgado 2017
  * @author Carlos Delgado - www.ourcodeworld.com
  * @param {type} window
  * @see https://sdkcarlos.github.io/sites/artyom.html
  * @returns Artyom
  */
(function(window){
    'use strict';

    /**
     * Example Artyom Commands
     * @type Array
     */
    var artyomCommands = [
        //Simple Command Example
        {
            indexes: ['hello'],
            action : function(i){
                artyom.say("Hello, how are you? My name is Artyom.",{
                    onStart: function(){
                        console.log("Speaking presentation");
                    },
                    onEnd: function(){
                        console.log("All that i've to say has been said.");
                    }
                });
            }
        },
        //Smart Command Example
        {
            indexes: ['pronunciate * please'],
            smart:true,
            action : function(i,wildcard,recognized_text){
                console.log("Recognized : " + recognized_text,"Wildcard : "+wildcard);
                artyom.say(wildcard);
            }
        }
        //Continue adding your own commands here
    ];

    artyom.addCommands(artyomCommands);

    /**
     * Or use the shorter and cleaner method :
     */

    artyom.on(['Good morning']).then(function(i){
        artyom.say("Good morning ! How are you?");
    });

    artyom.on(['Clean the panel']).then(() => {
        $("#log-panel").empty();
    });

    artyom.on(['Repeat after me *'] , true).then(function(i, wildcard){
        artyom.say(wildcard);
    });

    // Matches "regular expressions" case insensitive
    artyom.on([/regular expressions/i], true).then(function(){
        artyom.say("The usage of regular expressions is allowed in the smart commands");
    });

    console.log(artyom.getAvailableCommands());
})(window);
