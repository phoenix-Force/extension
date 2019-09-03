var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var grammar = '#JSGF V1.0';
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();

speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function(event){
    var txt = event.results[0][0].transcript;
    popup(txt);
    //alert(txt);
    // let x = document.querySelectorAll("input[type=text]");
    // for(let i =0;i<x.length;i++){
    //         x[i].setAttribute('onclick',gn(x[i].getAttribute('id'),txt));
    //       }
                    // function gn(l,txt){
                    //     alert(txt)
                    //     // let z = this.id
                    //     let p = document.getElementById(l.id);
                    //     alert(l.id);
                    //     //p.setAttribute('value',txt);
                    //     // p.innerHTML =txt;
                    // }
    //document.getElementById("search").setAttribute("value", txt);
    //return txt;








}
recognition.onspeechend = function(){
    recognition.stop();
} ;
recognition.onerror = function(event){
    alert('error occurred '+event.error);
};
function strt(){
    recognition.start();

}

/*function readOutLoud(txt = document.getElementById("search").value) {
    var speech = new SpeechSynthesisUtterance();

    // Set the text and voice attributes.
    speech.text = txt;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
    }
    function stp(){
        document.getElementById('bstrt').style.display = 'none';
        alert('hello');

    }*/

    /*chrome.runtime.onMessage.addListener(gotmsg);
    function gotmsg(msg,sender,sendResponce){
        console.log(msg.txt);

    }*/





    


    // chrome.runtime.onMessage.addListener(
    //     function(request, sender, sendResponse) {
    //         var msgg =request.message; 
    //       if(  msgg === "start" ) {
    //        //start();
    //        console.log(msgg);
    //            }
    //         else if(msgg === "stop"){
    //             stp();
    //         }
    //         else {
    //             alert(msgg);
    //         }
    //     }
    //   );
    
     // function start(){


    //     strt();
    //     var rmsg = recognition.onresult();
    //     alert(rmsg);

    //     /*var port = chrome.runtime.connect({name: "ctob"});
    //      port.postMessage({cmd: "strt_recod"});
    //      port.onMessage.addListener(function(msg) {
    //          alert(msg.rc);
                 
    //      });*/
        




    //     /*chrome.runtime.sendMessage({msg_b: "strt_rcd"}, function(response) {
    //         alert("msg Sen to bck");
    //       });

    //         /*chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    //         var activeTab = tabs[0];
    //         chrome.tabs.sendMessage(activeTab.id, {"message": "strt_rcd"});
    //        });*/
    //   }
    //   function stp(){
    //       alert("stopped");
    //   }
      /*function  set_msg(msgg){
        
        alert(msgg);
        let pg = document.getElementsByTagName('input');
        var msg = msgg;
        for (elt of pg){
         elt.setAttribute('onclick',"alert(msg)");

        //elt.setAttribute('onclick',ttt(event,msgg));
        //document.getElementById(this.id).value  = msgg;
        }
      }
      function ttt(event,msg){
        alert("id="+event.target.id);
      }*/
      
   

    //   window.onload=function(){
    //     function popup() {
    //         console.log("start");
    //         chrome.runtime.sendMessage({message: "hey"});
    
    
    
    
            
    //         // chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    //         // var activeTab = tabs[0];
    //         // chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
    //         console.log("message sended");
    //       //});
    //     }
    // }
 
function popup(txt) {
    let x = document.querySelectorAll("input[type=text]");
    console.log(x);
        flag = 1;
        console.log(txt);
        chrome.runtime.sendMessage( {"rcd": txt,"elem":x});
      
    }


    
       
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            var msgg =request.message; 
            let tb = request.activeTab;
            if(  msgg === "start" && request.flag ==1){
                const mg = "strcd";
                let flag = 1;
                strt();
                //send_msg(mg,flag)
               }
            else if(msgg === "stop" && request.flag ==0 ){
                const mg = "stpcd";
                let flag = 0;
                //send_msg(mg,flag)
            }
            else {
                console.log(msgg);
            }
        }
      );


      function send_msg(mg,flag){
        chrome.runtime.sendMessage({"message":mg,"flag":flag});
      }

      function gn(l){
          l.value = txt;
      }