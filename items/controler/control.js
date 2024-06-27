const cards = new Cards(new Catalog(document.getElementById("items")));
const down = document.getElementById("down");
const up = document.getElementById("up");
const filter = document.getElementById("filter");

window.addEventListener('DOMContentLoaded', () => {
    cards.updateData();
});

window.addEventListener('storage', () => {
    cards.updateData();
});

down.addEventListener('click', () => {
    cards.sortBy(false);
    cards.updateData();
});

up.addEventListener('click', () => {
    cards.sortBy(true);
    cards.updateData();
});

filter.addEventListener('input', (e) => {
    val = e.target.value;
    const filt = cards.filter(v => v.brand.toLowerCase().startsWith(val));
    view(filt);
});

const deleteCard = (e) => {
    const { id } = e.currentTarget.dataset;
    cards.deleteCard(id);
    cards.updateData();
}