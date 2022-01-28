const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("display-memo")

addButton.onclick = function () {
  const text = memoInput.value

  // card を作成
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  card.append(todo)

  // card を container の中に追加する
  memoContainer.append(card)

  //削除ボタンの作成
  const deleteButton = document.createElement("button")
  deleteButton.className = "delete-button",

  card.append(deleteButton)

  deleteButton.onclick = function(){
    card.remove()
  };

  // 入力欄を空にする
  memoInput.value = ""

 
}
