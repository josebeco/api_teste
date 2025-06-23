const rl = "https://api.isevenapi.xyz/api/iseven/"

function run(){
    let link = rl + document.getElementById("inp").value
    const resp = fetch(link)
    .then(response => response.json())
    .then(data => document.getElementById("ans").innerText = !data.iseven);
}

document.getElementById("check").addEventListener("click" , run)
