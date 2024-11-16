import './../index.css'; // Tailwind CSS 파일 import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';
import axios from 'axios';
import GenerateImage from '.././aI.js';


function Post2() {
    const [isFormOpen1, setIsFormOpen1] = useState(true); // 섹션 1 열림 상태
    const [isFormOpen2, setIsFormOpen2] = useState(true); // 섹션 2 열림 상태
    const [selectedDate, setSelectedDate] = useState('');
    const [uploadedImage, setUploadedImage] = useState(null);

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
        console.log('Selected Date:', e.target.value);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadedImage(URL.createObjectURL(file)); // 이미지 미리보기 URL 생성
            console.log('Uploaded Image:', file);
        }
    };

    // 폼 데이터 상태
    const [clubName, setClubName] = useState('');
    const [clubDepartment, setClubDepartment] = useState('');
    const [clubMember, setClubMember] = useState('');
    const [clubProfessor, setClubProfessor] = useState('');
    const [professorDepartment, setProfessorDepartment] = useState('');

    const [leaderName, setLeaderName] = useState('');
    const [leaderDepartment, setLeaderDepartment] = useState('');
    const [leaderGrade, setLeaderGrade] = useState('');
    const [leaderStudentNumber, setLeaderStudentNumber] = useState('');
    const [leaderPhoneNumber, setLeaderPhoneNumber] = useState('');

    // 저장 버튼 클릭 시 모든 데이터 처리
    const handleSave = () => {
        const allData = {
            clubInfo: {
                name: clubName,
                department: clubDepartment,
                memberCount: clubMember,
                professor: clubProfessor,
                professorDepartment: professorDepartment,
            },
            leaderInfo: {
                name: leaderName,
                department: leaderDepartment,
                grade: leaderGrade,
                studentNumber: leaderStudentNumber,
                phoneNumber: leaderPhoneNumber,
            },
        };

        console.log('저장된 데이터:', allData);

        // 저장 후 폼 닫기
        setIsFormOpen1(false);
        setIsFormOpen2(false);
    };

    // 섹션 열림/닫힘 토글
    const toggleSection1 = () => {
        setIsFormOpen1((prev) => !prev);
    };

    const toggleSection2 = () => {
        setIsFormOpen2((prev) => !prev);
    };

    return (
        <div className="w-[full] h-[3463px] relative bg-[#fff8f8]">
            <div className="w-[1440px] h-[120px] px-[88px] py-[35px] left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
                <div className="w-[1048px] text-[#820000] text-[40px] font-extrabold font-['Inter']">KLUB</div>
            </div>

            <div className="w-[844px] h-[3092px] left-[298px] top-[156px] absolute flex-col justify-start items-center gap-[39px] inline-flex">
                <div className="self-stretch text-center text-black text-[40px] font-bold font-['Inter']">활동 기록</div>
                <div className="self-stretch rounded-[15px] flex-col justify-start items-start gap-6 flex">
                    {/* 동아리 정보 섹션 */}
                    <div className="self-stretch flex-col justify-start items-start flex">
                        <div
                            className="self-stretch p-[37px] bg-white rounded-[15px] justify-start items-center gap-5 inline-flex"
                            onClick={toggleSection1}
                        >
                            <div className="w-9 h-9 px-[9px] py-1 bg-[#9f0c01] rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-lg font-bold font-['Inter']">1</div>
                            </div>
                            <div className="w-[650px] h-[25px] text-[#515151] text-xl font-bold font-['Inter']">
                                동아리 정보
                            </div>
                        </div>

                        {isFormOpen1 && (
                            <div className="self-stretch p-[37px] bg-white rounded-[15px] flex-col gap-5 flex">
                                <div className="h-[104px] flex-col gap-[18px] flex">
                                    <div className="text-[#b3b3b3] text-xl">동아리 이름</div>
                                    <input
                                        type="text"
                                        placeholder="동아리 이름"
                                        value={clubName}
                                        onChange={(e) => setClubName(e.target.value)}
                                        className="w-[758px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                    />
                                </div>
                                <div className="w-[758px] flex gap-5">
                                    <div>
                                        <div className="text-[#b3b3b3] text-xl">소속 분과</div>
                                        <input
                                            type="text"
                                            placeholder="예) 공연 예술"
                                            value={clubDepartment}
                                            onChange={(e) => setClubDepartment(e.target.value)}
                                            className="w-[451px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-[#b3b3b3] text-xl">활동 인원</div>
                                        <input
                                            type="number"
                                            placeholder="명"
                                            value={clubMember}
                                            onChange={(e) => setClubMember(e.target.value)}
                                            className="w-[287px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-[758px] flex gap-5">
                                    <div>
                                        <div className="text-[#b3b3b3] text-xl">지도교수 성명</div>
                                        <input
                                            type="text"
                                            placeholder="홍길동"
                                            value={clubProfessor}
                                            onChange={(e) => setClubProfessor(e.target.value)}
                                            className="w-[370px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-[#b3b3b3] text-xl">지도교수 학과(부)</div>
                                        <input
                                            type="text"
                                            placeholder="예) 컴퓨터정보공학부"
                                            value={professorDepartment}
                                            onChange={(e) => setProfessorDepartment(e.target.value)}
                                            className="w-[370px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 회장 인적사항 섹션 */}
                    <div className="self-stretch flex-col justify-start items-start flex">
                        <div
                            className="self-stretch p-[37px] bg-white rounded-[15px] justify-start items-center gap-5 inline-flex"
                            onClick={toggleSection2}
                        >
                            <div className="w-9 h-9 px-[9px] py-1 bg-[#9f0c01] rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-lg font-bold font-['Inter']">2</div>
                            </div>
                            <div className="w-[650px] text-[#515151] text-xl font-bold font-['Inter']">
                                회장 인적사항
                            </div>
                        </div>

                        {isFormOpen2 && (
                            <div className="self-stretch p-[37px] bg-white rounded-[15px] flex-col gap-5 flex">
                                <div className="w-[758px] flex gap-5">
                                    <div>
                                        <div className="text-[#b3b3b3] text-xl">성명</div>
                                        <input
                                            type="text"
                                            placeholder="김철수"
                                            value={leaderName}
                                            onChange={(e) => setLeaderName(e.target.value)}
                                            className="w-[321px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-[#b3b3b3] text-xl">학과</div>
                                        <input
                                            type="text"
                                            placeholder="정보융합학부"
                                            value={leaderDepartment}
                                            onChange={(e) => setLeaderDepartment(e.target.value)}
                                            className="w-[409px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-[758px] flex gap-5">
                                    <div>
                                        <div className="text-[#b3b3b3] text-xl">학년</div>
                                        <input
                                            type="number"
                                            placeholder="학년"
                                            value={leaderGrade}
                                            onChange={(e) => setLeaderGrade(e.target.value)}
                                            className="w-[197px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-[#b3b3b3] text-xl">학번</div>
                                        <input
                                            type="text"
                                            placeholder="학번 10자리"
                                            value={leaderStudentNumber}
                                            onChange={(e) => setLeaderStudentNumber(e.target.value)}
                                            className="w-[541px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                        />
                                    </div>
                                </div>
                                <div className="w-[750px]">
                                    <div className="text-[#b3b3b3] text-xl">전화번호</div>
                                    <input
                                        type="text"
                                        placeholder="010-0000-0000"
                                        value={leaderPhoneNumber}
                                        onChange={(e) => setLeaderPhoneNumber(e.target.value)}
                                        className="w-[750px] h-[62px] px-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl"
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* 저장 버튼 */}
                    <div className="w-[758px] h-[55px] px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center">
                        <button
                            onClick={handleSave}
                            className="text-white text-xl font-semibold font-['Pretendard']"
                        >
                            저장
                        </button>
                    </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------ */}

<div className="w-[full] h-[3463px] relative bg-[#fff8f8]">
            <GenerateImage />
        </div>
        </div>
        </div>
        </div>

    )
}

export default Post2;
