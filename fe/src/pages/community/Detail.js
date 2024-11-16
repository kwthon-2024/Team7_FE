import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Detail() {
    const navigate = useNavigate();
    const { id } = useParams(); // URL에서 ID 가져오기
    const [detailData, setDetailData] = useState(null);

    const mainClick = () => {
        console.log("로고 클릭");
        navigate("/");
    };

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `${process.env.REACT_APP_DB_HOST}/api/community/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setDetailData(response.data.data);
            } catch (error) {
                console.error("상세 데이터 가져오기 오류:", error);
            }
        };

        fetchDetail();
    }, [id]);

    if (!detailData) return <div className="p-8">로딩 중...</div>;

    const { title, createDate, writer, content, image } = detailData;

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
            <div className="p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg">
                {/* 제목 */}
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                {/* 작성일 및 작성자 */}
                <div className="text-gray-500 text-sm mb-6">
                    작성일: {new Date(createDate).toLocaleDateString()} | 작성자: {writer}
                </div>

                {/* 내용 */}
                <p className="text-gray-700 text-lg leading-relaxed mb-8">{content}</p>

                {/* 이미지 */}
                {image && (
                    <div className="mt-8">
                        <img
                            src={image}
                            alt="상세 이미지"
                            className="w-full max-w-[300px] h-auto object-contain mx-auto rounded-lg shadow-md"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Detail;
