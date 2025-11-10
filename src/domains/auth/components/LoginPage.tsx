import { LoginForm } from './LoginForm';
import { oauthProviders } from '../constants/oauthProviders';
import { OAuthProviderButton } from './OAuthProviderButton';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <main className={styles.page}>
      <section className={styles.panel}>
        <div className={styles.headline}>
          <p className={styles.subtitle}>Jerry Admin Console</p>
          <h1 className={styles.title}>로그인하여 Console에 접속하세요</h1>
          <p className={styles.subtitle}>이메일 계정 또는 카카오/네이버/Google 계정으로 로그인할 수 있습니다.</p>
        </div>

        <LoginForm />

        <div>
          <p className={styles.helper}>SSO 제공사별 OAuth 2.0 연동을 완료하면 아래 버튼이 활성화됩니다.</p>
          <hr className={styles.divider} />
          <div className={styles.providers}>
            {oauthProviders.map((provider) => (
              <OAuthProviderButton key={provider.id} provider={provider} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
