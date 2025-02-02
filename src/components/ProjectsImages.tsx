import giveMeFoodsImgJpg from '../assets/images/projects/preview-project-give-me-foods.jpeg';
import giveMeFoodsImgWebP from '../assets/images/projects/preview-project-give-me-foods.webp';
import myBrazilImgJpg from '../assets/images/projects/preview-project-my-brazil.jpeg';
import myBrazilImgWebP from '../assets/images/projects/preview-project-my-brazil.webp';

import styles from './ProjectsImages.module.css';

export default function ProjectsImages() {
  return (
    <div className={styles["imagens-projetos"]}>
      <div id={styles["imagens-projetos-foto-1"]}>
        <picture>
          <source srcSet={giveMeFoodsImgWebP} type="image/webp" />
          <img src={giveMeFoodsImgJpg} alt="Preview do projeto Give Me Foods" />
        </picture>
      </div>
      <div id={styles["imagens-projetos-foto-2"]}>
        <picture>
          <source srcSet={myBrazilImgWebP} type="image/webp" />
          <img src={myBrazilImgJpg} alt="Preview do projeto My Brazil" />
        </picture>
      </div>
    </div>
  );
}