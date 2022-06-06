var signup = JSON.parse(localStorage.getItem("user")) || [];

document.querySelector("#form").addEventListener("submit", submitData);

function submitData(event){
    event.preventDefault();

    var signObj = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        address : document.querySelector("#address").value,
        wallet : document.querySelector("#amount").value,
    }
    
signup.push(signObj);
console.log(signup);
localStorage.setItem("user",JSON.stringify(signup));
}
