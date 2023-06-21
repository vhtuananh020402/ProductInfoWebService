async function getData(qrCode) {
    let url = qrCode;
    try {
        let res = await fetch(url);
        // console.log(res.json());
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function render(qrCode) {
    let data = await getData(qrCode);
    let html = `<div class="data">
                    <h3>Product Information</h3>
                    <p>MSP: ${data[0].msp}</p>
                    <p>Name: ${data[0].name}</p>
                    <p>Product of: ${data[0].product_of}</p>
                    <p>Farm: ${data[0].farm}</p>
                    <p>Website:<a href="${data[0].website}">${data[0].website}</a></p> 
                    <p>Energy: ${data[0].energy}</p>
                    <p>Expired date: ${data[0].expired_date}</p>
                    <img src="${data[0].image}" alt="product image" width="30%">
                </div>`;
    
    let container = document.querySelector('.container');
    container.innerHTML = html;
}



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


function onScanSuccess(qrCodeMessage) {
    // document.getElementById('result').innerHTML = '<span class="result">'+qrCodeMessage+'</span>';
    render(qrCodeMessage);

}
function onScanError(errorMessage) {
//handle scan error
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);