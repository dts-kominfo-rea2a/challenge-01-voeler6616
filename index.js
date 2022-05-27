// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// unique key in array fc(favorite color) & fr(favorite restaurant) first user 
const fcFirstUser = ['Yellow', 'Pink', 'White', 'Purple'];
const frFirstUser = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"];

// unique key in array fc(favorite color) & fr(favorite restaurant) second user 
const fcSecondUser = ['Blue', 'Black', 'Grey'];
const frSecondUser = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"];

// First User Object
const firstUser = {
    name: 'Monica',
    gender: 'Female',
    age: 17,
    email: 'monica@dingdong.com',
    favoriteColor: [...new Set(fcFirstUser)],
    isHavePet: 'Yes',
    education:
    {
        name: 'SD 01',
        city: 'Jakarta',
        graduate: 2016
    },
    favoriteRestaurant: [...new Set(frFirstUser)],
};

// Second User Object
const secondUser = {
    name: 'Wendy',
    gender: 'Male',
    age: 23,
    email: 'wendy@dingdong.com',
    favoriteColor: [...new Set(fcSecondUser)],
    isHavePet: 'No',
    education:
    {
        name: 'SD 02',
        city: 'Jakarta',
        graduate: 2010
    },
    favoriteRestaurant: [...new Set(frSecondUser)],
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];

users.push(firstUser, secondUser);

console.log(users);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};