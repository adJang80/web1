
let deferredInstallPrompt = null;
let installButton = null;

window.addEventListener('load', ()=>{
    installButton = document.getElementById("install-button");
    installButton.addEventListener('click', installPWA);
});

window.addEventListener(
    'beforeinstallprompt',
    saveBeforeInstallPromptEvent
);

function saveBeforeInstallPromptEvent(evt){
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function insinstallPWA(){
    deferredInstallPrompt.prompt();

    installButton.remove();

    deferredInstallPrompt.userChoice
    .then((choice) => {
        if(choice.outcome === 'accepted'){
            console.log("user accepted", choice);
        }else{
            console.log("user dismissed", choice);
        }
        deferredInstallPrompt = null;
    });
}
