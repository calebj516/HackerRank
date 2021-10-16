
let btn = document.createElement('Button');
btn.id = 'btn';
btn.innerHTML = '0';
document.body.appendChild(btn);

btn.onclick = function(){
    let clickableBtn = document.getElementById('btn');
    let num = parseInt(clickableBtn.innerHTML) + 1;
    clickableBtn.innerHTML = num.toString();
}