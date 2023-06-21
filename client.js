async function getData() {
    let url = 'http://localhost:5002/product/9059089199879';
    try {
        let res = await fetch(url);
        // console.log(res.json());
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function render() {
    let data = await getData();
    let html = `<div class="data">
                    <p>${data[0].msp}</p>
                </div>`;
    
    let container = document.querySelector('.container');
    container.innerHTML = html;
}

render();

// async function renderUsers() {
//     let users = await getUsers();
//     let html = '';
//     users.forEach(user => {
//         let htmlSegment = `<div class="user">
//                             <img src="${user.unicode}" >
//                             <h2>${user.firstName} ${user.lastName}</h2>
//                             <div class="email"><a href="email:${user.email}">${user.email}</a></div>
//                         </div>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.container');
//     container.innerHTML = html;
// }

// renderUsers();