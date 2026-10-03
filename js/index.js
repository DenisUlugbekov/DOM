// const elForm = document.querySelector(".form")
// const elInput = document.querySelector(".input")
// const elSelect = document.querySelector(".select")
// const elResult1 = document.querySelector(".result1")
// const elResult2 = document.querySelector(".result2")
// const elTitle = document.querySelector(".title")
// const elBody = document.querySelector("body")

// elForm.addEventListener("submit", function (event) {
//   event.preventDefault()

//   let inputValue = elInput.value
//   let selectValue = elSelect.value

//   elResult1.textContent = inputValue
//   elResult2.textContent = selectValue
//   elTitle.textContent = "Fighting..."

//   // style
//   elBody.style.backgroundColor = "red"
// })

// Uyga vazifa

const elForm = document.querySelector(".form")
const elSelect = document.querySelector(".select")
const elInput = document.querySelector("input")
const elTitle = document.querySelector("h1")

elForm.addEventListener("submit", function (event) {
  event.preventDefault()

  let selectValue = elSelect.value
  let inputValue = elInput.value
  let result = Number(inputValue * selectValue)
  elTitle.textContent = result

  console.log(elTitle);


})