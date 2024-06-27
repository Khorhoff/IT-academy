let cars = [
    {
        id: '1',
        brand: 'BMW',
        img: 'bmw.jpg',
        model: 'XM',
        price: 1000,
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: '2',
        brand: 'Nissan',
        img: 'nissan.jpg',
        model: 'GT-R',
        price: 5000,
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: '3',
        brand: 'Tesla',
        img: 'tesla.jpg',
        model: 'Cybertruck',
        price: 10000,
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: '4',
        brand: 'Lambargini',
        img: 'lamba.jpg',
        model: 'Urus',
        price: 3000,
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: '5',
        brand: 'Mersedes',
        img: 'mers.jpg',
        model: 'Benz',
        price: 7000,
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
        id: '6',
        brand: 'Samsung',
        img: 'sams.jpg',
        model: 'K-9',
        price: 500,
        descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
];

localStorage.setItem('cards', JSON.stringify(cars));

function getData() {
    cardsArray = JSON.parse(localStorage.getItem('cards')) || [];
    cardsArray.push({
        'id': (Math.random().toString().split('.'))[1],
        'brand': document.getElementById('brand').value,
        'img': document.getElementById('imgURL').value,
        'model': document.getElementById('model').value,
        'price': document.getElementById('price').value,
        'descr': document.getElementById('descr').value
    });
    localStorage.setItem('cards', JSON.stringify(cardsArray));
}