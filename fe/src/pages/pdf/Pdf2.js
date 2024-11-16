import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

function Pdf2() {
    const [rows, setRows] = useState([
        { id: 1, label: "항목 1", value: "" },
        { id: 2, label: "항목 2", value: "" },
        { id: 3, label: "항목 3", value: "" },
    ]);
    const pdfRef = useRef();

    // 새로운 행 추가
    const addRow = () => {
        setRows((prevRows) => [
            ...prevRows,
            { id: prevRows.length + 1, label: "", value: "" },
        ]);
    };

    // 입력 값 변경 (label과 value 모두 수정 가능)
    const handleInputChange = (id, name, value) => {
        setRows((prevRows) =>
            prevRows.map((row) => (row.id === id ? { ...row, [name]: value } : row))
        );
    };

    // PDF 생성
    const generatePDF = () => {
        const element = pdfRef.current;
        const options = {
            margin: [0.5, 0.5, 0.5, 0.5],
            filename: "vertical_table.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: {
                scale: 1.5,
            },
            jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <div style={{padding: "20px", width: "50%"}}>
            <h1>총동아리 연합회 활동실적서</h1>

            {/* PDF로 변환할 영역 */}
            <div
                ref={pdfRef}
                style={{
                    padding: "20px",
                    background: "#ffffff",
                    width: "100%", // 테두리 추가
                }}
            >

                <table
                    border="1"
                    cellPadding="10"
                    style={{
                        width: "100%",
                        borderCollapse: "collapse", // 테두리 겹침 제거
                        tableLayout: "fixed",
                        border: "1px solid black", // 테이블 전체 테두리
                    }}
                >
                    <thead>
                    <tr>
                        <th
                            colSpan="12"
                            style={{
                                textAlign: "center",
                                border: "1px solid black", // 헤더 셀 테두리
                            }}
                        >
                            다음 학기 활동 계획서
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{border: "1px solid black"}} colSpan="1">
                            순서
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="2">
                            진행일시
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="4">
                            행사명
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="5">
                            예정 내용 요약
                        </td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}} colSpan="1">
                            1
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="2">
                            3월
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="4">
                            보드 WITH ME
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="5">
                            동아리 부원들과 보드를 타며 친목을 도목할 예정임.
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="8" style={{textAlign: "center"}}>
                            <div style={{marginTop: "10px", textAlign: "center"}}>
                                <img
                                    src={ process.env.PUBLIC_URL + "/img/ai.png"}
                                    alt="첨부 이미지"
                                    style={{
                                        width: "500px",
                                        height: "100px",
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                    }}
                                />
                            </div>
                        </td>
                    </tr>

                    </tbody>
                </table>


            </div>


            {/* 버튼 영역 */}
            <div style={{marginTop: 20}}>
                <button onClick={generatePDF} style={{marginLeft: 10}}>
                    PDF로 저장
                </button>
            </div>
        </div>
    );
};

const textareaStyle = {
    width: "100%",
    height: "100%",
    border: "none",
    background: "transparent",
    outline: "none",
    resize: "none",
    padding: "5px",
};

export default Pdf2;
