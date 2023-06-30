import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../config/store';
export declare const todosSlice: import("@reduxjs/toolkit").Slice<{
    todos: Todo[];
}, {
    addTodo: (state: import("immer/dist/internal").WritableDraft<{
        todos: Todo[];
    }>, action: PayloadAction<Todo>) => void;
    editTodo: (state: import("immer/dist/internal").WritableDraft<{
        todos: Todo[];
    }>, action: PayloadAction<Todo>) => void;
    resetEdit: (state: import("immer/dist/internal").WritableDraft<{
        todos: Todo[];
    }>) => void;
    saveTodo: (_: import("immer/dist/internal").WritableDraft<{
        todos: Todo[];
    }>, action: PayloadAction<Todo>) => void;
    deleteTodo: (state: import("immer/dist/internal").WritableDraft<{
        todos: Todo[];
    }>, action: PayloadAction<Todo>) => void;
    deleteAllTodos: (state: import("immer/dist/internal").WritableDraft<{
        todos: Todo[];
    }>) => void;
}, "todos">;
export declare const addTodo: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Todo, "todos/addTodo">, editTodo: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Todo, "todos/editTodo">, saveTodo: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Todo, "todos/saveTodo">, resetEdit: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"todos/resetEdit">, deleteTodo: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<Todo, "todos/deleteTodo">, deleteAllTodos: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"todos/deleteAllTodos">;
export declare const selectTodos: (state: RootState) => {
    todos: Todo[];
};
declare const _default: import("redux").Reducer<{
    todos: Todo[];
}>;
export default _default;
