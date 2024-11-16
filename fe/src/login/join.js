import './../index.css'; // Tailwind CSS 파일 import
import React from 'react';


function Join() { <div className="w-[1440px] h-[1808px] relative bg-[#fff8f8]">
    <div className="w-[1200px] h-[1380px] px-[42px] pt-[54px] pb-[177px] left-[120px] top-[241px] absolute bg-white rounded-[5px] shadow flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="h-[1200px] flex-col justify-start items-start gap-[65px] flex">
        <div className="self-stretch h-[61px] text-center text-black text-[50px] font-semibold font-['Pretendard']">회원가입</div>
        <div className="self-stretch h-[328px] flex-col justify-start items-start gap-[18px] flex">
          <div className="self-stretch text-black text-3xl font-semibold font-['Pretendard']">개인정보</div>
          <div className="h-[274px] flex-col justify-start items-start gap-[18px] flex">
            <div className="self-stretch justify-start items-center gap-4 inline-flex">
              <div className="w-[534px] h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] flex">
                <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">이름</div>
              </div>
              <div className="w-[546px] h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-[5px] flex">
                <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">학번</div>
              </div>
            </div>
            <div className="self-stretch h-44 flex-col justify-center items-start gap-4 flex">
              <div className="self-stretch h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] flex-col justify-center items-start gap-2.5 flex">
                <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">비밀번호</div>
              </div>
              <div className="self-stretch h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] flex-col justify-center items-start gap-2.5 flex">
                <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">비밀번호 확인</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[134px] flex-col justify-start items-start gap-[18px] flex">
          <div className="self-stretch text-black text-3xl font-semibold font-['Pretendard']">가입된 동아리 정보</div>
          <div className="self-stretch h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 inline-flex">
            <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">동아리 이름</div>
          </div>
        </div>
        <div className="self-stretch h-[138px] flex-col justify-start items-start gap-[22px] flex">
          <div className="self-stretch text-black text-3xl font-semibold font-['Pretendard']">직책</div>
          <div className="self-stretch justify-center items-center gap-[23px] inline-flex">
            <div className="grow shrink basis-0 h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 flex">
              <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">회장</div>
            </div>
            <div className="grow shrink basis-0 h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 flex">
              <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">부원</div>
            </div>
            <div className="grow shrink basis-0 h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 flex">
              <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">총동아리연합회</div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[134px] flex-col justify-start items-start gap-[18px] flex">
          <div className="self-stretch text-black text-3xl font-semibold font-['Pretendard']">가입된 동아리 정보</div>
          <div className="self-stretch h-20 px-[30px] py-[25px] rounded-[10px] border-2 border-[#d9d9d9] justify-start items-center gap-2.5 inline-flex">
            <div className="text-[#d9d9d9] text-[25px] font-normal font-['Pretendard']">동아리 이름</div>
          </div>
        </div>
        <div className="self-stretch h-20 px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
          <div className="text-white text-xl font-semibold font-['Pretendard']">가입</div>
        </div>
      </div>
    </div>
    <div className="w-[1440px] h-[120px] px-[88px] py-[35px] left-0 top-0 absolute justify-end items-center gap-2.5 inline-flex">
      <div className="w-[1048px] text-[#820000] text-[40px] font-extrabold font-['Inter']">KLUB</div>
      <div className="justify-start items-center gap-[29px] flex">
        <div className="text-[#820000] text-xl font-semibold font-['Inter']">로그인</div>
        <div className="text-[#820000] text-xl font-semibold font-['Inter']">회원가입</div>
      </div>
    </div>
  </div> }

export default Join;
