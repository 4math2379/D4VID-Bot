module.exports = function(controller) {



controller.hears(['code'], 'direct_message,direct_mention', function(bot,message) {
  
    var askForLangage = function(err, convo) {
      convo.ask('What is your favorite programming langage ?', function(response, convo) {
        if (response.text == "python"){
        
        convo.say("WOW ! " + response.text  +   " is an awesome programming langage ! do you know what is a RaspBerry PI ?");
          
            raspInfo(response, convo);
            //convo.next()
          
            //askJob(response, convo);
            convo.next();
          
          
          
        
        }
                  
                  
          
         else if (response.text == "javascript") {
           convo.say("JavaScript is a programming language commonly used in web development... but you can programm many open source device with it , like the Arduino." )
           bot.reply(message,{text:'Arduino UNO', files:['https://s3-eu-west-1.amazonaws.com/sdz-upload/prod/upload/intro_cartearduino_sml.png']});
           askJob(response, convo);
            convo.next();
          } else {
            convo.say(response.text  +   " is an awesome programming langage !")
            bot.reply(message,{text: 'yes :)', markdown: '*Interesting langage :)*'});
            askJob(response, convo);
            convo.next();

          
        }
      
          
         
        
      });
    };
  
  //raspi info
  var raspInfo = function(response, convo){
        convo.say("the RaspBerry Pi is a micro computer, you got everything inside to learn how to programm this device and many of its extension ! This is the official web pages : https://www.raspberrypi.org/");
        askJob(response, convo);
        convo.next();
        
      }
  
  
  //cusutoming the reply I 
    var askJob = function(response, convo) {
        //put the respons.text +
      convo.ask('What is your level with this programming langage ?', function(response, convo) {
        
        if (response.text == "noob") {
          convo.say("don't say that :) trust your coding power !");
          askAfter(response, convo);
          convo.next;
          
        } else if (response.text =="pro") {
        convo.say('Really ? We will see that');
        askAfter(response, convo);
        convo.next();
        } else {
          convo.say("ok");
          askAfter(response, convo);
          convo.next;
        };
      });
    };
  
  
  
    var askAfter = function(response, convo) {
      convo.ask('In the future what job you wan\'t to do ?', function(response, convo) {
        convo.say('I wish you the best ! :)');
        convo.next();
      });
    };

    bot.startConversation(message, askForLangage);
});



}