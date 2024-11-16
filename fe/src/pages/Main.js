import './../index.css'; // Tailwind CSS 파일 import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';

const DEFAULT_IMAGE_1 = '../img/main_1.png';
const DEFAULT_IMAGE_2 = '../img/main_2.png';
const DEFAULT_IMAGE_3 = '../img/main_3.png';

function Main() {
    const navigate = useNavigate();

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

    const goCommunity = async (e) => {
        console.log('커뮤니티 고');
        e.preventDefault();

        navigate("/community");
    };

    const goNotices = async (e) => {
        console.log('공지사항 고');
        e.preventDefault();

        navigate("/notice-post");
    };

    const goPlan = async (e) => {
        console.log('계획 고');
        e.preventDefault();

        navigate("/post2");
    };

    const goPost = async (e) => {
        console.log('기록 고');
        e.preventDefault();

        navigate("/post");
    };



    return (
        <div className="w-full h-[1956px] relative bg-[#fff8f8]">
            <div className="w-full h-[1058px] left-0 top-[172px] absolute bg-gradient-to-b from-[#fff8f8] via-[#f2dede] to-[#9d3535] rounded-bl-[150px] rounded-br-[150px]" />
            <div className="w-full h-[120px] px-[88px] py-[35px] left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
                <div className="w-[1048px] text-[#820000] text-[40px] font-extrabold font-['Inter']" onClick={mainClick}>KLUB</div>
                <div className="justify-start items-center gap-[29px] flex">
                    <button className="text-[#820000] text-xl font-semibold font-['Inter']" onClick={loginClick}>로그인</button>
                    <button className="text-[#820000] text-xl font-semibold font-['Inter']" onClick={joinClick}>회원가입</button>
                </div>
            </div>
            <img className="w-[401px] h-[401px] left-[1122.68px] top-[1133px] absolute origin-top-left rotate-[22.69deg]" src={DEFAULT_IMAGE_2} />
            <img className="w-[367.35px] h-[367.35px] left-[44.99px] top-[1556.57px] absolute origin-top-left rotate-[-18.05deg]" src={DEFAULT_IMAGE_1} />

            <div className="h-[1023px] left-[115px] top-[633px] absolute flex-col justify-start items-start gap-[23px] inline-flex">
                <div className="self-stretch justify-start items-center gap-5 inline-flex">
                    <div className="w-[590px] h-[500px] relative" onClick={goNotices}>
                        <div className="w-[590px] h-[500px] left-0 top-0 absolute bg-white rounded-[15px]" />
                        <div className="left-[419px] top-[406px] absolute text-[#515151] text-[40px] font-semibold font-['Pretendard']">+ more</div>
                        <div className="w-[395px] h-[42px] left-[41px] top-[34px] absolute text-black text-[40px] font-extrabold font-['Pretendard']">총동아리연합회 공지사항</div>
                        <div className="w-[509px] h-[168px] left-[41px] top-[110px] absolute flex-col justify-start items-end inline-flex">
                            <div className="self-stretch h-[42px] text-[#515151] text-[25px] font-medium font-['Pretendard']">복지관 사용 안내</div>
                            <div className="self-stretch h-[42px] text-[#515151] text-[25px] font-medium font-['Pretendard']">2024 동아리 실적 보고서 제출 안내</div>
                            <div className="self-stretch h-[42px] text-[#515151] text-[25px] font-medium font-['Pretendard']">KLUB 사용법</div>
                            <div className="self-stretch h-[42px] text-[#515151] text-[25px] font-medium font-['Pretendard']">2024 동아리의 밤 공지</div>
                        </div>
                    </div>
                    <div className="w-[590px] h-[500px] relative" onClick={goCommunity}>
                        <div className="w-[590px] h-[500px] left-0 top-0 absolute bg-[#d69a9a]/50 rounded-[15px] backdrop-blur-[20px]" />
                        <div className="left-[417px] top-[406px] absolute text-white text-[40px] font-semibold font-['Pretendard']">+ more</div>
                        <div className="w-[334px] h-[42px] left-[40px] top-[34px] absolute text-white text-[40px] font-extrabold font-['Pretendard']">MY 동아리 커뮤니티</div>
                        <div className="h-[168px] left-[40px] top-[110px] absolute flex-col justify-start items-end inline-flex">
                            <div className="self-stretch h-[42px] text-white text-[25px] font-medium font-['Pretendard']">동방 사용 안내</div>
                            <div className="self-stretch h-[42px] text-white text-[25px] font-medium font-['Pretendard']">제 3회 음감회 참여 안내</div>
                            <div className="self-stretch h-[42px] text-white text-[25px] font-medium font-['Pretendard']">스피커 사용법</div>
                            <div className="self-stretch h-[42px] text-white text-[25px] font-medium font-['Pretendard']">2024 동아리의 밤 공지</div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch justify-start items-center  inline-flex">
                    <div className="h-[500px] gap-5 justify-between items-center flex">
                        <div className="w-[590px] h-[500px] px-40 py-24 bg-[#d69a9a]/50 rounded-[15px] backdrop-blur-[30px] flex-col justify-start items-center gap-[26px] inline-flex">
                            <div className="text-center text-white text-[64px] font-extrabold font-['Inter']">TODAY</div>
                            <div className="w-[200px] h-[0px] border-4 border-white"></div>
                            <div className="text-center text-white text-[56px] font-semibold font-['Inter']">2024년<br />11월 16일</div>
                        </div>
                        <div className="w-[590px] flex-col justify-start items-start gap-[15px] inline-flex">
                            <div className="w-[590px] h-60 relative" onClick={goPost}>
                                <div className="w-[590px] h-60 left-0 top-0 absolute bg-white/70 rounded-[15px] backdrop-blur-[30px]" />
                                <div className="w-[359px] h-[98px] left-[28px] top-[34.50px] absolute text-black text-[40px] font-semibold font-['Pretendard']">동아리 활동 기록<br />쓰러 가기</div>
                            </div>
                            <div className="w-[590px] h-60 relative h-60 left-0 top-0 absolute bg-white/70 rounded-[15px] backdrop-blur-[30px]" onClick={goPlan}>
                                <div className="w-[324px] h-[98.04px] left-[28px] top-[34.72px] absolute text-black text-[40px] font-semibold font-['Pretendard']">동아리 활동 계획<br />쓰러 가기</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="w-[503px] h-[503px] left-[116px] top-[130px] absolute" src={DEFAULT_IMAGE_3} />
            <div className="left-[783px] top-[455px] absolute text-right text-white text-[50px] font-extrabold font-['Pretendard']">광운대학교  중앙동아리<br />관리 페이지 KLUB 입니다. </div>
        </div>


    )
}

export default Main;
