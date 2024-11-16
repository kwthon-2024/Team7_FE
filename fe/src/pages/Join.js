import './../index.css'; // Tailwind CSS 파일 import
import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';


function Join() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        passwordCheck: '',
        studentNumber: '',
        clubName: '',
        clubRole: '',
        grade: ''
    });

    // 값이 바뀔 때 마다 실행되는 함수
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleChangeRole = (event) => {
        setFormData({
          ...formData,
          clubRole: event.target.value, // 선택된 값을 clubRole에 저장
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

  // 회원가입버튼 눌렀을 때 실행되는 함수
  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();

    const password_REG = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/;

    if (!password_REG.test(formData.password)) {
        alert("비밀번호는 영어와 숫자를 포함한 8~20자리여야 합니다.");
        return;
    }

    if (formData.password !== formData.passwordCheck) {
        alert("비밀번호가 일치하지 않습니다.");
        setFormData({ ...formData, passwordCheck: '' });
        return;
    }

    let formDataToSend = { ...formData };
    delete formDataToSend.passwordCheck;

    formDataToSend = {
        ...formDataToSend,
        grade: Number(formData.grade), // studentNumber만 숫자로 변환
      };

    
    // console.log(formDataToSend);

    // 회원가입 요청
    try {
        const response = await axiosInstance.post(`${process.env.REACT_APP_DB_HOST}/api/users/sign-up`, formDataToSend, {
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(response)
        
        navigate("/login");
    } catch (error) {
        alert('회원가입에 실패했습니다.');
    }
};

    return (
        <div className="w-[1440px] h-[2030px] relative bg-[#fff8f8]">
            <div className="h-[1674px] px-[42px] pt-[54px] pb-[177px] left-[120px] top-[174px] absolute bg-white rounded-[5px] shadow flex-col justify-center items-center gap-2.5 inline-flex">
                <form className="w-[1084px] h-[1443px] flex-col justify-center items-center gap-[65px] flex" onSubmit={handleSubmit}>
                    <div className="self-stretch h-[61px] text-center text-black text-[50px] font-semibold font-['Pretendard']" >회원가입</div>
                    <div className="h-[134px] flex-col justify-start items-start gap-[18px] flex">
                        <div className="self-stretch text-black text-3xl font-semibold font-['Pretendard']">개인정보</div>
                        <div className="self-stretch h-20 flex-col justify-start items-start gap-[18px] flex">
                            <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                <div className="grow shrink basis-0 h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] flex">
                                    <input type="text" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" placeholder="이름" name="name" value={formData.name} onChange={handleChange} />
                                </div>
                                <div className="grow shrink basis-0 h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] flex">
                                    <input type="text" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" placeholder="학번" name="studentNumber" value={formData.studentNumber} onChange={handleChange} />
                                </div>
                                <div className="grow shrink basis-0 h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] flex">
                                    <input type="number" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" placeholder="학년" name="grade" value={formData.grade} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[328px] flex-col justify-start items-start gap-[18px] flex">
                        <div className="self-stretch text-black text-3xl font-semibold font-['Pretendard']">로그인 정보</div>
                        <div className="self-stretch h-[274px] flex-col justify-start items-start gap-[18px] flex">
                            <div className="self-stretch justify-start items-center gap-4 inline-flex">
                                <div className="w-[1084px] h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] flex">
                                    <input type="email" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" placeholder="아이디/메일" name="email" value={formData.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="self-stretch h-44 flex-col justify-center items-start gap-4 flex">
                                <div className="self-stretch h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] flex-col justify-center items-start gap-2.5 flex">
                                    <input type="password" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" placeholder="비밀번호" name="password" value={formData.password} onChange={handleChange} />
                                </div>
                                <div className="self-stretch h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] flex-col justify-center items-start gap-2.5 flex">
                                    <input type="password" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" placeholder="비밀번호 확인" name="passwordCheck" value={formData.passwordCheck} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-[134px] flex-col justify-start items-start gap-[18px] flex">
                        <div className="self-stretch text-black text-3xl font-semibold font-['Pretendard']">가입된 동아리 정보</div>
                        <div className="self-stretch h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 inline-flex">
                            <input type="text" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" placeholder="동아리 이름" name="clubName" value={formData.clubName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="h-[138px] flex-col justify-start items-start gap-[22px] flex">
                        <div className="self-stretch text-black text-3xl font-semibold font-['Pretendard']">직책</div>
                        
                        <form className="self-stretch justify-center items-center gap-[23px] inline-flex">
                            
                            <div className="grow shrink basis-0 h-20 px-[100px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 flex">
                                <input type="radio" id="option1" name="option" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" value="LEADER" checked={formData.clubRole === "LEADER"} onChange={handleChangeRole} />
                                <label for="option1">회장</label>
                            </div>
                            
                            <div className="grow shrink basis-0 h-20 px-[100px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 flex">
                                <input type="radio" id="option2" name="option" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" value="MEMBER" checked={formData.clubRole === "MEMBER"} onChange={handleChangeRole} />
                                <label for="option2">부원</label>
                            </div>
                            
                            <div className="grow shrink basis-0 h-20 px-[100px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 flex">
                                <input type="radio" id="option3" name="option" className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']" value="ADMIN" checked={formData.clubRole === "ADMIN"} onChange={handleChangeRole} />
                                <label for="option3">총동아리연합회</label>
                            </div>

                        </form>

                    </div>
                    <div className="w-[1084px] h-20 px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <button type="submit" className="text-white text-xl font-semibold font-['Pretendard']">가입</button>
                    </div>
                </form>
            </div>
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

export default Join;
