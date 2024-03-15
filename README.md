# 소개

**서버리스** 방식의 **SSR** 사이트를 **Vanilla JS** 기반으로 간단히 구현해보며 흐름을 이해해본다.

Next.js의 원리를 모방해서 구현하기엔 코드량이 너무 방대하고 난이도 있기에 Vanilla JS로 만든 컴포넌트 토대에서 시작해서 SSR을 구현하는 것이 목적이다.

# 기술 스택 및 구현 요약

Server Side Rendering(SSR)에선 당연히 서버가 필수적으로 필요하다. 다만 서버 쪽까지 Vanilla JS로 구현하진 않는다.

서버는 `Express`를 사용해서 API를 구현한다. API는 기본적으로 요청받은 페이지의 HTML을 응답으로 보내 JS가 실행 전이라도 페이지 레이아웃이 노출될 수 있도록 한다.

서버리스 함수로의 배포는 `Serverless Framework`를 사용하였다. `Serverless Framework`는 Aws Lambda에 배포를 보조해주는 툴로 Vercel과는 다르게 커맨드라인에서 패키징 및 배포만 실행한다.

> 공식 이름은 `Serverless` 인데 검색할 때는 혼동 방지를 위해 `Serverless Framework`로 보통 명칭한다.

`Serverless Framework`의 플러그인들을 통해 `Express`와 `Webpack`을 배포 과정에 연결한다.

프론트엔드는 Vanilla JS를 사용하고 Sass로 스타일을 입힌다.
웹팩을 이용해서 브라우저에서 실행되는 파일들의 용량 최적화 및 번들링을 수행한다.

JS 파일은 서버에서 실행되는 파일과 프론트에서 사용하는 파일로 나뉜다. 서버에서 실행되는 파일은 `Express` 및 `Serverless Framework`와 관련된 파일이다.

프론트엔드에서 실행되는 파일은 실제로 컴포넌트를 렌더링하고 상태를 관리하는 코드와 CSS 파일이다. 화면에 표시된 HTML에 이벤트를 연결하는 hydrate 기능도 포함한다.

SSR이라고 해서 페이지가 이동할 때마다 무조건 새로운 HTML으로 refresh할 필요는 없다. 처음에 프론트 코드가 로딩된 이후 페이지 이동이 발생하면 서버에서 받은 HTML을 토대로 내부 HTML만 스위칭하도록 구현한다.

# 미리보기

배포된 결과물은 다음 링크를 통해 볼 수 있다.

[사이트 프리뷰](https://gjv5kzs2vb.execute-api.ap-northeast-2.amazonaws.com/dev/intro)

해당 프로젝트에 대한 세부 설명은 다음 포스팅에서 볼 수 있다.

[서버리스 SSR 만들기](https://velog.io/@shinhw371/series/serverless-ssr-dev)

# 참조

이 프로젝트는 개발자 황준일님의 두 글을 기반으로 해서 살을 붙였다.
