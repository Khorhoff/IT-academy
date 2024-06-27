class Catalog {
    constructor(items) {
        this.items = items;
    }

    createCard = (item) => {
        const { brand, img: imgUrl, model, descr, price, id } = item;
    
        const divCard = document.createElement('div');
        divCard.setAttribute('class', 'card');
        divCard.setAttribute('data-id', id);
        divCard.addEventListener('click', deleteCard);
    
        const img = document.createElement('img');
        img.setAttribute('src', `img/${imgUrl}`);
        img.setAttribute('class', 'card-img-top');
    
        const divBody = document.createElement('div');
        divBody.setAttribute('class', 'card-body');
    
        const h5 = document.createElement('h5');
        h5.setAttribute('class', 'card-title');
        h5.appendChild(document.createTextNode(`${brand} ${model}`));
    
        const p = document.createElement('p');
        p.setAttribute('class', 'card-text');
        p.appendChild(document.createTextNode(`${descr}`));
    
        const pr = document.createElement('p');
        pr.setAttribute('class', 'card-text');
        pr.appendChild(document.createTextNode(`${price}`))
    
        const a = document.createElement('a');
        a.setAttribute('class', 'btn btn-primary');
        a.appendChild(document.createTextNode('Delete'));
    
        divCard.appendChild(img);
    
        divBody.appendChild(h5);
        divBody.appendChild(p);
        divBody.appendChild(pr);
        divBody.appendChild(a);
    
        divCard.appendChild(divBody);
        this.items.appendChild(divCard);
    }

    view = (cards) => {
        this.items.innerHTML = '';

        for (let i = 0; i < cards.length; i++) {
            this.createCard(cards[i]);
        }
    }
}