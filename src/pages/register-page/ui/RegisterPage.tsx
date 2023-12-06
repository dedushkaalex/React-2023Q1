import { RegisterForm } from '@/features/register';
import { Container } from '@/shared/ui/Container';

import styles from './RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <Container>
      <section className={styles.register}>
        <div className={styles.form__container}>
          <h2 className={styles.form__title}>Create a new account</h2>
          <p className={styles.form__subtitle}>RSSchool Top</p>
          <RegisterForm />
        </div>
      </section>
    </Container>
  );
};
