export type OAuthProviderId = 'kakao' | 'naver' | 'google';

export type OAuthProviderConfig = {
  id: OAuthProviderId;
  label: string;
  description: string;
  brandColor: string;
  disabled: boolean;
  docLink: string;
};

export const oauthProviders: OAuthProviderConfig[] = [
  {
    id: 'kakao',
    label: '카카오 계정으로 로그인',
    description: '카카오 디벨로퍼 콘솔 연동 후 활성화됩니다.',
    brandColor: '#fee500',
    disabled: true,
    docLink: 'https://developers.kakao.com/'
  },
  {
    id: 'naver',
    label: '네이버 아이디로 로그인',
    description: '네이버 클라우드 플랫폼 OAuth 설정 시 사용 가능합니다.',
    brandColor: '#03c75a',
    disabled: true,
    docLink: 'https://developers.naver.com/docs/login/'
  },
  {
    id: 'google',
    label: 'Google 계정으로 로그인',
    description: 'Google Cloud OAuth 동의 화면 검수 후 오픈됩니다.',
    brandColor: '#f8f9fa',
    disabled: true,
    docLink: 'https://console.cloud.google.com/apis/credentials'
  }
];
