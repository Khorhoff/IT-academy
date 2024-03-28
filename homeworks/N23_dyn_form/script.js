const formDef1= [
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[
        {text:'здоровье',value:1},
        {text:'домашний уют',value:2},
        {text:'бытовая техника',value:3}
    ]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[
        {text:'бесплатное',value:1},
        {text:'платное',value:2},
        {text:'VIP',value:3}
    ]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {caption:'Опубликовать',kind:'submit'},
];

const formDef2= [
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {caption:'Зарегистрироваться',kind:'submit'},
];

const myform = document.getElementById('Form');

const formDef = (form, def) => {
    let el;
    let elChild;
    let elVariant;
    let tagName;
    let kind;
    form.innerHTML = '';

    for (const e of def) {
        if ('label' in e) {
            if (e.kind === 'combo') {
                el = document.createElement('label');
                el.appendChild(document.createTextNode(e.label));
                elChild = document.createElement('select');
                elChild.name = e.name;
                for (const variant of e.variants) {
                    elVariant = document.createElement('option')
                    elVariant.value = variant.value;
                    elVariant.appendChild(document.createTextNode(variant.text));
                    elChild.appendChild(elVariant);
                }
                el.appendChild(elChild);
            }
            else if (e.kind === 'radio') {
                el = document.createElement('label');
                el.appendChild(document.createTextNode(e.label));
                for (const variant of e.variants) {
                    elChild = document.createElement('input');
                    elChild.type = e.kind;
                    elChild.name = e.name;
                    elChild.value = variant.value;
                    el.appendChild(elChild);
                    el.appendChild(document.createTextNode(variant.text));
                }
            }
            else {
                switch (e.kind) {
                    case 'check':
                        tagName = 'input';
                        kind = 'checkbox';
                        break;
                    case 'memo':
                        tagName = 'textarea';
                        kind = '';
                        break;
                    default:
                        tagName = 'input';
                        kind = e.kind;
                        break;
                }
                el = document.createElement('label');
                el.appendChild(document.createTextNode(e.label));
                if (tagName === 'textarea') {
                    el.appendChild(document.createElement('br'));
                }
                elChild = document.createElement(tagName);
                elChild.type = kind;
                elChild.name = e.name;
                el.appendChild(elChild);
            }
        }
        if ('caption' in e) {
            el = document.createElement('input');
            el.type = e.kind;
            el.value = e.caption;
        }
        form.appendChild(el);
        form.appendChild(document.createElement('br'));
    }
}

const def = (defNum) => {
    formDef(myform, defNum === 1 ? formDef1 : formDef2);
}