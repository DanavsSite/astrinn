// prettier-ignore-start
const buttons = document.querySelectorAll('button[material]');
console.log(buttons);
buttons.forEach((button) => {
  button.onclick = function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple")
    button.append(ripple)
    setTimeout(function () {
      ripple.remove();
    }, 600) // 1second = 1000ms
  }
})

//prettier-ignore-end
