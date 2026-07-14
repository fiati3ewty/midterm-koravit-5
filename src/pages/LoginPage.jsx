import { Link, useNavigate } from 'react-router';
import React, { useState } from 'react';
import api from '../api/mainApi';
import { useUserStore } from '../stores/userStore';
import { toast } from 'react-toastify';
import { loginSchemas } from '../schemas/loginSchemas';

function LoginPage() {
  const [formLogin, setFormLogin] = useState({
    username: 'Fiat5',
    password: 'password5',
  });

  const navigate = useNavigate();

  const setUsername = useUserStore((stage) => stage.setUsername);
  const setToken = useUserStore((stage) => stage.setToken);

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setFormLogin((prve) => ({ ...formLogin, [name]: value }));
  };

  const hdlLogin = async (e) => {
    e.preventDefault();

    const validateResult = loginSchemas.safeParse(formLogin);
    if (!validateResult.success) {
      const { username, password } = validateResult.error.flatten().fieldErrors;
      if (username) {
        toast.error(username[0]);
      }
      if (password) {
        toast.error(password[0]);
      }
      return;
    }

    try {
      const res = await api.post('/auth/login', formLogin);
      // console.log('Login', res.data.user);
      const { username, token } = res.data.user;
      setUsername(username);
      setToken(token);
      navigate('/todo', { replace: true });
      toast.success('Login Complete');
    } catch (error) {
      console.log('Error Login', error);
      toast.info('Login Fail !!');
    }
  };

  return (
    <div>
      <div className="w-[70%] h-screen mx-auto flex items-center justify-center bg-[#f1f5f9]">
        <div className="w-100 h-auto rounded-2xl bg-[#ffffff] flex flex-col items-center gap-2 p-8 shadow-xl">
          <div className="flex items-center justify-center w-12.5 h-12.5 bg-[#e2f2ff] rounded-2xl border border-[#cbe1ee]">
            <img
              src="src/assets/add-user.png"
              width="23px"
            />
          </div>
          <div className="text-3xl font-bold">Welcome</div>
          <div className="text-[14px] text-[#a1abb3]">
            ล๊อกอินเพื่อเข้าสูาระบบทดสอบ Frontend Dev
          </div>
          <form
            action="#"
            onSubmit={hdlLogin}
          >
            <div className="bg-[#f9fbfc] border border-[#d1d5d8] w-80 h-10 flex items-center rounded-lg my-4">
              <img
                className="p-3 w-10 h-10"
                src="src/assets/user-icon.png"
              />
              <input
                name="username"
                className="text-[14px] w-60 outline-none"
                placeholder="username"
                value={formLogin.username}
                onChange={hdlChange}
              />
            </div>
            <div className="bg-[#f9fbfc] border border-[#d1d5d8] w-80 h-10 flex items-center rounded-lg my-4">
              <img
                className="p-3 w-10 h-10"
                src="src/assets/lock-icon.png"
              />
              <input
                name="password"
                type="password"
                className="text-[14px] w-60 outline-none"
                placeholder="password"
                value={formLogin.password}
                onChange={hdlChange}
              />
            </div>
            <button className="w-80 h-10 rounded-lg text-[#b6ffff] text-[14px] font-bold bg-[#0284c8] shadow-lg my-2 cursor-pointer">
              LOG IN
            </button>
          </form>
          <div className="text-[14px] text-[#a1abb3]">
            Don't have an account?
            <Link
              to="/register"
              className="text-[#0284c8] font-bold"
            >
              {' '}
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
