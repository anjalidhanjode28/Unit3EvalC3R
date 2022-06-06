let item = JSON.parse(localStorage.getItem("purchase")) || [];
show(item)


function show(data) {
    document.querySelector("#purchased_vouchers").innerHTML = null;

    data.map(function(el){
        let div = document.createElement("div")
        
        let image = document.createElement("img");
        image.src = el.image;
        let name = document.createElement("p");
        name.innerText = el.name;
        let price = document.createElement("p");
        price.innerText = el.price;
        let btn = document.createElement("button");
     

        div.append(image,name,price);
        document.querySelector("#purchased_vouchers").append(div);
    });
    
}