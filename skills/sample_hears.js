/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

var wordfilter = require("wordfilter");

module.exports = function(controller) {

    /* Collect some very simple runtime stats for use in the uptime/debug command */
    var stats = {
        triggers: 0,
        convos: 0,
    };

    controller.on('heard_trigger', function() {
        stats.triggers++;
    });

    controller.on('conversationStarted', function() {
        stats.convos++;
    });


    controller.hears(['^uptime','^debug'], 'direct_message,direct_mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {
            if (!err) {
                convo.setVar('uptime', formatUptime(process.uptime()));
                convo.setVar('convos', stats.convos);
                convo.setVar('triggers', stats.triggers);

                convo.say('My main process has been online for {{vars.uptime}}. Since booting, I have heard {{vars.triggers}} triggers, and conducted {{vars.convos}} conversations.');
                convo.activate();
            }
        });

    });

    controller.hears(['^say (.*)','^say'], 'direct_message,direct_mention', function(bot, message) {
        if (message.match[1]) {

            if (!wordfilter.blacklisted(message.match[1])) {
                bot.reply(message, message.match[1]);
            } else {
                bot.reply(message, '_sigh_');
            }
        } else {
            bot.reply(message, 'I will repeat whatever you say.')
        }
    });
  
  
  //fonction for the code pasted//
    /**
            _     _                 _      
          | |   | |               | |     
  __ _  __| | __| |   ___ ___   __| | ___ 
 / _` |/ _` |/ _` |  / __/ _ \ / _` |/ _ \
| (_| | (_| | (_| | | (_| (_) | (_| |  __/
 \__,_|\__,_|\__,_|  \___\___/ \__,_|\___|
                                          
     */
  
  
  
  
  
  
    //our lib RD = reading 
    function RDVar(coding) {
        //programming array
        var jsPastedCode = ['let','var','function','if','else'];
        var pyPastedCode = ['elif', 'import', 'module','def'];
        var cssPastedcode = ['text-align','border-color','webkitConvertPointFromNodeToPage','text-decoration','font-size'];
        var htmlPastedCode = ['<h1>','<h2>','<p>','<html>','<div>','<a>','<section>'];

        if (coding = jsPastedCode) {
            coding = "this is JavaScript";
            jsPastedCode = "Your code looks fine";
        }
        if (coding = pyPastedCode) {
            coding = 'this is Python';
            pyPastedCode = 'this is a challenged programming langage !';
        }

        if (coding = cssPastedcode) {
            coding = 'this is Styling , CSS';
            cssPastedcode = " Mastering styling give you nice design power";

        }

        if (coding = htmlPastedCode) {
            coding = 'this is HTML code , the code to make website';
            htmlPastedCode = 'your code looks good !';

        }

         coding = parseInt("code");
         return coding;
  
  
  
    }
  
   var typeOfCode = {
        JavaScript: "Javascript",
        Python: "Python",
        CSS: "CSS",
        //HTML: "HTML",

       
    }
  
  
  //trouver l'erreur sur le fonction ERR
  
    controller.hears(['^code'],'direct_message,direct_mention',function(bot, message){
        //create convo
            bot.createConversation(message, function(convo){
              
                
                    //setting variable and other stuff...
                    //convo.setVar('code', RDVar(process.coding()));
                  
                  
                    convo.setVar('code', RDVar(process.coding()));
                    convo.setVar('convos', typeOfCode.convos);
                    //convo.setVar('triggers', typeOfCode.triggers);
                  

                    convo.say('you pasted {{vars.code}}');
                    convo.activate();
                
            })
    

})
  
  
  
  
  


    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* Utility function to format uptime */
    function formatUptime(uptime) {
        var unit = 'second';
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'minute';
        }
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'hour';
        }
        if (uptime != 1) {
            unit = unit + 's';
        }

        uptime = parseInt(uptime) + ' ' + unit;
        return uptime;
    }
  


};
