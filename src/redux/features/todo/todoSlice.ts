import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { TodoType } from "../featureTypes";
import { RootState } from "../../store";

const todoAdapter = createEntityAdapter<TodoType>();

const initialState = todoAdapter.getInitialState();

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: todoAdapter.addOne,
  },
});

export const { selectAll: selectAllTodo } = todoAdapter.getSelectors<RootState>(
  (state) => state.todoList
);

export const { addTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
