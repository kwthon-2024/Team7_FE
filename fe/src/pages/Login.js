import './../index.css'; // Tailwind CSS 파일 import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';


function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',    
    password: ''
  });

  // 값이 바뀔 때 마다 실행되는 함수
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
  };

  // 메인 페이지로 이동
  const mainClick = () => {
    console.log('로고 클릭');
    navigate('/');
  }

  // 회원가입 페이지로 이동
  const joinClick = () => {
    console.log('회원가입 버튼 클릭');
    navigate('/join');
  }


  // 로그인 페이지로 이동
  const loginClick = () => {
    console.log('로그인 버튼 클릭');
    navigate('/login');
  }

  // 로그인 버튼을 눌렀을 때 실행되는 함수
    const handleSubmit = async (e) => {
      console.log('로그인 하기 버튼 누름');

      e.preventDefault();

      if (!formData.email) {
          alert('이메일을 입력해주세요.');
          return;
      }

      if (!formData.password) {
          alert('비밀번호를 입력해주세요.');
          return;
      }

      try {
          const response = await axiosInstance.post(`${process.env.REACT_APP_DB_HOST}/api/users/login`, formData, {
            headers: {
              'Content-Type': 'application/json',
            }}
          );

          // 토큰을 로컬 스토리지에 저장
          localStorage.setItem('token', response.data.data.accessToken);

          // 메인 페이지로 이동
          navigate("/");

      } catch (error) {
          alert('이메일 또는 비밀번호가 일치하지 않습니다.');
          // console.error('로그인 실패:', error); // 오류가 발생한 경우 출력
          setFormData({
              email: '',    
              password: ''
          });
      }
    };


    return (
      <div className="w-[100%] h-[1024px] relative bg-[#fff8f8]">
        <div className="w-[753px] h-[587px] left-[343px] top-[278px] absolute bg-white rounded-[15px] shadow" />
        <div className="w-[178px] h-[61px] left-[631px] top-[338px] absolute text-center text-black text-[50px] font-semibold font-['Pretendard']">로그인</div>
        <div className="w-[178px] h-[61px] left-[631px] top-[338px] absolute text-center text-black text-[50px] font-semibold font-['Pretendard']">로그인</div>
        <form className="h-[272px] left-[453px] top-[458px] absolute flex-col justify-center items-start gap-4 inline-flex" onSubmit={handleSubmit}>
      
          {/* 이메일 입력 */}
          <div className="w-[534px] h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] inline-flex">
            <input type="email" className="text-[#000000] text-[25px] font-normal font-['Pretendard']" placeholder="이메일" name="email" value={formData.email} onChange={handleChange} />
          </div>

          {/* 비밀번호 입력 */}
          <div className="w-[534px] h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] inline-flex">
            <input type="password" className="text-[#000000] text-[25px] font-normal font-['Pretendard']" placeholder="비밀번호" name="password" value={formData.password} onChange={handleChange} />
          </div>

          {/* 로그인 버튼 */}
          <div className="w-[534px] h-20 px-[30px] py-[25px] bg-[#820000] rounded-[10px] border-2 border-[#820000] justify-center items-center gap-[5px] inline-flex">
            <button type="submit" className="text-white text-3xl font-black font-['Pretendard']" >로그인</button>
          </div>

        </form>
        <div className="w-[1440px] h-[120px] px-[88px] py-[35px] left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
          <div className="w-[1048px] text-[#820000] text-[40px] font-extrabold font-['Inter']" onClick={mainClick}>KLUB</div>
          <div className="justify-start items-center gap-[29px] flex">
            <button className="text-[#820000] text-xl font-semibold font-['Inter']" onClick={loginClick}>로그인</button>
            <button className="text-[#820000] text-xl font-semibold font-['Inter']" onClick={joinClick}>회원가입</button>
          </div>
        </div>
      </div> 
    )
}

export default Login;
