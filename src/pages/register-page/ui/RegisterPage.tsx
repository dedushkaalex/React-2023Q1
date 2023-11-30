import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';
import { Input } from '@/shared/ui/Input';

import styles from './RegisterPage.module.css';

export const RegisterPage = () => {
  return (
    <Container>
      <section className={styles.register}>
        <div className={styles.form__container}>
          <h2 className={styles.form__title}>Create a new account</h2>
          <p className={styles.form__subtitle}>RSSchool Top</p>
          <div className={styles.form__item}>
            <Input
              className={styles.field}
              placeholder='Name'
            />
          </div>

          <div className={styles.form__item}>
            <Input
              className={styles.field}
              placeholder='Age'
              type='number'
            />
          </div>

          <div className={styles.form__item}>
            <Input
              className={styles.field}
              placeholder='Email'
              type='email'
            />
          </div>
          <Button>Register </Button>
        </div>
      </section>
    </Container>
  );
};
