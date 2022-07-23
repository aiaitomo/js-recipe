const button = document.getElementById("button")

button.onclick = function () {
  alert("クリックしたね")
}
// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (a) {
  console.log(a.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

document.onkeydown = function (u) {
  console.log(u.key)
}
