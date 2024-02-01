import { IMAGE_URL } from '../../utils/images';

const projects = [
  {
    id: 'portfolio',
    url: null,
    description:
      'Vanilla JS와 Serverless로 만든 SSR 방식의 포트폴리오 사이트입니다.',
    skills: [
      'JavaScript',
      'Serverless Framework',
      'Express',
      'Webpack',
      'Sass',
      'Aws Lambda',
      'Aws S3',
    ],
  },
];

export const projectList = {
  id: '/project-list',
  content: `
    <div id="project-list" class="project-list">
      <section class="project-list__album">
        사진들
      </section>
      <section class="project-list__description">
        프로젝트 설명
      </section>
    </div>
  `,
};
