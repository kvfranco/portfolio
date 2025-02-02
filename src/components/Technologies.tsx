import technologiesImages from "../utils/technologiesImages";
import styles from './Technologies.module.css';

export default function Technologies() {
  return (
    <section className={styles["tecnologias"]}>
      <h2>Tecnologias com as quais trabalhei</h2>
      <div className={styles["container-imagens-tecnologia"]}>
        {technologiesImages.map(technology => (
          <div className={styles["imagem-tecnologia"]} key={technology.name}>
            <p className={styles.tooltip}>{technology.name}</p>
            <img src={technology.imgPNG} alt={`Logo ${technology.name}`} width={technology.width} height={technology.height} />
        </div>
      ))}
      </div>
    </section>
  );
}