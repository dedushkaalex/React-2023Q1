import styles from './RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <div className={styles.form__container}>
      <h2 className={styles.form__title}>Create a new account</h2>
      <p className={styles.form__subtitle}>To use snapgram, Please enter your details</p>
    </div>
  );
};
