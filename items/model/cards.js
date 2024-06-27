class Cards {
    constructor(catalog) {
        this.cardsArray = JSON.parse(localStorage.getItem('cards')) || [];
        this.catalog = catalog;
    }

    getData = () => {
        return this.cardsArray;
    }

    updateData = () => {
        this.cardsArray = JSON.parse(localStorage.getItem('cards')) || [];
        this.catalog.view(this.cardsArray);
    }

    addCard = (value) => {
        this.cardsArray.push(value);
        localStorage.setItem('cards', JSON.stringify(this.cardsArray));
    }

    deleteCard = (id) => {
        this.cardsArray = this.cardsArray.filter(card => card.id !== id);
        localStorage.setItem('cards', JSON.stringify(this.cardsArray));
    }

    sortBy = (isUp) => {
        if (isUp) {
            this.cardsArray.sort((a,b) => a.price - b.price);
        }
        else {
            this.cardsArray.sort((a,b) => b.price - a.price);
        }
        localStorage.setItem('cards', JSON.stringify(this.cardsArray));
    }
}