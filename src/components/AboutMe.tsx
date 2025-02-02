import kevinPhotoJPG from '../assets/images/foto-rosto-kevin.jpg';
import kevinPhotoWebP from '../assets/images/foto-rosto-kevin.webp';
import styles from './AboutMe.module.css';

export default function AboutMe() {
  return (
    <section className={styles.apresentacao}>
      <div className={styles["apresentacao-texto"]}>
        <h1 style={{"--i": 0} as React.CSSProperties}>Olá &#x1F44B;</h1>
        <p style={{"--i": 1} as React.CSSProperties}>Bem vindo ao meu portfólio! Meu nome é Kevin e eu sou <strong>desenvolvedor fullstack</strong>.</p>
        <p style={{"--i": 2} as React.CSSProperties}>Sou apaixonado por tecnologia e inovação, sempre em busca de novos desafios. Proativo e adaptável, me empenho em aprender continuamente para entregar soluções de alto impacto e promover a inovação.</p>
        <p style={{"--i": 3} as React.CSSProperties}>Durante a graduação, fui monitor de programação e destaquei-me na <strong>resolução de desafios</strong>, como <a target="_blank" href="https://github.com/iperetta/MTP_2018-2/blob/master/Tutorial%20-%20Visualiza%C3%A7%C3%A3o%20de%20Caracteres%20Acentuados%20e%20Especiais%20para%20Windows.pdf">este aqui</a>. Conquistei uma <strong>média geral de 90,2/100</strong> no curso de Engenharia Elétrica pela Universidade Federal de Uberlândia (UFU), um resultado que considero um reflexo da minha <strong>dedicação</strong>. Esse mesmo <strong>empenho</strong> é o que levo para cada projeto e tarefa que assumo.</p>
        <p style={{"--i": 4} as React.CSSProperties}>Ao longo da minha carreira, também desenvolvi hardware e software para sistemas embarcados usando C/C++ e criei aplicativos Android utilizando plataformas low code. Confira mais no <a target="_blank" href="https://www.linkedin.com/in/kvfranco/">LinkedIn</a>.</p>
        <p style={{"--i": 5} as React.CSSProperties}>Ei, já que você leu até aqui, role para baixo para conhecer um pouco sobre os meus <strong>projetos</strong>.</p>
      </div>
      <div>
        <picture>
          <source srcSet={kevinPhotoWebP} type="image/webp" />
          <img className={styles["foto-rosto"]} src={kevinPhotoJPG} alt="Foto de rosto do Kevin" />
        </picture>
      </div>
    </section>
  );
}