import "./App.css";
import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { addTodo, selectAllTodo } from "./redux/features/todo/todoSlice";
import {
  createCategory,
  selectAllCategories,
  selectCategoryById,
} from "./redux/features/category/categorySlice";
import store from "./redux/store";
import {
  createSubCategory,
  selectAllSubCategories,
  selectSubCategoryById,
} from "./redux/features/subCategory/subCategorySlice";

function App() {
  const categoryIdRef = useRef<HTMLInputElement>(null);
  const subCategoryIdRef = useRef<HTMLInputElement>(null);
  const parentForSubCategory = useRef<HTMLInputElement>(null);
  const todoIdRef = useRef<HTMLInputElement>(null);
  const parentForTodoRef = useRef<HTMLInputElement>(null);

  const todoList = useAppSelector(selectAllTodo);
  const categories = useAppSelector(selectAllCategories);
  const subCategories = useAppSelector(selectAllSubCategories);
  // const category = useAppSelector((state) =>
  //   selectCategoryById(state, "category1")
  // );
  const dispatch = useAppDispatch();

  // const entityTodo = useAppSelector((state) => state.todoList);
  // console.log(entityTodo);

  const createNewCategory = () => {
    const id = categoryIdRef.current?.value || "";
    dispatch(
      createCategory({
        id,
        name: id + " Category",
        description: id + " category description",
      })
    );
  };

  const createNewSubCategory = () => {
    const id = subCategoryIdRef.current?.value || "";
    const parentId = parentForSubCategory.current?.value || "";
    const rootCategory = selectCategoryById(store.getState(), parentId);
    const subCategory = selectSubCategoryById(store.getState(), parentId);
    if (rootCategory || subCategory) {
      dispatch(
        createSubCategory({
          id,
          name: id + "Sub Category",
          description: id + " description",
          parent: parentId,
        })
      );
    }
  };

  const addNewTodo = () => {
    const id = todoIdRef.current?.value || "";
    const parentId = parentForTodoRef.current?.value || "";
    const rootCategory = selectCategoryById(store.getState(), parentId);
    const subCategory = selectSubCategoryById(store.getState(), parentId);
    if (rootCategory || subCategory)
      dispatch(
        addTodo({
          id,
          title: id + " Title",
          description: id + " des",
          parent: parentId,
        })
      );
  };

  return (
    <div className="container mx-auto my-5">
      <div className="flex flex-col mb-5 gap-5">
        <div className="space-x-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter id"
            ref={categoryIdRef}
          />
          <button className="btn" onClick={createNewCategory}>
            Create Category
          </button>
        </div>
        <div className="space-x-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter id"
            ref={subCategoryIdRef}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter parent id"
            ref={parentForSubCategory}
          />
          <button className="btn" onClick={createNewSubCategory}>
            Create Sub Category
          </button>
        </div>
        <div className="space-x-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter id"
            ref={todoIdRef}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Enter parent id"
            ref={parentForTodoRef}
          />
          <button className="btn" onClick={addNewTodo}>
            Add Todo
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="p-5 bg-slate-300 overflow-auto">
          <h1 className="text-xl font-bold">Category</h1>
          <pre>{JSON.stringify(categories, null, 2)}</pre>
        </div>
        <div className="p-5 bg-slate-300 overflow-auto">
          <h1 className="text-xl font-bold">Sub Categories</h1>
          <pre>{JSON.stringify(subCategories, null, 2)}</pre>
        </div>
        <div className="p-5 bg-slate-300 overflow-auto">
          <h1 className="text-xl font-bold">Todo List</h1>
          <pre>{JSON.stringify(todoList, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default App;
