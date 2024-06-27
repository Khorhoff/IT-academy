"use strict"
window.addEventListener('hashchange', switchStateFromURLHash);
let SPAState = {};
const app = document.getElementById('app');
const foreground = document.getElementById('foreground');

function switchStateFromURLHash() {
    if (SPAState.pageName) {
        SPAState.page.dropEvents();
    }
    let URLHash = window.location.hash;
    let stateStr = URLHash.replace('#', '').replace('!', '');
    if (stateStr != '') {
        let parts = stateStr.split('_');
        SPAState = { pageName: parts[0] };
        if (parts.length = 2) {
            SPAState.modal = parts[1];
        }
    }
    else {
        SPAState = { pageName: "Main" };
    }

    switch (SPAState.pageName) {
        case 'Main':
            SPAState.page = new MainPage(app);
            break;
        case 'Game':
            SPAState.page = new GameController(app);
            break;
        case 'Score':
            SPAState.page = new ScorePage();
            break;
        case 'Info':
            SPAState.page = new InfoPage(app);
            break;
    }
}

function switchState(_newState) {
    let newState = _newState.pageName;
    if (_newState.modal) {
        newState += '_' + _newState.modal;
    }
    location.hash = newState;
}

switchStateFromURLHash();