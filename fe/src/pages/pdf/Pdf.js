import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

function Pdf() {
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
                        tableLayout: "auto",
                        border: "1px solid black", // 테이블 전체 테두리
                    }}
                >

                    <tbody>
                    <tr>
                        <td style={{width: "18%", border: "1px solid black"}}>작성일자</td>
                        <td colSpan="2" style={{border: "1px solid black"}}>
                            2024-11-16
                        </td>
                        <td style={{width: "20%", border: "1px solid black"}}>2학기 활동인원</td>
                        <td style={{border: "1px solid black"}}>
                            90
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="1" style={{border: "1px solid black"}}>소속분과</td>
                        <td colSpan="4" style={{border: "1px solid black"}}>
                            예술
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="1" style={{border: "1px solid black"}}>동아리명</td>
                        <td colSpan="4" style={{border: "1px solid black"}}>
                            RPM
                        </td>
                    </tr>
                    <tr>
                        <td rowSpan="4" style={{border: "1px solid black"}}>
                            회 장
                            <br/>
                            인적사항
                        </td>
                        <td style={{width: "18%", border: "1px solid black"}}>단과대학</td>
                        <td style={{border: "1px solid black"}}>
                            전정대
                        </td>
                        <td style={{border: "1px solid black"}}>학 과(부)</td>
                        <td style={{border: "1px solid black"}}>
                            전자융합학부
                        </td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>학 년</td>
                        <td style={{border: "1px solid black"}}>
                            2
                        </td>
                        <td style={{border: "1px solid black"}}>학 번(10자리)</td>
                        <td style={{border: "1px solid black"}}>
                            2020200000
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="1" style={{border: "1px solid black"}}>성 명</td>
                        <td colSpan="3" style={{border: "1px solid black"}}>
                            김모씨
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="1" style={{border: "1px solid black"}}>대표 연락처</td>
                        <td colSpan="3" style={{border: "1px solid black"}}>
                            010-0000-0000
                        </td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}}>지도교수</td>
                        <td style={{border: "1px solid black"}}>학 과(부)</td>
                        <td style={{border: "1px solid black"}}>
                            전자융합
                        </td>
                        <td style={{border: "1px solid black"}}>성 명</td>
                        <td style={{border: "1px solid black"}}>
                            박모씨
                        </td>
                    </tr>
                    </tbody>
                </table>

                <br/>
                <br/>
                <table
                    border="1"
                    cellPadding="10"
                    style={{
                        width: "100%",
                        borderCollapse: "collapse", // 테두리를 하나로 합침
                        tableLayout: "fixed",
                        border: "1px solid black", // 테이블 전체 테두리
                    }}
                >
                    <thead>
                    <tr>
                        <th
                            colSpan="4"
                            style={{
                                textAlign: "center",
                                padding: "10px",
                                border: "1px solid black", // 헤더 테두리
                            }}
                        >
                            RPM 9월 프로그램
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td
                            colSpan="4"
                            style={{
                                border: "1px solid black", // 각 셀 테두리
                            }}
                        >
                            1. 행사 일시 : 9월 10일
                        </td>
                    </tr>
                    <tr>
                        <td
                            colSpan="4"
                            style={{
                                border: "1px solid black",
                            }}
                        >
                            2. 행사 내용(세부적으로) : 친해지길 바래/ 친해지길 바래 행사로 2학기 신입생들을 대상으로 행사를 진행함.
                        </td>
                    </tr>
                    <tr>
                        <td
                            colSpan="4"
                            style={{
                                padding: "10px",
                                border: "1px solid black",
                            }}
                        >
                            3. 참고할 자료 첨부 (관련 링크(유튜브, 인스타그램) 등) :
                        </td>
                    </tr>
                    <tr>
                        <td
                            rowSpan="2"
                            colSpan="2"
                            style={{
                                height: "200px",
                                textAlign: "center",
                                verticalAlign: "middle",
                                border: "1px solid black",
                            }}
                        >
                            <div style={{marginTop: "10px", textAlign: "center"}}>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="첨부 이미지"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                    }}
                                />
                            </div>
                        </td>
                        <td
                            rowSpan="2"
                            colSpan="2"
                            style={{
                                height: "200px",
                                textAlign: "center",
                                verticalAlign: "middle",
                                border: "1px solid black",
                            }}
                        >
                            <div style={{marginTop: "10px", textAlign: "center"}}>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="첨부 이미지"
                                    style={{
                                        width: "100px",
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

                <br/>
                <br/>
                <table
                    border="1"
                    cellPadding="10"
                    style={{
                        width: "100%",
                        borderCollapse: "collapse", // 테두리를 하나로 합침
                        tableLayout: "fixed",
                        border: "1px solid black", // 테이블 전체 테두리
                    }}
                >
                    <thead>
                    <tr>
                        <th
                            colSpan="4"
                            style={{
                                textAlign: "center",
                                padding: "10px",
                                border: "1px solid black", // 헤더 테두리
                            }}
                        >
                            RPM 10월 프로그램
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td
                            colSpan="4"
                            style={{
                                border: "1px solid black", // 각 셀 테두리
                            }}
                        >
                            1. 행사 일시 : 10월 13일
                        </td>
                    </tr>
                    <tr>
                        <td
                            colSpan="4"
                            style={{
                                border: "1px solid black",
                            }}
                        >
                            2. 행사 내용(세부적으로) : 음감회/ 음감회를 실시하여 동아리 부원들과 서로 취향을 공유하는 시간을 가짐.
                        </td>
                    </tr>
                    <tr>
                        <td
                            colSpan="4"
                            style={{
                                padding: "10px",
                                border: "1px solid black",
                            }}
                        >
                            3. 참고할 자료 첨부 (관련 링크(유튜브, 인스타그램) 등) :
                        </td>
                    </tr>
                    <tr>
                        <td
                            rowSpan="2"
                            colSpan="2"
                            style={{
                                height: "200px",
                                textAlign: "center",
                                verticalAlign: "middle",
                                border: "1px solid black",
                            }}
                        >
                            <div style={{marginTop: "10px", textAlign: "center"}}>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="첨부 이미지"
                                    style={{
                                        width: "100px",
                                        height: "100px",
                                        objectFit: "cover",
                                        borderRadius: "5px",
                                    }}
                                />
                            </div>
                        </td>
                        <td
                            rowSpan="2"
                            colSpan="2"
                            style={{
                                height: "200px",
                                textAlign: "center",
                                verticalAlign: "middle",
                                border: "1px solid black",
                            }}
                        >
                            <div style={{marginTop: "10px", textAlign: "center"}}>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="첨부 이미지"
                                    style={{
                                        width: "100px",
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

                <br/>
                <br/>

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
                            활동 내역
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{border: "1px solid black"}} colSpan="1">
                            순서
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="2">
                            일시
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="4">
                            행사명
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="5">
                            활동내용
                        </td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}} colSpan="1">
                            1
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="2">
                            9월 10일
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="4">
                            친해지길 바래
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="5">
                            친해지길 바래 행사로 2학기 신입생들을 대상으로 행사를 진행함.
                        </td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}} colSpan="1">
                            2
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="2">
                            10월 13일
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="4">
                            음감회
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="5">
                            음감회를 실시하여 동아리 부원들과 서로 취향을 공유하는 시간을 가짐.
                        </td>
                    </tr>
                    <tr>
                        <td style={{border: "1px solid black"}} colSpan="1">
                            3
                        </td>
                        <td style={{border: "1px solid black"}} colSpan="2">

                        </td>
                        <td style={{border: "1px solid black"}} colSpan="4">

                        </td>
                        <td style={{border: "1px solid black"}} colSpan="5">

                        </td>
                    </tr>
                    </tbody>
                </table>


                <br/>
                <br/>



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

export default Pdf;
