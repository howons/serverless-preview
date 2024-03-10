import { ICON_URL, IMAGE_URL } from '../../utils/images';

const skills = [
  { name: 'JavaScript', icon: ICON_URL.JAVASCRIPT, score: '4' },
  { name: 'TypeScript', icon: ICON_URL.TYPESCRIPT, score: '4' },
  { name: 'React', icon: ICON_URL.REACT, score: '4' },
  { name: 'Chakra UI', icon: ICON_URL.CHAKRA, score: '4' },
  { name: 'Tanstack Query', icon: ICON_URL.TANSTACK, score: '4' },
  { name: 'Vite', icon: ICON_URL.VITE, score: '4' },
  { name: 'Express', icon: ICON_URL.EXPRESS, score: '4' },
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
          과거 첫 팀 프로젝트에선 툴의 기능만 아는 채로 코딩하니 제가 짠 프로그램의 흐름을 이해할 수 없었습니다.
          또한, Vanilla JS로 노션 클로링 과제를 했을 때는 시스템의 유연성이 떨어져 기능을 추가할수록 난이도가 어려워졌습니다.
        <br>
          이후 원리가 궁금할 때 마다 블로그에 글을 작성해나갔고, 리액트 훅과 최적화 전략, Suspense, CSS 등의 원리나 선택 이유에 대해 배웠습니다.
          다음 프로젝트부턴 팀원의 코드에서 무한 리렌더링을 수정하여 토움을 주거나, 커스텀 훅을 작성하고 사용법을 공유해 팀에 기여하기도 했습니다.
          이번 포트폴리오를 Vanilla JS로 만들 땐 컴포넌트의 생애주기와 배칭을 설계하여 기능을 수월하게 넣을 수 있었습니다.
        <br>
          앞으로도 원리를 깊게 배워가며 툴에 끌려다니는 개발자가 되지 않으려 합니다.
        </p>
      </section>
      <section class="profile__additional"> 
        <p class="profile__personal">
          1997년생 남성 군필
        </p>
      </section>
      <section class="profile__additional">
        <p class="profile__edu profile__edu--first">
          프로그래머스: K-Digital Training: 4기 빅데이터 플랫폼 프론트엔드 엔지니어링
          <br>
          (2023년 6월 ~ 2023년 12월)
        </p>
        <p class="profile__edu">
          서울대학교 웹개발 동아리 와플스튜디오
          <br>
          (2022년 7월 ~ 2023년 1월)
        </p>
        <p class="profile__edu">서울대학교 전기•정보공학부 (Electrical and Computer Engineering) 학사 졸업</p>
      </section>
      <section class="profile__additional"> 
        ${skills
          .map(
            ({ name, icon, score }, index) => `
            <div class="profile__skill profile__skill${
              index <= 0 ? '--first' : ''
            }">
              <img src="${icon}" alt="${name}" class="profile__skill-icon loading" />
              <p class="profile__stars">${Array.from({ length: score })
                .fill('⭐')
                .join('')}</p>
            </div>
          `,
          )
          .join('')}
      </section>
    </div>
  `,
};
