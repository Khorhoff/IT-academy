"use strict";
class Enemy {
    constructor(_enemy, _hearts, _damage,) {
        this.enemyBlock = _enemy;
        this.hearts = _hearts;
        this.damage = _damage;
        this.refrechShot = 0;
        this.position = new Position(this.enemyBlock);
    }

    animate() {
        if (this.refrechShot === 300) {
            this.refrechShot = 0;
                return 1;
        }
        else{
            this.refrechShot++;
            return
        }
    }
}