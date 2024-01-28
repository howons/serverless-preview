import { IMAGE_URL } from '../../utils/images';

export const profile = {
  title: '프로필',
  style: `<link id="style-profile" rel="stylesheet" href="./src/profile.css" />`,
  content: `
    <div id="profile" class="profile">
      <section class="profile__">
        <img src="${IMAGE_URL.PROFILE}" alt="프로필 이미지" class="profile__image" />
      </section>
    </div>
  `,
};
