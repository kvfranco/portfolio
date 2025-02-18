import styles from "./Projects.module.css";
import ProjectsImages from "./ProjectsImages";

export default function Projects() {
  return (
    <>
      <section className={styles.projetos}>
        <ProjectsImages />
        <div className={styles["texto-projetos"]}>
          <h1 style={{ "--i": 0 } as React.CSSProperties}>
            &#x1F9F0; Projetos
          </h1>
          <p style={{ "--i": 1 } as React.CSSProperties}>
            Conheça alguns dos meus projetos desenvolvidos para clientes reais,
            nos quais foram entregues soluções personalizadas para atender às
            demandas solicitadas. A entrega foi realizada após a avaliação final
            do cliente, com todas as correções e adaptações feitas conforme o
            feedback recebido.
          </p>
          <menu
            style={{ "--i": 3 } as React.CSSProperties}
            className={styles["lista-projetos"]}
          >
            <li>
              <a target="_blank" href="https://givemefoods.kvfranco.com">
                Give Me Foods
              </a>
            </li>
            <li>
              <a target="_blank" href="https://mybrazil.kvfranco.com">
                My Brazil
              </a>
            </li>
            <li>
              <a target="_blank" href="https://ediarnaldo.adv.br">
                Ediarnaldo Advocacia
              </a>
            </li>
          </menu>
          <p style={{ "--i": 4 } as React.CSSProperties}>
            Todos os projetos estão hospedados no meu próprio servidor! Isso
            mesmo: mantenho um servidor 24/7 para estudos e hospedagem de tudo
            que você vê por aqui. Além disso, implementei um ambiente híbrido
            integrando minha infraestrutura local à Oracle Cloud, garantindo
            alta disponibilidade e redundância. Essa experiência me levou a
            estudar mais sobre infraestrutura e DevOps, obtendo certificações do{" "}
            <a
              target="_blank"
              href="https://www.coursera.org/account/accomplishments/professional-cert/W39NB9W63SPV"
            >
              Google
            </a>{" "}
            e{" "}
            <a
              target="_blank"
              href="https://www.credly.com/badges/d95c6750-fba1-459f-9fab-47d0cc917a86/linked_in_profile"
            >
              AWS
            </a>
            . Curioso para saber mais?{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/kvfranco/details/projects/"
            >
              Conheça o meu servidor
            </a>{" "}
            e descubra o que ocorre bastidores!
          </p>
        </div>
      </section>
    </>
  );
}