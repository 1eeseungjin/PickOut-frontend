import React from "react"; // 컴퍼넌트 필수항목

function Potato() {
    return <h3>I love potato</h3>
}

/**
 * <a href="https://stackoverflow.com/questions/36426521/what-does-export-default-do-in-jsx/36426988#:~:text=export%20default%20is%20used%20to,default%20class%20HelloWorld%20extends%20React.">
 *      What does "export default" do?
 * </a>
 *  export default는 스크립트 파일 내부의, 단건*single*의 클래스, 함수, 또는 원시타입을 export 하는데 사용된다.
 */ 
export default Potato;
