// var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
// var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
// var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

// var grammar = '#JSGF V1.0';
// var recognition = new SpeechRecognition();
// var speechRecognitionList = new SpeechGrammarList();

// speechRecognitionList.addFromString(grammar, 1);
// recognition.grammars = speechRecognitionList;
// //recognition.continuous = false;
// recognition.lang = 'en-US';
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// recognition.onresult = function(event){
//     var txt = event.results[0][0].transcript;
//     console.log(txt);
//     document.getElementById("search").setAttribute("value", txt);
    
// };
// recognition.onspeechend = function(){
//     recognition.stop();
// } ;
// recognition.onerror = function(event){
//     alert('error occurred '+event.error);
// };
// function strt(){
//     recognition.start();
// }

// /*function readOutLoud(txt = document.getElementById("search").value) {
//     var speech = new SpeechSynthesisUtterance();

//     // Set the text and voice attributes.
//     speech.text = txt;
//     speech.volume = 1;
//     speech.rate = 1;
//     speech.pitch = 1;

//     window.speechSynthesis.speak(speech);
// }
//     function stp(){
//         document.getElementById('bstrt').style.display = 'none';
//         alert('hello');
//     }*/

//     /*chrome.browserAction.onClicked.addListener(strtrecod());
//     function strtrecod(tab){
//         strt();
//         recognition.onresult();
//     }*/
//     /*chrome.runtime.onMessage.addListener(gotmsg);
//     function gotmsg(msg,sender,sendResponce){
//         console.log(msg.txt);

//     }*/




//     // chrome.runtime.onConnect.addListener(function(port) {
//     //     //if(port.name = "ctob"){
//     //     //console.assert(port.name == "knockknock");
//     //         port.onMessage.addListener(function(msg) {
//     //             if (msg.cmd == "strt_rcd"){
//     //                 strt();
//     //                 var rmsg = recognition.onresult();
        
//     //                 port.postMessage({rc: rmsg});
//     //             }
//     //         });
//     //     //}//
//     //   });


//     chrome.runtime.onMessage.addListener(
//         function(request, sender, sendResponse) {
//             var msgg =request.message; 
//             if(  msgg === "strcd" && request.flag ==1){
//                 console.log('bck: Record started')
//                 strt();
                
//                }
//             else if(msgg === "stpcd" && request.flag ==0 ){
//                 console.log('bck: Record stoped')
//             }
//             else {
//                 console.log(msgg);
//             }
//         }
//       );


//       function sndmsg(msg){
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.sendMessage(tabs[0].id, {message: msg});
//           });
//       }














    





   






//     // chrome.runtime.onMessage.addListener(
//     //     function(request, sender, sendResponse) {
//     //         var msgg =request.msg_b; 
//     //       if(  msgg === "strt_rcd" ) {
//     //         strt();
//     //        var rmsg = recognition.onresult();

//     //        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
//     //         var activeTab = tabs[0];
//     //         chrome.tabs.sendMessage(activeTab.id, {"message": rmsg});
//     //        });



//     //            }
//     //         else if(msgg === "stop"){
//     //             console.log("stopped");
//     //         }
//     //         else {
               
//     //         }
//     //     }
//     //   );
    
      