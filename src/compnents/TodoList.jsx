import React, { useState } from 'react';
import api from '../api/mainApi';

function TodoList({ todoData }) {
  const [isChecked, setChecked] = useState(false);
  const [isEnableEdit, setEnableEdit] = useState(false);
  const [updateTodo, setupdateTodo] = useState({
    content: '',
    isdone: false,
  });

  const hdlChecked = (e) => {
    setChecked(e.target.checked);
  };

  const hdlEditDelete = async (id, activity) => {
    if (activity == 'delete') {
      const res = await api.delete(`/todosv2/delete/${id}`);
      // console.log('Delete => ', id);
    } else if (activity == 'edit') {
      const res = await api.patch(`/todosv2/update/${id}`, updateTodo);
      //   console.log('Update todo => ', res);
    } else if (activity == 'isDone') {
      const res = await api.patch(`/todosv2/update/${id}`, updateTodo);
      console.log('isDone=>', isDone);
    }
  };

  const hdlEditTodo = async (id) => {
    const res = await api.patch(`/todosv2/update/${id}`);
  };

  return (
    <div>
      <div className="flex gap-3 py-2 items-center">
        <input
          type="checkbox"
          className="w-8 h-8"
          checked={isChecked}
          onChange={() => hdlEditDelete(todoData.id, 'isDone')}
        />
        <input
          className="w-full"
          value={todoData.content}
          disabled={true}
        />
        <button
          className="w-32 h-8 rounded-4xl text-gray-500 text-[14px] font-bold bg-gray-100 shadow-lg my-2 cursor-pointer flex flex-row items-center justify-center gap-2 mx-2"
          onClick={() => hdlEditDelete(todoData.id, 'edit')}
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
          onClick={() => hdlEditDelete(todoData.id, 'delete')}
        >
          X
        </label>
      </div>
    </div>
  );
}

export default TodoList;
