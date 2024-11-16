import React, { useState, useEffect } from "react";
import axios from "axios";

function List() {
    const [selectedTab, setSelectedTab] = useState("활동내역");
    const [activityData, setActivityData] = useState([]);
    const [communicationData, setCommunicationData] = useState([]);

    // API 데이터 가져오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token"); // 로컬 스토리지에서 토큰 가져오기
                const response = await axios.get(
                    `${process.env.REACT_APP_DB_HOST}/api/community`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`, // 토큰 추가
                        },
                    }
                );

                const data = response.data.data;
                console.log('데이터 불러옴')

                // postCategory에 따라 데이터 분리
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

    return (
        <div className="w-full h-full min-h-screen relative bg-[#fff8f8]">
            {/* 탭 메뉴 */}
            <div className="flex justify-center items-center gap-[50px] pt-10">
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

            {/* 탭 내용 */}
            <div className="w-full flex justify-center px-10 py-8">
                <div className="w-full max-w-[1200px]">
                    {selectedTab === "활동내역" && (
                        <div className="grid grid-cols-4 gap-8">
                            {activityData.reverse().map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full h-[214px] relative rounded-[15px] overflow-hidden group cursor-pointer"
                                    style={{
                                        backgroundImage: `url(${item.image || "https://via.placeholder.com/300"})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    {/* Hover Layer */}
                                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end text-white p-4">
                                        <div className="text-lg font-bold">{item.title}</div>
                                        <div className="text-sm">{new Date(item.createDate).toLocaleDateString()}</div>
                                        <div className="text-xs mt-2">{item.content.slice(0, 100)}...</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {selectedTab === "소통해요" && (
                        <div className="flex flex-col gap-6">
                            {communicationData.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full h-[124px] px-[91px] py-[47px] bg-white rounded-[15px] flex justify-between items-center shadow-lg"
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
