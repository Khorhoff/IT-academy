const url = 'https://jsonplaceholder.typicode.com/users';
const app = document.getElementById('app');

const getUsers = (users) => {
    const userHtml = users.reduce((acc, user) => {
        return acc += `
        <li>
            <p>Name: ${user.name}</p>
            <p>Street: ${user.address.street}</p>
            <p>Geo: ${user.address.geo.lat}, ${user.address.geo.lng}</p>
            <p>Company name: ${user.company.name}</p>
        </li>`
    }, '');
    app.innerHTML = userHtml;
}

const errorHandler = (jqXHR,statusStr,errorStr) => {
    alert(statusStr+' '+errorStr);
}

$.ajax(url, {
    type: 'GET',
    datatype: 'json',
    success: getUsers,
    error: errorHandler
});
