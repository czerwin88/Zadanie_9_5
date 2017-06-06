var button = document.getElementsByClassName('button');

console.log(button);

for (var i = 0; i < button.lenght; i++) {
  alert(button[i].innerText);
}
