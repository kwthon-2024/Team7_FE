import './../index.css'; // Tailwind CSS 파일 import
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axios';


function Login() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // console.log(token)

    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [images, setImages] = useState([]);

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

    // 이미지 업로드
    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const fileURLs = files.map((file) => URL.createObjectURL(file));
        setImages((prevImages) => [...prevImages, ...fileURLs]);
    };

    // 이미지 업로드 삭제    
    const handleRemoveImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    // 로그인 버튼을 눌렀을 때 실행되는 함수
    const handleSubmit = async (e) => {
        console.log('게시버튼 누름');
  
        e.preventDefault();

  
        try {
            const response = await axiosInstance.post(
                `${process.env.REACT_APP_DB_HOST}/api/club/notifications`,
                { title: title, content: contents }, // 요청 본문 데이터
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${token}`, // Bearer 추가
                    },
                }
            );

            // console.log(response);
            navigate("/");
  
        } catch (error) {
            console.error(error); // 오류가 발생한 경우 출력
        }
      };


    return (
        <div className="w-[full] h-[1061px] relative bg-[#fff8f8]">
            <form className="w-[844px] h-[768px] left-[298px] top-[194px] absolute flex-col justify-start items-start inline-flex" onSubmit={handleSubmit}>

                {/* 제목 입력 */}
                <div className="self-stretch h-[111px] pl-[51px] pr-[37px] py-[37px] bg-white justify-start items-center gap-5 inline-flex">
                    <input type='text' className="w-[650px] text-[#b3b3b3] text-xl font-bold font-['Inter']" placeholder='제목 입력' name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>

                <div className="self-stretch h-[657px] p-[37px] bg-white rounded-[15px] flex-col justify-center items-center gap-5 flex">
                    {/* 공지사항 입력 */}
                    <div className="w-[758px] h-[379px] justify-start items-start gap-5 inline-flex">
                        <div className="w-[758px] self-stretch px-[30px] py-[25px] bg-[#f3f2f2] rounded-[10px] justify-start items-start gap-2.5 flex">
                            <textarea className="w-full h-full bg-transparent border-none resize-none text-[#b3b3b3] text-xl font-normal font-['Pretendard'] outline-none placeholder-[#b3b3b3]" placeholder='공지사항을 입력해주세요' name='contents' value={contents} onChange={(event) => setContents(event.target.value)}></textarea>
                        </div>
                    </div>

                    {/* 이미지 첨부 */}
                    <div className="w-[758px] justify-start items-start gap-5 inline-flex">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-[127px] h-[127px] bg-[#ebe9e9] rounded-[10px] overflow-hidden"
                            >
                                <img
                                    src={image}
                                    alt={`uploaded-${index}`}
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        <label
                            htmlFor="image-upload"
                            className="w-[127px] h-[127px] bg-[#ebe9e9] rounded-[10px] flex justify-center items-center cursor-pointer"
                        >
                            <span className="text-[#b3b3b3] text-3xl font-bold">+</span>
                            <input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                multiple
                                className="hidden"
                                onChange={handleImageUpload}
                            />
                        </label>
                    </div>

                    {/* 게시 버튼 */}
                    <div className="w-[758px] h-[55px] px-[30px] py-[25px] bg-[#820000] rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                        <button type='submit' className="text-white text-xl font-semibold font-['Pretendard']">게시</button>
                    </div>
                </div>
            </form>

            {/* 헤더 */}
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
