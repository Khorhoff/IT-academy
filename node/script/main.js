"use strict"
class MainPage {
    constructor(_app) {
        this.app = _app;
        this.app.innerHTML = 
        `<div class="main-back">
            <div class="button-block">
                <p class="main-title">DUNGEON MASTER</p>
                <div id="game-button" class="button">
                    Start
                </div>
                <div id="score-button" class="button">
                    Score table
                </div>
                <div id="info-button" class="button">
                    Info
                </div>
            </div>
            <div class="hero-front">
                <img src="img/hero-front.png" alt="">
            </div>
        </div>`
        this.game = document.getElementById('game-button');
        this.game.addEventListener('click', this.toGamePage);
        this.score = document.getElementById('score-button');
        this.score.addEventListener('click', this.toScorePage);
        this.info = document.getElementById('info-button');
        this.info.addEventListener('click', this.toInfoPage);
    }

    toGamePage(e) {
        switchState({pageName: 'Game'});
    }

    toScorePage(e) {
        switchState({pageName: 'Score'});
    }

    toInfoPage(e) {
        switchState({pageName: 'Info'});
    }

    dropEvents() {
        this.game.removeEventListener('click', this.toGamePage);
        this.score.removeEventListener('click', this.toScorePage);
        this.info.removeEventListener('click', this.toInfoPage);
        
    }
}