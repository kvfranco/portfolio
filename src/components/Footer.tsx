import styles from "./Footer.module.css";
import linkedinImg from "../assets/icons/linkedin.svg";
import githubImg from "../assets/icons/github.svg";
import emailImg from "../assets/icons/email-outline.svg";
import phoneImg from "../assets/icons/phone.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <section className={styles["redes-sociais"]}>
          <h2>Confira minhas redes sociais!</h2>
          <div className={styles["redes-sociais-links"]}>
            <a href="https://www.linkedin.com/in/kvfranco/" target="_blank">
              <img src={linkedinImg} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/kvfranco" target="_blank">
              <img src={githubImg} alt="GitHub Icon" />
            </a>
            <a href="mailto:contato@kvfranco.com" target="_blank">
              <img src={emailImg} alt="Email Icon" />
            </a>
            <a href="https://wa.me/5534991487718" target="_blank">
              <img src={phoneImg} alt="Phone Icon" />
            </a>
          </div>
          <p>
            Caso queira entrar em contato, tenha uma proposta ou encontre algum
            bug, sinta-se à vontade para entrar em contato. Estou à disposição!
          </p>
        </section>
      </footer>
    </>
  );
}