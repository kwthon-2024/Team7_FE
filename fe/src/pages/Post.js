import './../index.css'; // Tailwind CSS 파일 import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';


function Post() {
    const navigate = useNavigate();

    const [isFormOpen1, setIsFormOpen1] = useState(true); // 폼의 열림/닫힘 상태
    const [clubName, setClubName] = useState('');
    const [clubDepartment, setClubDepartment] = useState('');
    const [clubMember, setClubMember] = useState();
    const [clubProfessor, setClubProfessor] = useState('');
    const [professorDepartment, setProfessorDepartment] = useState('');

    const [isFormOpen2, setIsFormOpen2] = useState(true); // 폼의 열림/닫힘 상태
    const [leaderName, setLeaderName] = useState('');
    const [leaderDepartment, setLeaderDepartment] = useState('');
    const [leaderGrade, setLeaderGrade] = useState();
    const [leaderStudentNumber, setLeaderStudentNumber] = useState();
    const [leaderPhoneNumber, setLeaderPhoneNumber] = useState();


    const handleSave1 = () => {
        // 저장 성공 시 첫 번째 폼 닫기
        setIsFormOpen1(false);
    };

    const handleSave2 = () => {
        // 저장 성공 시 두 번째 폼 닫기
        setIsFormOpen2(false);
    };

    const toggleSection1 = () => {
        setIsFormOpen1((prev) => !prev); // 섹션 열림/닫힘 토글
    }

    const toggleSection2 = () => {
        setIsFormOpen2((prev) => !prev); // 섹션 열림/닫힘 토글
    }

    return (
        <div className="w-[full] h-[3463px] relative bg-[#fff8f8]">
            <div className="w-[1440px] h-[120px] px-[88px] py-[35px] left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
                <div className="w-[1048px] text-[#820000] text-[40px] font-extrabold font-['Inter']">KLUB</div>
                <div className="justify-start items-center gap-[29px] flex">
                    <div className="text-[#fff8f8] text-xl font-semibold font-['Inter']">로그인</div>
                    <div className="text-[#fff8f8] text-xl font-semibold font-['Inter']">회원가입</div>
                </div>
            </div>


            <div className="w-[844px] h-[3092px] left-[298px] top-[156px] absolute flex-col justify-start items-center gap-[39px] inline-flex">
                <div className="self-stretch text-center text-black text-[40px] font-bold font-['Inter']">활동 기록</div>
                <div className="self-stretch h-[2919px] rounded-[15px] flex-col justify-start items-start gap-6 flex">
                    <div className="self-stretch h-[611px] flex-col justify-start items-start flex">
                        {/* 제목 섹션 */}
                        <div className="self-stretch h-[111px] p-[37px] bg-white rounded-[15px] justify-start items-center gap-5 inline-flex" onClick={toggleSection1}>
                            <div className="w-9 h-9 px-[9px] py-1 bg-[#9f0c01] rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-lg font-bold font-['Inter']">1</div>
                            </div>
                            <div className="w-[650px] h-[25px] text-[#515151] text-xl font-bold font-['Inter']">
                                동아리 정보
                            </div>
                        </div>

                        {/* 내용 섹션 */}
                        {isFormOpen1 && (
                            <div className="self-stretch h-[500px] p-[37px] bg-white rounded-[15px] flex-col justify-center items-center gap-5 flex">
                                {/* 동아리 이름 */}
                                <div className="h-[104px] flex-col justify-start items-start gap-[18px] flex">
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">
                                        동아리 이름
                                    </div>
                                    <div className="w-[758px] h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="text-[#b3b3b3] bg-[#f3f2f2] text-xl font-normal font-['Pretendard']"
                                            placeholder="동아리 이름"
                                            name="clubName"
                                            value={clubName}
                                            onChange={(event) => setClubName(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="w-[758px] justify-start items-start gap-5 inline-flex">
                                    {/* 소속 분과 */}
                                    <div className="flex-col justify-start items-start gap-5 inline-flex">
                                        <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">
                                            소속 분과
                                        </div>
                                        <div className="w-[451px] h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                            <input
                                                type="text"
                                                className="text-[#b3b3b3] bg-[#f3f2f2] text-xl font-normal font-['Pretendard']"
                                                placeholder="예 ) 공연 예술"
                                                name="clubDepartment"
                                                value={clubDepartment}
                                                onChange={(event) => setClubDepartment(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* 활동 인원 */}
                                    <div className="w-[287px] flex-col justify-start items-start gap-5 inline-flex">
                                        <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">
                                            2024 / 1 활동 인원
                                        </div>
                                        <div className="w-[287px] h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-end items-center gap-2.5 inline-flex">
                                            <input
                                                type="number"
                                                className="w-[20%] bg-transparent border-none text-[#b3b3b3] text-xl font-normal font-['Pretendard'] outline-none placeholder-[#b3b3b3]"
                                                name="clubMember"
                                                value={clubMember}
                                                onChange={(event) => setClubMember(event.target.value)}
                                            />
                                            <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">
                                                명
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[758px] justify-start items-start gap-5 inline-flex">
                                    {/* 지도 교수 */}
                                    <div className="flex-col justify-start items-start gap-5 inline-flex">
                                        <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">
                                            지도교수 성명
                                        </div>
                                        <div className="w-[370px] h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                            <input
                                                type="text"
                                                className="text-[#b3b3b3] bg-[#f3f2f2] text-xl font-normal font-['Pretendard']"
                                                placeholder="홍길동"
                                                name="clubProfessor"
                                                value={clubProfessor}
                                                onChange={(event) => setClubProfessor(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* 지도 교수 학과 */}
                                    <div className="flex-col justify-start items-start gap-5 inline-flex">
                                        <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">
                                            지도교수 학과(부)
                                        </div>
                                        <div className="w-[370px] h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                            <input
                                                type="text"
                                                className="text-[#b3b3b3] bg-[#f3f2f2] text-xl font-normal font-['Pretendard']"
                                                placeholder="예 ) 컴퓨터정보공학부"
                                                name="professorDepartment"
                                                value={professorDepartment}
                                                onChange={(event) =>
                                                    setProfessorDepartment(event.target.value)
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* 저장 버튼 */}
                                <div className="w-[758px] h-[55px] px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                    <button
                                        onClick={handleSave1}
                                        className="text-white text-xl font-semibold font-['Pretendard']"
                                    >
                                        저장
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------ */}

                    <div className="self-stretch h-[611px] flex-col justify-start items-start flex">
                        {/* 제목 섹션 */}
                        <div className="self-stretch h-[111px] p-[37px] bg-white rounded-[15px] justify-start items-center gap-5 inline-flex" onClick={toggleSection2}>
                            <div className="w-9 h-9 px-[9px] py-1 bg-[#9f0c01] rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-lg font-bold font-['Inter']">2</div>
                            </div>
                            <div className="w-[650px] text-[#515151] text-xl font-bold font-['Inter']">회장 인적사항</div>
                        </div>

                        {/* 내용 섹션 */}
                        {isFormOpen2 && (
                        <div className="self-stretch h-[500px] p-[37px] bg-white rounded-[15px] flex-col justify-center items-center gap-5 flex">
                            <div className="justify-start items-start gap-5 inline-flex">
                                <div className="w-[321px] flex-col justify-start items-start gap-[18px] inline-flex">
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">성명</div>
                                    <div className="w-[321px] h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="text-[#b3b3b3] bg-[#f3f2f2] text-xl font-normal font-['Pretendard']"
                                            placeholder="김철수"
                                            name="leaderName"
                                            value={leaderName}
                                            onChange={(event) => setLeaderName(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-[409px] flex-col justify-start items-start gap-[18px] inline-flex">
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">학과</div>
                                    <div className="self-stretch h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="text-[#b3b3b3] bg-[#f3f2f2] text-xl font-normal font-['Pretendard']"
                                            placeholder="예 ) 정보융합학부"
                                            name="leaderDepartment"
                                            value={leaderDepartment}
                                            onChange={(event) =>
                                                setLeaderDepartment(event.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[758px] justify-start items-start gap-5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 inline-flex">
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">학년</div>
                                    <div className="w-[197px] h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-end items-center gap-2.5 inline-flex">
                                        <input
                                            type="number"
                                            className="w-[20%] bg-transparent border-none text-[#b3b3b3] text-xl font-normal font-['Pretendard'] outline-none placeholder-[#b3b3b3]"
                                            name="leaderGrade"
                                            value={leaderGrade}
                                            onChange={(event) => setLeaderGrade(event.target.value)}
                                        />
                                        <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">
                                            학년
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[541px] flex-col justify-start items-start gap-5 inline-flex">
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">학번</div>
                                    <div className="self-stretch h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-end items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="w-full text-right text-[#b3b3b3] bg-[#f3f2f2] text-xl font-normal font-['Pretendard'] placeholder:text-right"
                                            placeholder="학번 10자리"
                                            name="leaderStudentNumber"
                                            value={leaderStudentNumber}
                                            onChange={(event) => setLeaderStudentNumber(event.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[750px] justify-start items-start gap-5 inline-flex">
                                <div className="w-[750px] flex-col justify-start items-start gap-[18px] inline-flex">
                                    <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">회장 전화번호</div>
                                    <div className="self-stretch h-[62px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="text"
                                            className="text-[#b3b3b3] bg-[#f3f2f2] text-xl font-normal font-['Pretendard']"
                                            placeholder="010-0000-0000"
                                            name="leaderPhoneNumber"
                                            value={leaderPhoneNumber}
                                            onChange={(event) =>
                                                setLeaderPhoneNumber(event.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* 저장 버튼 */}
                            <div className="w-[758px] h-[55px] px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                    <button
                                        onClick={handleSave2}
                                        className="text-white text-xl font-semibold font-['Pretendard']"
                                    >
                                        저장
                                    </button>
                                </div>
                        </div>
                        )}
                    </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------ */}

                    <div className="self-stretch h-[1649px] flex-col justify-start items-start flex">
                        <div className="self-stretch h-[111px] p-[37px] bg-white rounded-[15px] justify-start items-center gap-5 inline-flex">
                            <div className="w-9 h-9 px-[9px] py-1 bg-[#9f0c01] rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-lg font-bold font-['Inter']">3</div>
                            </div>
                            <div className="w-[650px] text-[#515151] text-xl font-bold font-['Inter']">활동 /결산 기록</div>
                        </div>
                        <div className="self-stretch h-[1683px] p-[37px] bg-[#f7f7f7] rounded-[15px] flex-col justify-start items-center gap-5 flex">
                            <div className="w-[758px] justify-start items-start gap-5 inline-flex">
                                <div className="h-[269px] shadow justify-start items-start gap-3.5 flex">
                                    <div className="w-[50px] h-[74px] px-[30px] py-[25px] bg-[#d69a9a] rounded-[10px] justify-center items-center gap-2.5 flex">
                                        <div className="text-white text-xl font-semibold font-['Pretendard']">3월</div>
                                    </div>
                                    <div className="w-[50px] h-[74px] px-[30px] py-[25px] bg-white rounded-[10px] justify-center items-center gap-2.5 flex">
                                        <div className="text-[#515151] text-xl font-semibold font-['Pretendard']">16일</div>
                                    </div>
                                    <div className="w-[630px] h-[269px] px-[30px] py-[25px] bg-white rounded-[10px] flex-col justify-start items-start gap-5 inline-flex">
                                        <div className="flex-col justify-center items-start gap-2.5 flex">
                                            <div className="text-black text-[25px] font-bold font-['Pretendard']">신입생 환영회</div>
                                            <div className="text-black text-[25px] font-normal font-['Pretendard']">2024년 1학기 신입 부원 대상으로 환영회 개최</div>
                                        </div>
                                        <div className="justify-start items-center gap-[13px] inline-flex">
                                            <img className="w-[219px] h-[127px]" src="https://via.placeholder.com/219x127" />
                                            <img className="w-[232px] h-[127px]" src="https://via.placeholder.com/232x127" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[758px] shadow justify-center items-start gap-5 inline-flex">
                                <div className="h-[269px] justify-start items-start gap-3.5 flex">
                                    <div className="w-[69px] h-[74px] px-[30px] py-[25px] left-0 top-0 absolute rounded-[10px]" />
                                    <div className="w-[50px] h-[74px] px-[30px] py-[25px] bg-[#d69a9a] rounded-[10px] justify-center items-center gap-2.5 flex">
                                        <div className="text-white text-xl font-semibold font-['Pretendard']">3월</div>
                                    </div>
                                    <div className="w-[50px] h-[74px] px-[30px] py-[25px] bg-white rounded-[10px] justify-center items-center gap-2.5 flex">
                                        <div className="text-[#515151] text-xl font-semibold font-['Pretendard']">27일</div>
                                    </div>
                                    <div className="w-[630px] h-[269px] px-[30px] py-[25px] bg-white rounded-[10px] flex-col justify-start items-start gap-5 inline-flex">
                                        <div className="flex-col justify-center items-start gap-2.5 flex">
                                            <div className="text-black text-[25px] font-bold font-['Pretendard']">개강총회</div>
                                            <div className="text-black text-[25px] font-normal font-['Pretendard']">2024년 1학기 동아리원 대상으로 개강총회 개최</div>
                                        </div>
                                        <div className="justify-start items-center gap-[13px] inline-flex">
                                            <img className="w-[219px] h-[127px]" src="https://via.placeholder.com/219x127" />
                                            <div className="w-[127px] h-[127px] relative">
                                                <div className="w-[127px] h-[127px] left-0 top-0 absolute bg-[#ebe9e9]" />
                                                <div className="w-[51px] h-[70px] left-[37px] top-[22px] absolute text-center text-white text-[80px] font-normal font-['Pretendard']">+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[758px] shadow justify-center items-start gap-5 inline-flex">
                                <div className="h-[269px] justify-start items-start gap-3.5 flex">
                                    <div className="w-[69px] h-[74px] px-[30px] py-[25px] left-0 top-0 absolute rounded-[10px]" />
                                    <div className="w-[50px] h-[74px] px-[30px] py-[25px] bg-[#d69a9a] rounded-[10px] justify-center items-center gap-2.5 flex">
                                        <div className="text-white text-xl font-semibold font-['Pretendard']">3월</div>
                                    </div>
                                    <div className="w-[50px] h-[74px] px-[30px] py-[25px] bg-white rounded-[10px] justify-center items-center gap-2.5 flex">
                                        <div className="text-[#515151] text-xl font-semibold font-['Pretendard']">27일</div>
                                    </div>
                                    <div className="w-[630px] h-[269px] px-[30px] py-[25px] bg-white rounded-[10px] flex-col justify-start items-start gap-5 inline-flex">
                                        <div className="flex-col justify-center items-start gap-2.5 flex">
                                            <div className="text-black text-[25px] font-bold font-['Pretendard']">개강총회</div>
                                            <div className="text-black text-[25px] font-normal font-['Pretendard']">2024년 1학기 동아리원 대상으로 개강총회 개최</div>
                                        </div>
                                        <div className="justify-start items-center gap-[13px] inline-flex">
                                            <img className="w-[219px] h-[127px]" src="https://via.placeholder.com/219x127" />
                                            <div className="w-[127px] h-[127px] relative">
                                                <div className="w-[127px] h-[127px] left-0 top-0 absolute bg-[#ebe9e9]" />
                                                <div className="w-[51px] h-[70px] left-[37px] top-[22px] absolute text-center text-white text-[80px] font-normal font-['Pretendard']">+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[758px] h-[274px] justify-center items-start gap-5 inline-flex">
                                <div className="h-[274px] justify-start items-start gap-3.5 flex">
                                    <div className="w-[69px] h-[74px] px-[30px] py-[25px] left-0 top-0 absolute rounded-[10px]" />
                                    <div className="w-[50px] h-[74px] px-[30px] py-[25px] bg-[#d69a9a] rounded-[10px] justify-center items-center gap-2.5 flex">
                                        <div className="text-white text-xl font-semibold font-['Pretendard']">3월</div>
                                    </div>
                                    <div className="w-[50px] h-[74px] px-[30px] py-[25px] bg-white rounded-[10px] justify-center items-center gap-2.5 flex">
                                        <div className="text-[#515151] text-xl font-semibold font-['Pretendard']">27일</div>
                                    </div>
                                    <div className="w-[630px] h-[274px] px-[30px] py-2.5 bg-white rounded-[10px] flex-col justify-start items-start gap-5 inline-flex">
                                        <div className="self-stretch h-[100px] flex-col justify-center items-start gap-2.5 flex">
                                            <div className="w-[579px] h-[45px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                                <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">활동 내용 제목</div>
                                            </div>
                                            <div className="w-[579px] h-[45px] px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-center gap-2.5 inline-flex">
                                                <div className="text-[#b3b3b3] text-xl font-normal font-['Pretendard']">활동 세부 내용 </div>
                                            </div>
                                        </div>
                                        <div className="w-[127px] h-[127px] relative">
                                            <div className="w-[127px] h-[127px] left-0 top-0 absolute bg-[#ebe9e9]" />
                                            <div className="w-[51px] h-[70px] left-[37px] top-[22px] absolute text-center text-white text-[80px] font-normal font-['Pretendard']">+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[758px] h-16 px-[37px] py-[22px] bg-[#eae9e9] rounded-[20px] justify-center items-center gap-2.5 inline-flex" />
                            <div className="w-[758px] h-[120px]" />
                            <div className="w-[758px] h-[55px] px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-xl font-semibold font-['Pretendard']">저장</div>
                            </div>
                            <div className="w-[758px] h-[55px] px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-xl font-semibold font-['Pretendard']">제출 파일 미리보기 (PDF)</div>
                            </div>
                            <div className="w-[758px] h-[55px] px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                                <div className="text-white text-xl font-semibold font-['Pretendard']">제출하기 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post;
