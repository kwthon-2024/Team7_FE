import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Write() {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [postCategory, setPostCategory] = useState("NORMAL"); // 기본값: NORMAL
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [filePreviews, setFilePreviews] = useState([]); // 이미지 미리보기

    // 메인 페이지로 이동
    const mainClick = () => {
        console.log("로고 클릭");
        navigate("/");
    };

    // 파일 업로드 핸들러
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        setSelectedFiles(files);

        // 미리보기 생성
        const previews = files.map((file) =>
            URL.createObjectURL(file)
        );
        setFilePreviews(previews);
    };

    // POST 요청 핸들러
    const handleSubmit = async () => {
        if (!title || !content) {
            alert("제목과 내용을 입력해주세요.");
            return;
        }

        try {
            const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기

            // 1. FormData 생성
            const formData = new FormData();

            // 2. post 데이터를 문자열(JSON)로 추가
            const postPayload = {
                title: title,
                content: content,
                postCategory: postCategory,
            };
            formData.append("post", new Blob([JSON.stringify(postPayload)], { type: "application/json" }));
            console.log("확인용",postPayload);
            // 3. 파일 추가
            selectedFiles.forEach((file) => {
                formData.append("files", file); // 파일을 추가
            });

            // 4. API 요청
            const response = await axios.post(
                `${process.env.REACT_APP_DB_HOST}/api/community`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            // 성공 처리
            if (response.status === 200) {
                alert("게시물이 성공적으로 등록되었습니다.");
                setTitle(""); // 폼 초기화
                setContent("");
                setSelectedFiles([]);
                setFilePreviews([]);
                navigate("/community");
            }
        } catch (error) {
            console.error("API 요청 오류:", error);
            alert("게시물 등록 중 오류가 발생했습니다.");
        }
    };

    return (
        <div
            className="w-full h-full min-h-screen relative bg-[#fff8f8]"
            style={{overflow: "hidden"}}
        >
            {/* 헤더 */}
            <div
                className="w-full h-[120px] px-[88px] py-[35px] flex justify-between items-center gap-2.5 bg-[#fff8f8]"
                // style={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
            >
                <div
                    className="text-[#820000] text-[40px] font-extrabold font-['Inter'] cursor-pointer"
                    onClick={mainClick}
                >
                    KLUB
                </div>
                <div className="flex gap-[29px]">
                    <div className="text-[#820000] text-xl font-semibold font-['Inter'] cursor-pointer">
                        로그인
                    </div>
                    <div className="text-[#820000] text-xl font-semibold font-['Inter'] cursor-pointer">
                        회원가입
                    </div>
                </div>
            </div>
            <div className="text-center text-black text-[35px] font-bold font-['Inter']">
                커뮤니티 글쓰기
            </div>
            <div className="w-full flex justify-center">

                <div className="w-[844px] h-auto flex-col justify-start items-start inline-flex">
                    {/* 제목 입력 */}
                    <div
                        className="self-stretch h-[111px] pl-[51px] pr-[37px] py-[37px] bg-white justify-start items-center gap-5 inline-flex">
                        <input
                            className="w-[650px] text-[#515151] text-xl font-bold font-['Inter'] border-none outline-none"
                            placeholder="제목을 입력하세요"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {/* 내용 입력 */}
                    <div
                        className="self-stretch h-auto p-[37px] bg-white rounded-[15px] flex-col justify-center items-center gap-5 flex">
        <textarea
            className="w-[758px] h-[200px] p-[30px] bg-[#f3f2f2] rounded-[10px] text-[#515151] text-xl font-normal font-['Pretendard'] resize-none outline-none"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />

                        {/* 카테고리 선택 */}
                        <div className="w-[758px] flex justify-start items-center gap-6">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="postCategory"
                                    value="NORMAL"
                                    checked={postCategory === "NORMAL"}
                                    onChange={() => setPostCategory("NORMAL")}
                                />
                                <span className="text-[#515151] text-xl font-medium">소통</span>
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="postCategory"
                                    value="ACTIVITY"
                                    checked={postCategory === "ACTIVITY"}
                                    onChange={() => setPostCategory("ACTIVITY")}
                                />
                                <span className="text-[#515151] text-xl font-medium">활동</span>
                            </label>
                        </div>

                        {/* 이미지 업로드 */}
                        <div className="w-[758px] flex gap-5">
                            <label
                                className="w-[127px] h-[127px] relative bg-[#ebe9e9] rounded-[10px] flex justify-center items-center cursor-pointer">
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <span className="text-[40px] text-white">+</span>
                            </label>

                            {/* 이미지 미리보기 */}
                            {filePreviews.map((preview, index) => (
                                <div
                                    key={index}
                                    className="w-[127px] h-[127px] bg-cover bg-center rounded-[10px]"
                                    style={{backgroundImage: `url(${preview})`}}
                                ></div>
                            ))}
                        </div>

                        {/* 게시 버튼 */}
                        <div
                            className="w-[758px] h-[55px] bg-[#820000] rounded-[10px] flex justify-center items-center cursor-pointer"
                            onClick={handleSubmit}
                        >
                            <div className="text-white text-xl font-semibold font-['Pretendard']">
                                게시
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Write;
