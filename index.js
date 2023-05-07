// const user = {
//     name: 'John',
//     surname: 'Adson',
//     age: 20,
//     isMale: true
// }

// const userjs = JSON.stringify (user);

// const gettingUser = JSON.parse (userjs);

// const store = {
//     users:null,
//     erroe:null,
//     isFetching:false
// };

// const btn = document.getElementById ('loadData')
// const request = new XMLHttpRequest ();

// btn.onclick = function () {
//     request.open ("GET", "/users.json");
//     request.send()
// };

// request.onloadstart = function () {
//     store.isFetching = true
//     console.log (store)
// }

// request.onloadend = function () {
//     store.isFetching = false;
//        if (this.status>=200&&this.status<300) {
//         store.users = JSON.parse(this.responseText)}
//         else {
//             store.error = new Error (`Loading Error. code ${this.status} - ${this.statusText}`)
//         }
//        console.log (store)  
//     }



// const btn = document.getElementById ('loadData')
// btn.onclick = async function () {
//     await fetch ('/users.json').then(loadData).then(printData).catch(loadError)
// }



// function loadData (res) {
//     return res.json()
// }



// function printData (data) {
//     console.log (data)
// }

// function loadError (res) {
//     console.log (res)
// }



fetch ('https://randomuser.me/api/?results=50&&location.country=Ukraine&&seed=123')
.then (res=>res.json())
.then (gettingData)
.catch (errorLoading)

function errorLoading(error) {
    const e= document.createElement ('h1')
    e.classList.add ('error')
    e.innerText = (error)
    document.body.append (e)
    return (e)
}



function gettingData(users) {
    const us=users.results
    const list = document.getElementById('usersList');
    list.classList.add ('list')
    us.map(user => {
        const card = createCard(user)
        list.append(card)
        console.log (user)
    });
    console.log (users.results)
}    

function createCard(user) {
    const userName=user.name.first;
    const userSername = user.name.last;

    const item = document.createElement ('div');
    item.classList.add ('card')

    const photo = document.createElement ('img');
    photo.classList.add ('photo')
    photo.setAttribute ('src', user.picture.large)
    photo.setAttribute ('alt', 'photo')
    
    const nameSer = document.createElement ('h2');
    nameSer.classList.add ('people')
    nameSer.innerText = userName + ' ' + userSername;

    
    item.append (photo)
    item.append (nameSer)
   

    return item
}

    
