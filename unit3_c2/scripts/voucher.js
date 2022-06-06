 let amt = localStorage.getItem("wallet_balance") || 0;

//  let amount = localStorage.getItem("user.wallet");
//  console.log(amount)

let item = JSON.parse(localStorage.getItem("purchase")) || [];

const getdataObj = async () => {
    try {
        let res = await fetch(
            `https://masai-vouchers-api.herokuapp.com/api/vouchers`
        );
        let join = await res.json();
        console.log(join);
        let data = join[0].vouchers;
        console.log(data);
        show(data);
        showAmount();
    } catch (err) {
        console.log("error", err);
    }
};

getdataObj();

function show(data) {
    document.querySelector("#voucher_list").innerHTML = null;

    data.map(function(el){
        let div = document.createElement("div")
        div.setAttribute("class", "voucher");
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("p");
        name.innerText = el.name;
        let price = document.createElement("p");
        price.innerText = el.price;
        let btn = document.createElement("button");
        btn.innerText = "Buy";
        btn.setAttribute("class", "buy_voucher");
        btn.addEventListener("click", function (){
            getdata(el);
        });

        div.append(image,name,price,btn);
        document.querySelector("#voucher_list").append(div);
    });
    
}
function getdata(data) {
    amt = Number(amt);

    if(amt < data.price) {
        alert("Sorry! insufficient balance")
    } 
    else{
        item = push(data);
        console.log(item);
        amt = amt - data.price;
        showAmount();
        localStorage.setItem("purchase", JSON.stringify(item));
    }
    // localStorage.setItem('purchase', JSON.stringify(el))
    window.location.href = 'purchase.html'
}
function showAmount() {
    amt = Number(amt);
    console.log(amt);
    localStorage.setItem("wallet_balance", amt);

    document.querySelector("#wallet_balance").innerHTML = amt;
}







// let item = JSON.stringify(localStorage.getItem("purchase")) || [];

// const getdataObj = async () => {
//     try {
//         let res = await fetch(
//             `https://masai-vouchers-api.herokuapp.com/api/vouchers`
//         );
//         let join = await res.json();
//         console.log(join);
//         let data = join[0].vouchers;
//         console.log(data);
//         show(data);
//         showAmount();
//     } catch (err) {
//         console.log("error", err);
//     }
// };

// getdataObj();

// function show(data) {
//     document.querySelector("#voucher_list").innerHTML = null;

//     data.map(function(el){
//         let div = document.createElement("div")
//         div.setAttribute("class", "voucher");
//         let image = document.createElement("img");
//         image.src = el.image;
//         let name = document.createElement("p");
//         name.innerText = el.name;
//         let price = document.createElement("p");
//         price.innerText = el.price;
//         let btn = document.createElement("button");
//         btn.innerText = "Buy";
//         btn.setAttribute("class", "buy_voucher");
//         btn.addEventListener("click", function (){
//             getdata(el);
//         });

//         div.append(image,name,price,btn);
//         document.querySelector("#voucher_list").append(div);
//     });
    
// }
// function getdata(data) {
//     amt = Number(amt);

//     if(amt < data.price) {
//         alert("Sorry! insufficient balance")
//     } 
//     else{
//         item = push(data);
//         console.log(item);
//         amt = amt - data.price;
//         showAmount();
//         localStorage.setItem("purchase", JSON.stringify(item));
//     }
//     window.location.href = 'purchase.html'
// }
// function showAmount() {
//     amt = Number(amt);
//     console.log(amt);
//     localStorage.setItem("wallet_balance", amt);

//     document.querySelector("#wallet_balance").innerHTML = amt;
// }