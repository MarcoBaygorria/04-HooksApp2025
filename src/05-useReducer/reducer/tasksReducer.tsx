import * as z from "zod";


interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TasksState {
    todos: Todo[];
    lenght: number;
    completed: number;
    pending: number;
}

export type TaksAction =
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }


//! Validacion de LocalStorage
const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
})

const TasksStateSchema = z.object({
    todos: z.array(TodoSchema),
    lenght: z.number(),
    completed: z.number(),
    pending: z.number()
})



export const getTasksInitialState = (): TasksState => {

    //Local Storage
    const localStorageState = localStorage.getItem('tasks-state');
    if (!localStorageState) {
        return {
            todos: [],
            lenght: 0,
            completed: 0,
            pending: 0
        };
    }
    //Validar mediante Zod
    const result = TasksStateSchema.safeParse(JSON.parse(localStorageState));
    if (result.error) {
        return {
            todos: [],
            lenght: 0,
            completed: 0,
            pending: 0
        };
    }
    return result.data
}


export const tasksReducer = (state: TasksState, action: TaksAction): TasksState => {

    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };
            return {
                ...state,
                todos: [...state.todos, newTodo],
                lenght: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }

        case 'DELETE_TODO': {
            const currentTodos = state.todos.filter((todo) => todo.id !== action.payload)
            return {
                ...state,
                todos: currentTodos,
                lenght: currentTodos.length,
                completed: currentTodos.filter((todo) => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length,
            };
        }

        case 'TOGGLE_TODO': {
            const updateTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            });
            return {
                ...state,
                todos: updateTodos,
                completed: updateTodos.filter((todo) => todo.completed).length,
                pending: updateTodos.filter((todo) => !todo.completed).length,
            };
        }

        default:
            return state;
    }
}