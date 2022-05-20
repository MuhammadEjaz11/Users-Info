
var cont = document.getElementById('cont');
var data = fetch('https://dummyjson.com/users')
    .then(res => res.json())
    .then(json => {
console.log(json);
        for (let j = 0; j < json.users.length; j++) {
            let profile = json.users[j].image;
            let fname = json.users[j].firstName + " " + json.users[j].lastName ;
            let email = json.users[j].email;
            let age = json.users[j].gender;
            let pNumber = json.users[j].phone;
            let address = json.users[j].address.address + json.users[j].address.city + json.users[j].address.state + json.users[j].address.postalCode;
            const parent = document.createElement('div');
            parent.innerHTML = 
            `<div class="user">
            <div class="profile">
                <div class="imag">
                    <img src="img/asdf.png" width="220px" alt="">
                    <img id="profile"
                        src="${profile}"
                        width="100px" alt="">
                </div>
                <div class="data">
                    <p id="name">${fname}</p>
                    <p id="email">${email}</p>
                    <p id="gender">${age}</p>
                    <p id="pnumber">${pNumber}</p>
                    <p id="address">${address}</p>

                </div>
            </div>
        </div>`
        cont.appendChild(parent);
        }

    })
