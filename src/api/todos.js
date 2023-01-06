import myAxios from "./myAxios";

const END_POINT = {
    TODOS: "todos"
}

export const getTodosAPI = () => {
    return myAxios.get(END_POINT.TODOS)
}

export const delTodosAPI = (id) => {
    return myAxios.delete(`${END_POINT.TODOS}/${id}`)
}

export const addTodosAPI = (todo) => {
    return myAxios.post(`${END_POINT.TODOS}` , todo)
}

export const editTodosAPI = (todo) => {
    return myAxios.put(`${END_POINT.TODOS}` , todo)
}


