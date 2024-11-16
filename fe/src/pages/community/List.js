import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function List() {
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = useState("활동내역");
    const [activityData, setActivityData] = useState([]);
    const [communicationData, setCommunicationData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get(
                    `${process.env.REACT_APP_DB_HOST}/api/community`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const data = response.data.data;

                const activities = data.filter((item) => item.postCategory !== "NORMAL");
                const communications = data.filter((item) => item.postCategory === "NORMAL");

                setActivityData(activities);
                setCommunicationData(communications);
            } catch (error) {
                console.error("API 요청 오류:", error);
            }
        };

        fetchData();
    }, []);

    const handleDetail = (id) => {
        navigate(`/community/${id}`); // ID를 포함한 경로로 이동
    };

    return (
        <div className="w-full h-full min-h-screen relative bg-[#fff8f8]">
            {/* 헤더 */}
            <div className="w-full h-[120px] px-[88px] py-[35px] flex justify-between items-center gap-2.5 bg-[#fff8f8]">
                <div
                    className="text-[#820000] text-[40px] font-extrabold font-['Inter'] cursor-pointer"
                    onClick={() => navigate("/")}
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

            {/* 탭 메뉴 */}
            <div className="h-auto flex flex-col items-center gap-8 pt-10">
                <div className="text-center text-black text-[40px] font-bold font-['Inter']">
                    커뮤니티
                </div>
                <div className="flex justify-center items-center gap-[50px]">
                    <div
                        className={`text-xl font-bold font-['Inter'] cursor-pointer pb-2 ${
                            selectedTab === "활동내역"
                                ? "text-[#820000] border-b-4 border-[#820000]"
                                : "text-black border-b-4 border-transparent"
                        }`}
                        onClick={() => setSelectedTab("활동내역")}
                    >
                        활동내역
                    </div>
                    <div
                        className={`text-xl font-bold font-['Inter'] cursor-pointer pb-2 ${
                            selectedTab === "소통해요"
                                ? "text-[#820000] border-b-4 border-[#820000]"
                                : "text-black border-b-4 border-transparent"
                        }`}
                        onClick={() => setSelectedTab("소통해요")}
                    >
                        소통해요
                    </div>
                </div>
                <button
                    className="text-white bg-[#820000] text-xl font-semibold px-6 py-3 rounded-lg hover:bg-[#a40000] transition"
                    onClick={() => navigate("/community/write")}
                >
                    글쓰기
                </button>
            </div>

            {/* 탭 내용 */}
            <div className="w-full flex justify-center">
                <div className="w-full px-10 py-8 mx-8 max-w-[1200px]">
                    {selectedTab === "활동내역" && (
                        <div className="grid grid-cols-4 gap-8">
                            {activityData.map((item) => (
                                <div
                                    key={item.id}
                                    className={`w-full h-[214px] relative rounded-[15px] overflow-hidden group cursor-pointer ${
                                        item.image ? "" : "bg-[#fff8f8]"
                                    }`}
                                    style={
                                        item.image
                                            ? {
                                                backgroundImage: `url(${item.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }
                                            : { backgroundColor: "#fff8f8" }
                                    }
                                    onClick={() => handleDetail(item.id)} // 클릭 시 상세 페이지로 이동
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end text-white p-4">
                                        <div className="text-lg font-bold">{item.title}</div>
                                        <div className="text-sm">
                                            {new Date(item.createDate).toLocaleDateString()}
                                        </div>
                                        <div className="text-xs mt-2">
                                            {item.content.slice(0, 100)}...
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {selectedTab === "소통해요" && (
                        <div className="flex flex-col gap-6">
                            {communicationData.map((item) => (
                                <div
                                    key={item.id}
                                    className="w-full h-[124px] px-[91px] py-[47px] bg-white rounded-[15px] flex justify-between items-center shadow-lg cursor-pointer"
                                    onClick={() => handleDetail(item.id)} // 클릭 시 상세 페이지로 이동
                                >
                                    <div className="text-[#515151] text-[25px] font-semibold font-['Pretendard']">
                                        {item.title}
                                    </div>
                                    <div className="text-[#b3b3b3] text-[25px] font-medium font-['Pretendard']">
                                        {new Date(item.createDate).toLocaleDateString()}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default List;
