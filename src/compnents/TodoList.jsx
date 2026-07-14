import React, { useState } from 'react';
import api from '../api/mainApi';

function TodoList({ todoData }) {
  const [isChecked, setIsChecked] = useState(false);
  const [isEnableEdit, setEnableEdit] = useState(false);
  const [updateTodo, setUpdateTodo] = useState({
    content: '',
    isdone: '',
  });

  const hdlDelete = async (id) => {
    const res = await api.delete(`/todosv2/delete/${id}`);
    // console.log('Delete => ', id);
  };

  const hdlEdit = () => {};

  const hdlChecked = async (e) => {
    setIsChecked(e.target.checked);
    setUpdateTodo((prve) => ({
      ...updateTodo,
      content: todoData.content,
      isdone: e.target.checked,
    }));
    // console.log('CHecked', `${isChecked}, ${updateTodo.isdone}`);
    try {
      const res = await api.patch(`/todosv2/update/${todoData.id}`, updateTodo);
    } catch (error) {
      console.log('Error update=>', error);
    }
  };

  //   const hdlEditTodo = async (id) => {
  //     const res = await api.patch(`/todosv2/update/${id}`);
  //   };

  return (
    <div>
      <div className="flex gap-3 py-2 items-center">
        <input
          type="checkbox"
          className="w-8 h-8"
          checked={isChecked}
          onChange={hdlChecked}
        />
        <input
          name="content"
          className="w-full"
          value={todoData.content}
          disabled={true}
        />
        <button
          className="w-32 h-8 rounded-4xl text-gray-500 text-[14px] font-bold bg-gray-100 shadow-lg my-2 cursor-pointer flex flex-row items-center justify-center gap-2 mx-2"
          onClick={() => hdlEdit()}
        >
          Edit
          <img
            src="src/assets/pencil-icon.svg"
            width="15px"
          />
        </button>
        <label
          className="text-gray-400 text-xl cursor-pointer"
          name={todoData.id}
          onClick={() => hdlDelete(todoData.id)}
        >
          X
        </label>
      </div>
    </div>
  );
}

export default TodoList;
