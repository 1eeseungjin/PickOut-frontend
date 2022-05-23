import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Potato from './Potato'; 

/**
 * <p>
 *  ReactDOM.render() 합수 내부의 <App/> 태그는 Component 라 불림 (모듈화된 element)
 *  Component는 각각의 자바스크립트 함수로 정의돼 있으며 HTML을 반환.
 * </p>
 */
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root')); // 타겟 id를 가진 태그

/**
 * <p>
 *  최초 실행되는 React application은 한번에 하나의 컴퍼넌트만을 렌더링 해야하기 때문에
 *  다건의 렌더링이 발생 할 경우 마지막에 실행된 렌더 함수만을 실행하게 된다.
 *  다중컴퍼넌트가 필요하다면 컴퍼넌트간 계층을 만들어서 렌더링을 수행하라. 
 *  예) App.js 내부에 계층적으로 만든 리액트 컴퍼넌트들을 렌더
 * </p>
 */
// ReactDOM.render(<React.StrictMode><Potato /></React.StrictMode>, document.getElementById('root'));
