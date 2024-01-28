import { IMAGE_URL } from '../../utils/images';

export const profile = {
  id: 'profile',
  title: '프로필',
  content: `
    <div id="profile" class="profile">
      <section class="profile__">
        <img src="${IMAGE_URL.PROFILE}" alt="프로필 이미지" class="profile__image" />
      </section>
    </div>
  `,
};
