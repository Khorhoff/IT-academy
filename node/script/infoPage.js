"use strict"
class InfoPage {
    constructor(_app) {
        this.app = _app;
        this.app.innerHTML =  `
        <div class="info-back">
        <div class="info-block">
            <div class="image-block">
                <img src="img/info1.png" alt="">Удар направлен от героя в сторону клика мыши(вправо или влево)
            </div>
            <div class="image-block">
                <img src="img/info2.png" alt="">Нужно уничтожать врагов
            </div>
            <div class="image-block">
                <img src="img/info3.png" alt="">Они будут защищаться фаерболами
            </div>
            <div class="image-block">
                <img src="img/info4.png" alt="">А у тебя всего 3 жизни
            </div>
        </div>
    </div>
        `;
    }

    dropEvents() {}
}