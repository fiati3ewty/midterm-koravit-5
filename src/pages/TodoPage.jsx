import { Link, useLoaderData, useNavigate } from 'react-router';
import React, { useEffect, useState } from 'react';
import api from '../api/mainApi';
import { useUserStore } from '../stores/userStore';
import { toast } from 'react-toastify';
import TodoList from '../compnents/TodoList';

function TodoPage() {
  const todos = useLoaderData();
  const navigate = useNavigate();

  const [addPost, setAddPost] = useState({
    content: '',
  });

  const hdlAddPostChange = (e) => {
    setAddPost((prve) => ({ content: e.target.value }));
  };

  const hdlAddPost = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/todosv2', addPost);
      console.log('Access add psot => res', res);
    } catch (error) {
      console.log('Add post error => ', error);
    }
  };

  // useEffect(() => {
  //   return navigate('/todo', { replace: true });
  // }, [hdlAddPost]);

  return (
    <div>
      <div className="w-[70%] h-screen mx-auto flex items-center justify-center bg-[#f1f5f9]">
        <div className="w-120 h-auto rounded-2xl bg-[#ffffff] flex flex-col items-center gap-2 p-8 shadow-xl">
          <div className="flex items-center justify-between w-full mx-auto my-2">
            <div className="text-3xl font-bold">My Todo</div>
            <img
              src="src/assets/rocket-icon.png"
              width="35px"
            />
          </div>
          <form
            className="flex w-full items-center justify-between"
            onClick={hdlAddPost}
          >
            <input
              type="text"
              name="new_task"
              placeholder="new task"
              className="outline-none w-full"
              value={addPost.content}
              onChange={() => hdlAddPostChange()}
            />
            <button className="w-20 h-8 rounded-4xl text-[#b6ffff] text-[14px] font-bold bg-[#0284c8] shadow-lg my-2 cursor-pointer">
              Add
            </button>
          </form>
          <hr className="border w-full" />

          <ul className="flex flex-col justify-between w-full">
            {todos.map((todo, index) => (
              <TodoList
                key={index}
                todoData={todo}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
