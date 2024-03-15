import { ICON_URL, IMAGE_URL } from '../../utils/images';

const skills = [
  { name: 'JavaScript', icon: ICON_URL.JAVASCRIPT, score: '4' },
  { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT, score: '3' },
  { name: 'SASS', icon: ICON_URL.SASS, score: '4' },
  { name: 'Tailwind CSS', icon: ICON_URL.TAILWIND, score: '4' },
  { name: 'React', icon: ICON_URL.REACT, score: '4' },
  { name: 'Next.js', icon: ICON_URL.NEXTJS, score: '3' },
  // { name: 'Vue.js', icon: ICON_URL.VUE, score: '2' },
  { name: 'React Hook Form', icon: ICON_URL.HOOK, score: '3' },
  { name: 'Tanstack Query', icon: ICON_URL.TANSTACK, score: '3' },
  // { name: 'Zod', icon: ICON_URL.ZOD, score: '2' },
  // { name: 'Jest', icon: ICON_URL.JEST, score: '2' },
  { name: 'MSW', icon: ICON_URL.MSW, score: '2' },
  { name: 'Webpack', icon: ICON_URL.WEBPACK, score: '3' },
  { name: 'Express', icon: ICON_URL.EXPRESS, score: '2' },
  { name: 'Serverless', icon: ICON_URL.SERVERLESS, score: '3' },
  { name: 'Aws', icon: ICON_URL.AMAZON_S3, score: '2' },
  // { name: 'Django', icon: ICON_URL.DJANGO, score: '1' },
];

export const profile = {
  id: '/profile',
  content: `
    <div id="profile" class="profile">
      <section class="profile__intro">
        <img src="${
          IMAGE_URL.PROFILE
        }" alt="프로필 이미지" class="profile__image loading" />
        <p class="profile__intro-text">
          원리를 배우며 성장하는 프론트엔드 개발자 지망생 신호원입니다.
          <br>
          <br>
          과거에는 툴의 기능만 아는 채로 사용하니 제 프로그램이라도 기능을 추가할수록 흐름을 이해하기 어려웠습니다. 
          <br>
          이후 궁금한 내용을 블로그에 작성해나가며 공부하였고 사용을 위한 지식 뿐 아니라 원리 및 사용 이유 등을 알 수 있었습니다.
          그 결과로 기능 구현의 부담이 줄어들 뿐 아니라 비슷한 어려움을 겪던 팀원에게 도움을 주기도 했습니다.
          <br>
          <br>
          앞으로도 원리를 깊게 배워가며 툴에 끌려다니는 개발자가 되지 않으려 합니다.
        </p>
      </section>
      <section class="profile__additional">
        <p class="profile__edu profile__edu--first">
          프로그래머스: K-Digital Training: 4기 빅데이터 플랫폼 프론트엔드 엔지니어링
        </p>
        <p class="profile__edu">
          서울대학교 웹개발 동아리 와플스튜디오
        </p>
        <p class="profile__edu">서울대학교 전기•정보공학부 (Electrical and Computer Engineering) 학사 졸업</p>
      </section>
      <section class="profile__additional"> 
        ${skills
          .map(
            ({ name, icon }, index) => `
            <div class="profile__skill profile__skill${
              index <= 0 ? '--first' : ''
            }">
              <img src="${icon}" alt="${name}" class="profile__skill-icon loading" />
            </div>
          `,
          )
          .join('')}
      </section>
    </div>
  `,
};
