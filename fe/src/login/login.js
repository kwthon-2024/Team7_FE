import './../index.css'; // Tailwind CSS 파일 import
import React from 'react';


function Login() {
    return (
<div className="w-[1440px] h-[1024px] relative bg-[#fff8f8]">
  <div className="w-[753px] h-[587px] left-[343px] top-[278px] absolute bg-white rounded-[15px] shadow" />
  <div className="w-[178px] h-[61px] left-[631px] top-[338px] absolute text-center text-black text-[50px] font-semibold font-['Pretendard']">로그인</div>
  <div className="w-[178px] h-[61px] left-[631px] top-[338px] absolute text-center text-black text-[50px] font-semibold font-['Pretendard']">로그인</div>
  <div className="h-[272px] left-[453px] top-[458px] absolute flex-col justify-center items-start gap-4 inline-flex">
    <div className="w-[534px] h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] inline-flex">
      <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">학번</div>
    </div>
    <div className="w-[534px] h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] inline-flex">
      <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">비밀번호</div>
    </div>
    <div className="w-[534px] h-20 px-[30px] py-[25px] bg-[#820000] rounded-[10px] border-2 border-[#820000] justify-center items-center gap-[5px] inline-flex">
      <div className="text-white text-3xl font-black font-['Pretendard']">로그인</div>
    </div>
  </div>
  <div className="w-[1440px] h-[120px] px-[88px] py-[35px] left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
    <div className="w-[1048px] text-[#820000] text-[40px] font-extrabold font-['Inter']">KLUB</div>
    <div className="justify-start items-center gap-[29px] flex">
      <div className="text-[#820000] text-xl font-semibold font-['Inter']">로그인</div>
      <div className="text-[#820000] text-xl font-semibold font-['Inter']">회원가입</div>
    </div>
  </div>
</div> )
}

export default Login;
