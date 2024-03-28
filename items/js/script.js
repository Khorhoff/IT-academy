let items = [];

function getData() {
    items.push({
        'brand': document.getElementById('brand').value,
        'img': document.getElementById('imgURL').value,
        'model': document.getElementById('model').value,
        'descr': document.getElementById('descr').value
    });

    view(items);
}

function view(arr) {
    const el = document.getElementById("items");
    let html = '';
    for (let i = 0; i < arr.length; i++) {
        html += `<div class="card" style="width: 18rem;">
                            <img src="img/${arr[i].img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${arr[i].brand} ${arr[i].model}</h5>
                                <p class="card-text">${arr[i].descr}</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>`;
    }
    el.innerHTML = html;
}

// const cars = [
//     {
//         brand: 'BMW',
//         img: 'bmw.jpg',
//         model: 'XM',
//         descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, unde hic nisi aliquam dignissimos illum eum enim, architecto laudantium reprehenderit error cum nihil magnam nemo. Nostrum mollitia molestias aut facere.'
//     },
//     {
//         brand: 'Nissan',
//         img: 'nissan.jpg',
//         model: 'GT-R',
//         descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, unde hic nisi aliquam dignissimos illum eum enim, architecto laudantium reprehenderit error cum nihil magnam nemo. Nostrum mollitia molestias aut facere.'
//     },
//     {
//         brand: 'Tesla',
//         img: 'tesla.jpg',
//         model: 'Cybertruck',
//         descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, unde hic nisi aliquam dignissimos illum eum enim, architecto laudantium reprehenderit error cum nihil magnam nemo. Nostrum mollitia molestias aut facere.'
//     },
//     {
//         brand: 'Lambargini',
//         img: 'lamba.jpg',
//         model: 'Urus',
//         descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, unde hic nisi aliquam dignissimos illum eum enim, architecto laudantium reprehenderit error cum nihil magnam nemo. Nostrum mollitia molestias aut facere.'
//     },
//     {
//         brand: 'Mersedes',
//         img: 'mers.jpg',
//         model: 'Benz',
//         descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, unde hic nisi aliquam dignissimos illum eum enim, architecto laudantium reprehenderit error cum nihil magnam nemo. Nostrum mollitia molestias aut facere.'
//     },
//     {
//         brand: 'Samsung',
//         img: 'sams.jpg',
//         model: 'K-9',
//         descr: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, unde hic nisi aliquam dignissimos illum eum enim, architecto laudantium reprehenderit error cum nihil magnam nemo. Nostrum mollitia molestias aut facere.'
//     },
// ];