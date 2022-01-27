
setDraggable()

const dropzones = document.querySelectorAll('[sc-dropzone]')
dropzones.forEach(dropzone => {
  dropzone.ondragover = e => e.preventDefault()
  dropzone.ondrop = function(e) {
    const id = e.dataTransfer.getData('item-id')
    const item = document.getElementById(id)
    dropzone.appendChild(item)
  }
})

const addButton = document.querySelector('[sc-addButton]')

const addBox = document.querySelector('[sc-addTask]')
const toDoList = document.querySelector('[sc-toDoList')

addButton.addEventListener('click', function(){
  
  const taskToAdd = document.createElement('div')
  taskToAdd.classList.add('list-item')
  taskToAdd.setAttribute('sc-list-item',"")
  taskToAdd.innerText = addBox.value
  toDoList.appendChild(taskToAdd)
  setDraggable()
})

function setDraggable(){
  const items = document.querySelectorAll('[sc-list-item]')
items.forEach((item, index) => {
  item.draggable = true
  item.id = item.id || `draggable-item-${index}`
  item.ondragstart = e => {
    e.dataTransfer.setData('item-id', e.target.id)
  }
})
}
