import React from "react";
import styles from "../Formacao.module.scss";

interface FormacaoProps
{
    logo: string;
    curso: string;
    data: string;
}

export const FormacaoBloco: React.FC<FormacaoProps> = ({ logo, curso, data }) =>
{
    return (
        <div className={styles.formacao__bloco}>
            <img src={logo} alt="Logo" className={styles.formacao__logo} />
            <div className={styles.formacao__conteudo}>
                <hr className={styles.formacao__linha} />
                <p className={styles.formacao__curso}>{curso}</p>
                <p className={styles.formacao__data}>{data}</p>
            </div>
        </div>
    );
};
