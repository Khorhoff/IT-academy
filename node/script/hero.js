"use strict";
class Hero {
    constructor(_hero, _field, _sword, _hearts, _damage, _speed) {
        this.heroBlock = _hero;
        this.field = _field;
        this.sword = _sword;
        this.isAttack = false;
        this.isRightAttack = true;
        this.isAttackSideChange = false;
        this.AttackPart = 50;
        this.position = new Position(this.heroBlock);
        this.hearts = _hearts;
        this.damage = _damage;
        this.speed = _speed;
        this.horizontalMovement = 0;
        this.verticalMovement = 0;
    }

    attackChange(_isAttack, _pageX) {
        if (_isAttack) {
            let lastAttackSide = this.isRightAttack;
            this.isRightAttack = this.position.centerX < _pageX ? true : false;
            if (this.isAttack) {
                if (lastAttackSide === this.isRightAttack) {
                    this.isAttackSideChange = false;
                }
                else {
                    this.isAttackSideChange = true;
                }
            }
            else {
                this.isAttackSideChange = false;
            }
        }
        this.isAttack = _isAttack;
    }

    movementChange(_change, _isHorizontal) {
        if (_isHorizontal) {
            this.horizontalMovement = this.speed * _change;
        }
        else {
            this.verticalMovement = this.speed * _change;
        }
    }

    animate() {
        let factor = 1;
        const deg = 3.6;
        let newPos;

        if (this.verticalMovement !== 0 && this.horizontalMovement !== 0) {
            factor = Math.sqrt(2);
        }
        if (this.verticalMovement < 0 && this.position.top >= this.verticalMovement) {
            newPos = this.position.top + this.verticalMovement / factor;
            this.heroBlock.style.top = (newPos < 0 ? 0 : newPos) + 'px';
        }
        if (this.verticalMovement > 0 && this.position.bottom <= this.field.offsetHeight - this.verticalMovement) {
            newPos = this.position.top + this.verticalMovement / factor;
            this.heroBlock.style.top = (newPos > this.field.offsetHeight ? this.field.offsetHeight : newPos) + 'px';
        }
        if (this.horizontalMovement < 0 && this.position.left >= this.horizontalMovement) {
            newPos = this.position.left + this.horizontalMovement / factor;
            this.heroBlock.style.left = (newPos < 0 ? 0 : newPos) + 'px';
        }
        if (this.horizontalMovement > 0 && this.position.right <= this.field.offsetWidth - this.horizontalMovement) {
            newPos = this.position.left + this.horizontalMovement / factor;
            this.heroBlock.style.left = (newPos > this.field.offsetWidth ? this.field.offsetWidth : newPos) + 'px';
        }
        this.position.updatePosition(this.heroBlock);

        if (this.AttackPart === 50) {
            this.isAttackSideChange = false;
            if (!this.isAttack) {
                this.sword.style.display = 'none';
                return
            }
            if (this.isAttack) {
                this.sword.style.display = 'flex';
                this.AttackPart = 0;
            }
        }

        if (this.isAttack || this.AttackPart != 50) {
            if (this.isRightAttack || (!this.isRightAttack && this.isAttackSideChange)) {
                this.sword.style.transform = `rotateZ(${this.AttackPart * deg}deg)`;
            }
            else if (!this.isRightAttack || (this.isRightAttack && this.isAttackSideChange)) {
                this.sword.style.transform = `rotateZ(-${this.AttackPart * deg}deg)`;
            }
            this.AttackPart++;
        }
        return this.isRightAttack ? this.AttackPart * deg : this.AttackPart * deg * -1;
    }
}