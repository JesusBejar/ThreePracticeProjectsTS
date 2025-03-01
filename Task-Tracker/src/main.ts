// get elements
const input = document.querySelector("#task-title") as HTMLInputElement
const addBtn = document.querySelector("#add-task") as HTMLButtonElement;
const localList = document.querySelector("#task-list") as HTMLDivElement
// const saveBtn = document.querySelector("#sync-btn")

console.log('zero')
// event listener to add event to local list
addBtn.addEventListener('click', (e: MouseEvent) => {
    console.log('one')
    e.preventDefault()
    createItem(input.value)
});

// create list item function
function createItem(input: string) {
    console.log('two')
    const item = document.createElement('p')
    item.innerHTML = input
    localList.append(item)
}

// event listener to delete from local list

// event listener to add event to API 

// event listener to delete from API