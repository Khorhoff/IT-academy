function HashStorageFunc() {
    let self = this;
    let hashStorage = {};

    self.addValue = (key, value) => {
        if ((key + '') === '') {
            return { mess: 'Получен пустой объект' };
        }
        if ((key + '') in hashStorage) {
            hashStorage[`${key}`] = value;
            return { mess: 'Объект перезаписан' };
        }
        hashStorage[`${key}`] = value;
        return { mess: `Объект ${key} добавлен` };
    }

    self.getValue = (key) => {
        if(!((key + '') in hashStorage)) {
            return {answ: undefined, mess: 'Ключ не найден'};
        }
        return {answ: hashStorage[`${key}`], mess: `Объект ${key} получен`};
    }

    self.deleteValue = (key) => {
        if (!((key + '') in hashStorage)) {
            return {answ: false, mess: 'Ключ не найден'};
        }
        let newStor = {};
        for (const k in hashStorage) {
            if (k === (key + '')) {
                continue;
            }
            newStor[k] = hashStorage[k];
        }
        return {answ: true, mess: `Объект ${key} удален`};
    }

    self.getKeys = () => {
        let keysArray = [];
        for (const key in hashStorage) {
            keysArray.push(key);
        }
        return {answ: keysArray, mess: 'Получены все ключи'};
    }
}

const drinkStorageFunk = new HashStorageFunc();

function funk1(store) {
    const drinkName = prompt('Введите название напитка');
    const alco = confirm('Напиток алкогольный?') ? 'Да' : 'Нет';
    const rec = prompt('Введите рецепт напитка');
    store.addValue(drinkName, {isAlco: alco, recipe: rec});
}