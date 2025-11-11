import { Todo } from "../models/todo.models"

/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if (!todo) throw new Error('A TODO object is requiered')

    //const { done, description, id } = todo

    const html = `<div class="view">
          <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''} />
          <label>${todo.description}</label>
          <input class="edit" value="Create a TodoMVC template" />
          <button class="destroy"></button>
        </div>`

    const liElement = document.createElement('li')
    liElement.innerHTML = html
    liElement.setAttribute('data-id', todo.id)
    if (todo.done)
        liElement.classList.add('completed')
    return liElement

}