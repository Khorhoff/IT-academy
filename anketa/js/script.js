let surname, name, patronymic, age;
while (true) {
    surname = prompt("Введите фамилию");
    if (surname != "" && surname != null) {
        break;
    }
}
while (true) {
    name = prompt("Введите имя");
    if (name != "" && name != null) {
        break;
    }
}
while (true) {
    patronymic = prompt("Введите отчество");
    if (patronymic != "" && patronymic != null) {
        break;
    }
}
while (true) {
    age = Number(prompt("Введите возраст в годах"));
    if (age != NaN && age != 0
    ) {
        break;
    }
}
let gender = confirm("Ваш пол - мужской?");
let isPension;
if (gender == true) {
    gender = "мужской";
    isPension = age > 62 ? true : false;
} else {
    gender = "женский";
    isPension = age > 57 ? true : false;
}

alert(`ваше ФИО: ${surname} ${name} ${patronymic}\nваш возраст в годах: ${age}\nваш возраст в днях: ${age * 365}\nчерез пять лет вам будет: ${age + 5}\nваш пол: ${gender}\nвы на пенсии: ${isPension == true ? "да" : "нет"}`);
