import { IMAGE_URL } from '../../utils/images';

export const profile = {
  id: '/profile',
  content: `
    <div id="profile" class="profile">
      <section class="profile__intro">
        <img src="${IMAGE_URL.PROFILE}" alt="프로필 이미지" class="profile__image loading" />
        <p class="profile__intro-text">원리를 어쩌구~</p>
      </section>
      <section class="profile__text">
        <p>소개 관련 내용</p>
      </section>
    </div>
  `,
};
