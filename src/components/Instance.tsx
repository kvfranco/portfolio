import { useEffect, useState } from "react";
import getInstance from "../utils/getInstance";
import styles from "./Instance.module.css";

export default function Instance() {
  const [instance, setInstance] = useState<string | null>(null);
  const [hideInstance, setHideInstance] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await getInstance();
      setInstance(response);
    }
    console.log("Verificando instância...");
    getData();
  }, []);

  useEffect(() => {
    function handleScroll() {
      setHideInstance(window.scrollY > 10);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <p className={`${styles.p} ${hideInstance ? styles.hidden : ""}`}>
      {!instance && "Identificando a instância..."}
      {instance === "error" && "Não foi possível identificar a instância"}
      {instance && instance !== "error" && (
        <>
          <abbr title={`Instância: ${instance} - hospedagem balanceada (Oracle 1, Oracle 2 e On-Premise)`}>
            &#x1F310; Instância:
          </abbr>
          {` ${instance}`}
        </>
      )}
    </p>
  );
}