 /*chrome.browserAction.onClicked.addListener(sndmsg)
            function sndmsg(tab){
                let msg = {
                    txt:"start_the_model"
                }
                chrome.tabs.sendMessage(tab.id,msg);
            }*/

function setup(){
    
    let btnsrt = select('#bstrt');
    btnsrt.onClick(sndmsg);
    function sndmsg(){
        console.log("gguhkkjhjguhkj")
        let parm ={
            active:true,
            currentWinow:true
        }
        chrome.tabs.query(parm,gottab)
        function gottab(tabs){
            let msg = {
                txt:"start_the_model"
            }
            chrome.tabs.sendMessage(tabs[0].id,msg);
        }
    }



}