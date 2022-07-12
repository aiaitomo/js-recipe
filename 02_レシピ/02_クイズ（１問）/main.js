const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")

//クイズの内容

const quiz = {
  text: "この星はなんでしょうか",
  Image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ゴリアテ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

//quizを画面に表示する関数
const reloadQuiz = function () {
  quizText.textContent = "Q." + quiz.text
  quizImage.src = "./images/" + quiz.Image

  choice1.textContent = quiz.choice[0].text
  choice2.textContent = quiz.choice[1].text
  choice3.textContent = quiz.choice[2].text
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  choose(0)
}
choice1.onclick = function () {
  choose(1)
}
choice1.onclick = function () {
  choose(2)
}

reloadQuiz()
