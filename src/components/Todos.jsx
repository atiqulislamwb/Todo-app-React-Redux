import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, removeAllTodos } from "../actions/todoAction";
import { AiOutlinePlus, AiFillDelete } from "react-icons/ai";
const Todos = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.todos.list);
  console.log(lists);

  return (
    <div className="mt-10">
      <div>
        <h1 className="text-3xl font-serif italic font-bold text-black">
          Add Your Todo List
        </h1>
        <div className=" relative flex justify-center items-center mt-5 ">
          <input
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            type="text"
            className=" h-11 placeholder:text-xl placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pl-4 pr-3  shadow-sm focus:outline-none focus:border-sky-300 focus:ring-sky-300 focus:ring-1 sm:text-sm"
            placeholder="Add items"
          />
          <button
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            className="rounded-md text-center py-2 px-3 text-2xl shadow-sm bg-slate-50 hover:bg-slate-100   "
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>

      <div className="mt-5 flex flex-col-reverse ">
        {lists.map((list) => (
          <div className=" flex  mt-3 " key={list.id}>
            <h3 className="rounded-md bg-sky-100 italic overflow-auto text-black text-2xl py-2 w-64 hover:bg-white ">
              {list.data}
            </h3>
            <button
              onClick={() => dispatch(deleteTodo(list.id))}
              className="rounded-md text-center py-2 px-3 text-2xl shadow-sm bg-slate-50 hover:bg-slate-100 "
            >
              <AiFillDelete />
            </button>
          </div>
        ))}
      </div>
      {lists.length > 0 && (
        <div className="flex justify-center items-center">
          <button
            onClick={() => dispatch(removeAllTodos())}
            className="mt-4 bg-sky-500 text-center text-lg text-black py-3 px-7 italic font-semibold rounded-2xl hover:bg-sky-300 hover:scale-105 duration-500 "
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Todos;
