var Messenger = function(el){
  'use strict';
  var m = this;
  
  m.init = function(){
    m.codeletters = "&#*+%?£@§$harisubmeypn";
    m.message = 0;
    m.current_length = 0;
    m.fadeBuffer = false;
    m.messages = [
      'Hello World!',
      'My name is Hari Meyyappan.',
      'Im a full Stack Developer.',
      'Welcome to my website.'
    ];
    
    setTimeout(m.animateIn, 100);
  };
  
  m.generateRandomString = function(length){
    var random_text = '';
    while(random_text.length < length){
      random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
    } 
    
    return random_text;
  };
  
  m.animateIn = function(){
    if(m.current_length < m.messages[m.message].length){
      m.current_length = m.current_length + 2;
      if(m.current_length > m.messages[m.message].length) {
        m.current_length = m.messages[m.message].length;
      }
      
      var message = m.generateRandomString(m.current_length);
      $(el).html(message);
      
      setTimeout(m.animateIn, 20);
    } else { 
      setTimeout(m.animateFadeBuffer, 20);
    }
  };
  
  m.animateFadeBuffer = function(){
    if(m.fadeBuffer === false){
      m.fadeBuffer = [];
      for(var i = 0; i < m.messages[m.message].length; i++){
        m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
      }
    }
    
    var do_cycles = false;
    var message = ''; 
    
    for(var i = 0; i < m.fadeBuffer.length; i++){
      var fader = m.fadeBuffer[i];
      if(fader.c > 0){
        do_cycles = true;
        fader.c--;
        message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
      } else {
        message += fader.l;
      }
    }
    
    $(el).html(message);
    
    if(do_cycles === true){
      setTimeout(m.animateFadeBuffer, 50);
    } else {
      setTimeout(m.cycleText, 2000);
    }
  };
  
  m.cycleText = function(){
    m.message = m.message + 1;
    if(m.message >= m.messages.length){
      m.message = 0;
    }
    
    m.current_length = 0;
    m.fadeBuffer = false;
    $(el).html('');
    
    setTimeout(m.animateIn, 200);
  };
  
  m.init();
}

console.clear();
var messenger = new Messenger($('#messenger'));


function ML_AI() {
  
    document.getElementById("Speaking").style.display = 'none';
    document.getElementById("Algorithms").style.display = 'none';
    document.getElementById("WebDev").style.display = 'none';
    document.getElementById("Marketing").style.display = 'none';
    document.getElementById("SystemsThinking").style.display = 'none';
    document.getElementById("25Skills").style.display = 'none';
    document.getElementById("DataScience").style.display = 'none'
    var x = document.getElementById("ML_AI");
    x.style.display = (x.style.display == 'none' || x.style.display == '') ? 'block' : 'none';
}

function DataScience() {
  document.getElementById("ML_AI").style.display = 'none';
    document.getElementById("Speaking").style.display = 'none';
    document.getElementById("Algorithms").style.display = 'none';
    document.getElementById("WebDev").style.display = 'none';
    document.getElementById("Marketing").style.display = 'none';
    document.getElementById("SystemsThinking").style.display = 'none';
    document.getElementById("25Skills").style.display = 'none';
    var x = document.getElementById("DataScience");
    x.style.display = (x.style.display == 'none' || x.style.display == '') ? 'block' : 'none';
}

function Algo() {
    document.getElementById("Speaking").style.display = 'none';
    document.getElementById("ML_AI").style.display = 'none';
    document.getElementById("WebDev").style.display = 'none';
    document.getElementById("Marketing").style.display = 'none';
    document.getElementById("SystemsThinking").style.display = 'none';
    document.getElementById("25Skills").style.display = 'none';
    document.getElementById("DataScience").style.display = 'none'
    var x = document.getElementById("Algorithms");
    x.style.display = (x.style.display == 'none' || x.style.display == '') ? 'block' : 'none';
}


function Webdev() {
    document.getElementById("Speaking").style.display = 'none';
    document.getElementById("Algorithms").style.display = 'none';
    document.getElementById("ML_AI").style.display = 'none';
    document.getElementById("Marketing").style.display = 'none';
    document.getElementById("SystemsThinking").style.display = 'none';
    document.getElementById("25Skills").style.display = 'none';
    document.getElementById("DataScience").style.display = 'none'
    var x = document.getElementById("WebDev");
    x.style.display = (x.style.display == 'none' || x.style.display == '') ? 'block' : 'none';
}

function Marketing() {
  
    document.getElementById("Speaking").style.display = 'none';
    document.getElementById("Algorithms").style.display = 'none';
    document.getElementById("WebDev").style.display = 'none';
    document.getElementById("ML_AI").style.display = 'none';
    document.getElementById("SystemsThinking").style.display = 'none';
    document.getElementById("25Skills").style.display = 'none';
    document.getElementById("DataScience").style.display = 'none'
    var x = document.getElementById("Marketing");
    x.style.display = (x.style.display == 'none' || x.style.display == '') ? 'block' : 'none';
}

function Speaking() {
  
    document.getElementById("ML_AI").style.display = 'none';
    document.getElementById("Algorithms").style.display = 'none';
    document.getElementById("WebDev").style.display = 'none';
    document.getElementById("Marketing").style.display = 'none';
    document.getElementById("SystemsThinking").style.display = 'none';
    document.getElementById("25Skills").style.display = 'none';
    document.getElementById("DataScience").style.display = 'none'
    var x = document.getElementById("Speaking");
    x.style.display = (x.style.display == 'none' || x.style.display == '') ? 'block' : 'none';
}

function Systems() {
  
    document.getElementById("Speaking").style.display = 'none';
    document.getElementById("Algorithms").style.display = 'none';
    document.getElementById("WebDev").style.display = 'none';
    document.getElementById("Marketing").style.display = 'none';
    document.getElementById("ML_AI").style.display = 'none';
    document.getElementById("25Skills").style.display = 'none';
    document.getElementById("DataScience").style.display = 'none'
    var x = document.getElementById("SystemsThinking");
    x.style.display = (x.style.display == 'none' || x.style.display == '') ? 'block' : 'none';
}

function tfskills() {
  
    document.getElementById("Speaking").style.display = 'none';
    document.getElementById("Algorithms").style.display = 'none';
    document.getElementById("WebDev").style.display = 'none';
    document.getElementById("Marketing").style.display = 'none';
    document.getElementById("SystemsThinking").style.display = 'none';
    document.getElementById("ML_AI").style.display = 'none';
    document.getElementById("DataScience").style.display = 'none'
    var x = document.getElementById("25Skills");
    x.style.display = (x.style.display == 'none' || x.style.display == '') ? 'block' : 'none';
}

