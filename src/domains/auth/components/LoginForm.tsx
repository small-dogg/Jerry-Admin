import { FormProvider } from 'react-hook-form';
import { useEmailLogin } from '../hooks/useEmailLogin';
import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const { form, handleSubmit, fieldState, isLoading, error } = useEmailLogin();

  return (
    <FormProvider {...form}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="username">
            이메일
          </label>
          <input
            id="username"
            type="email"
            className={styles.input}
            placeholder="admin@jerry-admin.com"
            autoComplete="email"
            {...form.register('username')}
            disabled={isLoading}
          />
          {fieldState.username && <span className={styles.error}>{fieldState.username}</span>}
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            비밀번호
          </label>
          <input
            id="password"
            type="password"
            className={styles.input}
            placeholder="영문, 숫자 포함 8자 이상"
            autoComplete="current-password"
            {...form.register('password')}
            disabled={isLoading}
          />
          {fieldState.password && <span className={styles.error}>{fieldState.password}</span>}
        </div>

        {error && <div className={styles.alert}>{error.message}</div>}

        <button type="submit" className={styles.submit} disabled={isLoading}>
          {isLoading ? '로그인 중...' : '로그인하기'}
        </button>
      </form>
    </FormProvider>
  );
};
