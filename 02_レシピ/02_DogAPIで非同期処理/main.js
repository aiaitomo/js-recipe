const imageElemennt = document.getElementById("dog-image")

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    imageElemennt.src = data.message
  })
