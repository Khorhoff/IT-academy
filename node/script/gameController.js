"use strict"
class GameController {
    constructor(_app, _foreground) {
        this.app = _app;
        this.app.innerHTML =
            `<div id="field" class="field">
                <div id="hero" class="hero">
                    <img src="img/hero-back.png" alt="">
                    <div id="sword" class="sword">
                        <img src="img/knife.png" alt="" id="sword-img" class="sword-img">
                    </div>
                </div>
            </div>
            <div id="side-bar" class="side-bar">
                <div id="level" class="text-block"></div>
                <div id="score" class="text-block"></div>
                <div id="health" class="health"></div>
            </div>`;
        this.levelBlock = document.getElementById('level');
        this.scoreBlock = document.getElementById('score');
        this.healthBlock = document.getElementById('health');
        this.level = 1;
        this.score = 0;
        this.enemyCount = 3;
        this.updateProgress();
        this.field = document.getElementById('field');
        this.hero = new Hero(document.getElementById('hero'), this.field, document.getElementById('sword'), 3, 1, 3);
        this.updateHeart(this.hero.hearts);
        this.animateList = [];
        this.enemyList = [];
        this.createEnemy(this.enemyCount);
        setTimeout(() => {
            for (let i = 0; i < this.enemyList.length; i++) {
                setTimeout(() => {
                    this.animateList.push(this.enemyList[i]);
                }, 1000);
            }
        }, 2);
        this.animateList.push(this.hero);
        this.timer = this.createTimer();

        window.addEventListener('keydown', this.keyDown.bind(this));
        window.addEventListener('keyup', this.keyUp.bind(this));
        window.addEventListener('mousedown', this.mouseDown.bind(this));
        window.addEventListener('mousemove', this.mouseMove.bind(this));
        window.addEventListener('mouseup', this.mouseUp.bind(this));
    }

    keyDown(e) {
        switch (e.key) {
            case 'w':
                this.hero.movementChange(-1, false);
                break;
            case 's':
                this.hero.movementChange(1, false);
                break;
            case 'a':
                this.hero.movementChange(-1, true);
                break;
            case 'd':
                this.hero.movementChange(1, true);
                break;

            default:
                break;
        }
    }

    keyUp(e) {
        switch (e.key) {
            case 'w':
                this.hero.movementChange(0, false);
                break;
            case 's':
                this.hero.movementChange(0, false);
                break;
            case 'a':
                this.hero.movementChange(0, true);
                break;
            case 'd':
                this.hero.movementChange(0, true);
                break;

            default:
                break;
        }
    }

    mouseDown(e) {
        if (e.target == this.field) {
            this.hero.attackChange(true, e.pageX);
        }
    }

    mouseMove(e) {
        if (this.hero.isAttack) {
            this.hero.attackChange(true, e.pageX);
        }
    }

    mouseUp(e) {
        this.hero.attackChange(false, 0);
    }

    createTimer() {
        return setInterval(() => {
            for (const obj of this.animateList) {
                let answer;
                try {
                    answer = obj.animate();
                }
                catch {
                    this.animateList = this.animateList.filter((animate) => { return !!animate });              
                }
                if (answer && obj instanceof Hero) {
                    answer += 270;
                    let attackX = this.hero.position.centerX + this.hero.sword.offsetHeight / 2 * Math.cos(answer * Math.PI / 180);
                    let attackY = this.hero.position.centerY + this.hero.sword.offsetHeight / 2 * Math.sin(answer * Math.PI / 180);
                    let dieList = this.checkHeroAttack(attackX, attackY);
                    this.enemyList = this.enemyList.filter((enemy) => {
                        if (dieList.indexOf(enemy) == -1) {
                            return true;
                        }
                        else {
                            enemy.enemyBlock.remove();
                            this.score += 10;
                            this.updateProgress(false);
                            return false;
                        }
                    });
                    this.animateList = this.animateList.filter((animate) => {
                        if (dieList.indexOf(animate) == -1) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    });
                    if (this.enemyList.length === 0) {
                        this.level++;
                        this.updateProgress(true);
                    }
                }
                if (answer && obj instanceof Enemy) {
                    this.createShot(obj.position);
                }
                if (answer && obj instanceof Shot) {
                    if (this.checkEnemyAttack(obj.position.centerX, obj.position.centerY)) {
                        this.animateList = this.animateList.filter((animate) => { return animate !== obj; });
                        obj.shotBlock.remove();
                    }
                }
            }
        }, 10);
    }

