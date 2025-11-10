import styles from './OAuthProviderButton.module.css';
import type { OAuthProviderConfig } from '../constants/oauthProviders';

type Props = {
  provider: OAuthProviderConfig;
};

export const OAuthProviderButton = ({ provider }: Props) => {
  return (
    <button
      type="button"
      className={styles.button}
      style={{ background: provider.brandColor }}
      disabled={provider.disabled}
      aria-disabled={provider.disabled}
    >
      <span className={styles.left}>
        <span className={styles.label}>{provider.label}</span>
        <span className={styles.description}>{provider.description}</span>
      </span>
      <span className={styles.badge}>준비 중</span>
    </button>
  );
};
