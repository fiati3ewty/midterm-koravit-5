import { Link } from 'react-router';
import React, { useState } from 'react';
import api from '../api/mainApi';

function RegisterPage() {
  const [formRegister, setFormRegister] = useState({
    registerUser: {
      username: '',
      password: '',
    },
  });

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setFormRegister((prve) => ({
      ...formRegister.registerUser,
      [name]: value,
    }));
  };

  const hdlSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post('/auth/register', formRegister);
      console.log('Register res', res);
    } catch (error) {
      console.log('Error register', error);
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
              //   height="20px"
            />
          </div>
          <div className="text-3xl font-bold">Register</div>
          <div className="text-[14px] text-[#a1abb3]">
            สร้างบัญชีผู้ใช้ใหม่สำหรับเข้าสอบ
          </div>
          <form
            action="#"
            onClick={hdlSignUp}
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
                className="text-[14px] w-60 outline-none"
                placeholder="password"
                onChange={hdlChange}
              />
            </div>
            <div className="bg-[#f9fbfc] border border-[#d1d5d8] w-80 h-10 flex items-center rounded-lg my-4">
              <img
                className="p-3 w-10 h-10"
                src="src/assets/shield-icon.png"
              />
              <input
                name="confirm_password"
                className="text-[14px] w-60 outline-none"
                placeholder="confirm password"
                onChange={hdlChange}
              />
            </div>
            <button className="w-80 h-10 rounded-lg text-[#b6ffff] text-[14px] font-bold bg-[#0284c8] shadow-lg my-2 cursor-pointer">
              SIGN UP
            </button>
          </form>
          <div className="text-[14px] text-[#a1abb3]">
            Already have an account?
            <Link
              to="/"
              className="text-[#0284c8] font-bold"
            >
              {' '}
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