    updateProgress(_isLevel) {
        this.levelBlock.innerHTML = `LEVEL ${this.level}`;
        this.scoreBlock.innerHTML = `SCORE: ${this.score}`;
        if (_isLevel) {
            clearInterval(this.timer);
            setTimeout(() => {
                this.createEnemy(this.enemyCount);
                setTimeout(() => {
                    for (let i = 0; i < this.enemyList.length; i++) {
                        let y = 0;
                        if (this.level >= 5) {
                            y = i;
                        }
                        setTimeout(() => {
                            this.animateList.push(this.enemyList[i]);
                        }, 1000 * (y + 1));
                    }
                }, 2);
                this.timer = this.createTimer();
            }, 3000);
        }
    }

    updateHeart(_hearts) {
        if (_hearts) {
            this.healthBlock.innerHTML = '';
            for (let i = 0; i < _hearts; i++) {
                let img = document.createElement('img');
                img.className = 'heart';
                img.src = 'img/heart.png';
                this.healthBlock.appendChild(img);
            }
        }
        else {
            this.healthBlock.innerHTML = '';
            clearInterval(this.timer);
            alert('game over');
        }
    }

    createEnemy(_enemiesLeft) {
        if (_enemiesLeft) {
            let enemy = document.createElement('div');
            let img = document.createElement('img');
            img.src = "img/enemy.png";
            enemy.appendChild(img);
            enemy.className = "enemy";
            enemy.style.top = this.getRandomInt(80) + 10 + "%";
            enemy.style.left = this.getRandomInt(80) + 10 + "%";
            this.field.appendChild(enemy);
            enemy.ondragstart = function() {
                return false;
            };
            setTimeout(() => this.enemyList.push(new Enemy(enemy, 1, 1)), 1);
            return this.createEnemy(_enemiesLeft - 1);
        }
        else return;
    }

    createShot(_enemyPosition) {
        let shotDiv = document.createElement('div');
        shotDiv.className = 'shot';
        shotDiv.style.top = _enemyPosition.centerY + 'px';
        shotDiv.style.left = _enemyPosition.centerX + 'px';
        this.field.appendChild(shotDiv);
        setTimeout(() => {
            this.animateList.push(new Shot(shotDiv, _enemyPosition.centerX, _enemyPosition.centerY, 
                this.hero.position.centerX, this.hero.position.centerY, 2));
        }, 1);

    }

    checkHeroAttack(_attackX, _attackY) {
        const dieList = [];
        for (const enemy of this.enemyList) {
            enemy.position.updatePosition(enemy.enemyBlock);
            if (_attackX <= enemy.position.right &&
                _attackX >= enemy.position.left &&
                _attackY <= enemy.position.bottom &&
                _attackY >= enemy.position.top
            ) {
                dieList.push(enemy);
            }
        }
        return dieList;
    }

    checkEnemyAttack(_attackX, _attackY) {
        if (_attackX <= this.hero.position.right &&
            _attackX >= this.hero.position.left &&
            _attackY <= this.hero.position.bottom &&
            _attackY >= this.hero.position.top
        ) {
            this.updateHeart(--this.hero.hearts);
            return true;
        }
        if (_attackX <= 0 || _attackY <= 0 || _attackX >= this.field.offsetWidth || _attackY >= this.field.offsetHeight) {
            return true;
        }
        return false;
    }

    getRandomInt(_max) {
        return Math.floor(Math.random() * _max);
    }

    dropEvents() {
        window.removeEventListener('keydown', this.keyDown);
        window.removeEventListener('keyup', this.keyUp);
        window.removeEventListener('mousedown', this.mouseDown);
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('mouseup', this.mouseUp);
        clearInterval(this.timer);
    }
}
