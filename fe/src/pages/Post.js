import './../index.css'; // Tailwind CSS 파일 import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';


function Post() {
    const navigate = useNavigate();

    const [isFormOpen, setIsFormOpen] = useState(true); // 폼의 열림/닫힘 상태
    const [clubData, setClubData] = useState({
        clubName: '',
        clubDepartment: '',
        clubMember: '',
        clubProfessor: '',
        professorDepartment: '',
        leaderName: '',
        leaderDepartment: '',
        leaderGrade: '',
        leaderStudentNumber: '',
        leaderPhoneNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClubData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // 저장 성공 시 폼 닫기
        setIsFormOpen(false);
    };

    const toggleSection = () => {
        setIsFormOpen((prev) => !prev); // 섹션 열림/닫힘 상태 토글
    };

    return (
        <div className="w-[full] h-auto relative bg-[#fff8f8]">
            {/* 헤더 */}
            <div className="w-[1440px] h-[120px] px-[88px] py-[35px] left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
                <div className="w-[1048px] text-[#820000] text-[40px] font-extrabold font-['Inter']">KLUB</div>
                <div className="justify-start items-center gap-[29px] flex">
                    <div className="text-[#fff8f8] text-xl font-semibold font-['Inter']">로그인</div>
                    <div className="text-[#fff8f8] text-xl font-semibold font-['Inter']">회원가입</div>
                </div>
            </div>

            <div className="w-[844px] mx-auto flex flex-col gap-[39px] mt-[150px]">
                <div className="self-stretch text-center text-black text-[40px] font-bold font-['Inter']">활동 기록</div>
                <div className="self-stretch rounded-[15px] flex-col justify-start items-start gap-6 flex">
                    {/* 제목 섹션 */}
                    <div
                        className="self-stretch p-[37px] bg-white rounded-[15px] flex justify-start items-center gap-5 cursor-pointer"
                        onClick={toggleSection}
                    >
                        <div className="w-9 h-9 bg-[#9f0c01] rounded-full flex justify-center items-center">
                            <div className="text-white text-lg font-bold font-['Inter']">1</div>
                        </div>
                        <div className="w-[650px] text-[#515151] text-xl font-bold font-['Inter']">
                            동아리 정보 및 회장 인적사항
                        </div>
                    </div>

                    {/* 내용 섹션 */}
                    {isFormOpen && (
                        <div className="self-stretch p-[37px] bg-white rounded-[15px] flex flex-col gap-[20px]">
                            {/* 동아리 정보 */}
                            <div>
                                <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">
                                    동아리 이름
                                </div>
                                <input
                                    type="text"
                                    className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-[#b3b3b3] text-xl font-normal font-['Pretendard']"
                                    placeholder="동아리 이름"
                                    name="clubName"
                                    value={clubData.clubName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div>
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">
                                        소속 분과
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-[#b3b3b3] text-xl font-normal font-['Pretendard']"
                                        placeholder="예 ) 공연 예술"
                                        name="clubDepartment"
                                        value={clubData.clubDepartment}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">
                                        2024 / 1 활동 인원
                                    </div>
                                    <div className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] flex items-center">
                                        <input
                                            type="number"
                                            className="w-[60%] bg-transparent border-none text-[#b3b3b3] text-xl font-normal font-['Pretendard'] outline-none"
                                            placeholder="인원"
                                            name="clubMember"
                                            value={clubData.clubMember}
                                            onChange={handleInputChange}
                                        />
                                        <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] ml-2">
                                            명
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div>
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">
                                        지도교수 성명
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-[#b3b3b3] text-xl font-normal font-['Pretendard']"
                                        placeholder="홍길동"
                                        name="clubProfessor"
                                        value={clubData.clubProfessor}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">
                                        지도교수 학과(부)
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-[#b3b3b3] text-xl font-normal font-['Pretendard']"
                                        placeholder="예 ) 컴퓨터정보공학부"
                                        name="professorDepartment"
                                        value={clubData.professorDepartment}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* 회장 인적사항 */}
                            <div>
                                <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">회장 성명</div>
                                <input
                                    type="text"
                                    className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-[#b3b3b3] text-xl font-normal font-['Pretendard']"
                                    placeholder="김철수"
                                    name="leaderName"
                                    value={clubData.leaderName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div>
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">학과</div>
                                    <input
                                        type="text"
                                        className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-[#b3b3b3] text-xl font-normal font-['Pretendard']"
                                        placeholder="정보융합학부"
                                        name="leaderDepartment"
                                        value={clubData.leaderDepartment}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">학년</div>
                                    <input
                                        type="number"
                                        className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-[#b3b3b3] text-xl font-normal font-['Pretendard']"
                                        placeholder="학년"
                                        name="leaderGrade"
                                        value={clubData.leaderGrade}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-[20px]">
                                <div>
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">학번</div>
                                    <input
                                        type="text"
                                        className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-right text-[#b3b3b3] text-xl font-normal font-['Pretendard'] placeholder:text-right"
                                        placeholder="학번 10자리"
                                        name="leaderStudentNumber"
                                        value={clubData.leaderStudentNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div>
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard'] mb-2">전화번호</div>
                                    <input
                                        type="text"
                                        className="w-full h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] text-[#b3b3b3] text-xl font-normal font-['Pretendard']"
                                        placeholder="010-0000-0000"
                                        name="leaderPhoneNumber"
                                        value={clubData.leaderPhoneNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* 저장 버튼 */}
                            <div className="w-full h-[55px] px-[30px] py-[25px] bg-[#820000] rounded-[10px] flex justify-center items-center">
                                <button
                                    onClick={handleSave}
                                    className="text-white text-xl font-semibold font-['Pretendard']"
                                >
                                    저장
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )
}

export default Post;
