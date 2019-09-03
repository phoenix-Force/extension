 /*chrome.browserAction.onClicked.addListener(sndmsg)
            function sndmsg(tab){
                let msg = {
                    txt:"start_the_model"
                }
                chrome.tabs.sendMessage(tab.id,msg);
            }*/

   
   /* $('#btnstrt').click(function(){
        alert("hello");
        /*let parm ={
            active:true,
            currentWinow:true
        }
        /*chrome.tabs.query(parm,gottab)
        function gottab(tabs){
            let msg = {
                txt:"start_the_model"
            }
            chrome.tabs.sendMessage(tabs[0].id,msg);
        }*/


window.onload=function(){
    var flag = 0;

    function popup() {
        flag = 1;
        console.log("start");
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "start","flag":flag});
       });
    }




    // function popup() {
    //     console.log("start");
    //     chrome.runtime.sendMessage({"message": "start"});
     
    //     // chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    //     // var activeTab = tabs[0];
    //     // chrome.tabs.sendMessage(activeTab.id, {"message": "start"});
    //     console.log("message sended");
    //   //});
    // }


document.getElementById("btnstrt").addEventListener("click", popup);



    function popup2() {
        flag = 0;
        console.log("stop");
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {"message": "stop","flag":flag});
       });
    }
    
      document.getElementById("btnstp").addEventListener("click", popup2);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
         msgg =request.rcd; 
        var tb =request.elem
        console.log(tb);
            for(const z of tb){
                z.addEventListener('click',gn(this));
            }
            
    }
    
  );
  function gn(l){
    console.log(this.id);
    document.getElementById(l.id).value = msgg;
  }




        
