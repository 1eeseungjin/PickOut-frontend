# ReactJS로 영화 웹 서비스 만들기

* NomadCoders의 ReactJS로 영화 앱서비스 만들기 강좌를 공부하기 위한 리포지토리입니다.
* [demo](https://achelous1.github.io/react-movie-web-service)

## :computer: Set-up

* Node.js 버전 10 또는 12 설치
* [NPX](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b#:~:text=npx%20is%20a%20tool%20intended,executables%20hosted%20on%20the%20registry.) 설치 `npm install npx -g`
* `npx create-react-app {프로젝트명}`으로 리액트 앱 생성
* 생성 된 파일 중 `package.json`파일 내부의 "scripts" 항목 중 `test`와 `eject` 항목 삭제
* `prop-types` 라이브러리 설치 `npm i prop-types` -- validation 라이브러리
* `axios` 라이브러리 설치 `npm i axios` -- 비동기라이브러리
* `react-router-dom` 라이브러리 설치 `npm install react-router-dom`

## :thumbsup: Cool thing about ReactJS

* Virtual Document Object Model(VDOM) - Element를 해당 Target id를 가진 태그를 찾아 그 안에 element를 렌더링한다 [App Element 참조](src/App.js) [Target 참조](src/index.js)
* Reusable - `Component`를 재사용할 수 있음!! :thumbsup:

### Component

* [index.js](src/index.js)내부의 `ReactDOM.render()`함수 내부의 `<App />`태그는 컴퍼넌트*Component*라 불리며, 이 컴퍼넌트는 HTML을 반환하는 각각의 자바스크립트 함수([App.js](src/App.js))로 인하여 렌더링 된다.
* *Javascript*와 *HTML*의 조합을 할 때 사용하는 파일 확장자를 `*.jsx`를 사용한다.(react에서 파생된 개념)

#### Component Life Cycle
* [React Doc.](https://reactjs.org/docs/react-component.html#the-component-lifecycle)
1. Mounting
   * 태어남
   * `constructor()`, `static getDerivedStateFromProps()`, `render()`, `componentDitMount()`함수가 순차적으로 호출됨.
2. Updating
   * 업데이트 시(`setState()`호출 등으로 인하여)
   * `static getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`함수가 순차적으로 호출됨
3. Unmounting
   * 죽음
   * `componentWillUnmount()` 함수가 호출됨

#### Styling the Component
* 컴퍼넌트의 스타일을 변경하는 방법은 기존의 css를 적용하는 방법 또는 `style={{}}`을 사용하여 자바스크립트 형식으로도 적용이 가능하다. eg. `style={{ backgroundColor: "red" }}`로 표현
* 컴퍼넌트에선 기존의 `class` 대신 `className`을 사용하여 css클래스를 적용한다.


### Github page에 배포하기
1. Github pages 패키지 설치 `npm i gh-pages`
2. `package.json`파일에 `homepage` 및 배포할 Github 페이지 주소 추가
3. `package.json`파일 -> scripts 하위에 `deploy`항목 추가 `gh-pages -d {$directory-name}`
4. `package.json`파일 -> scripts 하위에 `predeploy`항목 추가 `npm run build`
5. `terminal`에서 `npm run deploy` 명령

### 라우터
* ReactJS의 url 라우팅 기능
  * `*Router`와 `Route` 컴퍼넌트 사용
  * 같은 url상 그룹의 주소일 경우 모든 컴퍼넌트를 렌더링한다.
    * `exact={true}`로 정확하게 같은 해당 주소일 경우 컴퍼넌트를 렌더링 할 수 있게 한다.
    * `Router`에는 종류가 다양하며 (`HashRouter`, `BrowserRouter` 등) 각각 라우팅되는 방식이 다르다
* 라우팅 시에는 `<a>`태그 대신 `react-router-dom`의 `Link` 컴퍼넌트를 사용하여 라우팅 하라 -- `<a>`태그는 페이지 전체를 refresh 해버리기 때문에 제대로 동작하지 않았다.
  * `Link` 컴퍼넌트는 `*Router` 컴퍼넌트 내에 위치해야한다.


## :wrench: 문제 해결 사항

* NodeJS 12 버전이 우분투에 설치가 되지 않아 참조한 [사이트](https://avisynth.tistory.com/23)
* `npx create-react-app {프로젝트명}`이 안될 시 `npm init react-app {프로젝트명}`으로 해결