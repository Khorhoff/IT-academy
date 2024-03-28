function HashStorageFunc() {
    let self = this;
    let hashStorage = {};

    self.addValue = (key, value) => {
        if ((key + '') === '') {
            return { mess: 'Получен пустой объект' };
        }
        if ((key + '') in hashStorage) {
            hashStorage.key = value;
            return { mess: 'Объект перезаписан' };
        }
        hashStorage.key = value;
        return { mess: `Объект ${key} добавлен` };
    }

    // self.getValue = (key) => {
    //     if ((key + '') === '') {
    //         return { mess: 'Получен пустой объект', answer: undefined };
    //     }
    // }

    // const toStringByKey = (obj, key, tab = '') => {
    //     // obj - value объекта из hashStorage, key - ключ этого объекта, tab - табуляция для вложенности
    //     let str = key + '\n';
    //     if (obj instanceof Object) {
    //         for (const k in obj) {
    //             if (obj.k instanceof Array) {
    //                 str += `${tab + obj.k}: `
    //                 for (const i of obj.k) {
    //                     str += `${i}, `
    //                 }
    //                 str += '\n';
    //             }
    //         }
    //     }
    // }
}