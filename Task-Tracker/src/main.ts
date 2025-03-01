// get elements
const input = document.querySelector("#task-title") as HTMLInputElement
const addBtn = document.querySelector("#add-task") as HTMLButtonElement;
const localList = document.querySelector("#task-list") as HTMLDivElement
const saveBtn = document.querySelector("#sync-btn")

console.log('zero')
// event listener to add event to local list
addBtn?.addEventListener('click', (e: MouseEvent) => {
    console.log('one')
    e.preventDefault()
    createItem(input.value)
});

// create list item function
function createItem(input: string) {
    console.log('two')
    const item = `
        <div class="task" data-id="temp-${Date.now()}">
      <input type="checkbox" class="task-check">
      <span class="task-title">${input}</span>
      <button class="delete-btn" id="delete-btn">Delete</button>
    </div>`;
    // beforeend means inside the HTML, afterbegin moves most recently made task to the top
    localList.insertAdjacentHTML("beforeend", item)
}
console.log('four')

// event listener to delete from local list
localList?.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement
    // contains() === include()??
    if (target.classList.contains("delete-btn")) {
        console.log('five')
        const taskElement = target.closest(".task") as HTMLDivElement
        taskElement.remove()
    }

})

// event listener to add event to API 

// event listener to delete from API