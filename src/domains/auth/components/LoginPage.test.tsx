import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LoginPage } from './LoginPage';

const renderLoginPage = () => {
  const client = new QueryClient();
  return render(
    <QueryClientProvider client={client}>
      <LoginPage />
    </QueryClientProvider>
  );
};

describe('LoginPage', () => {
  it('shows username and password fields', () => {
    renderLoginPage();
    expect(screen.getByLabelText('이메일')).toBeInTheDocument();
    expect(screen.getByLabelText('비밀번호')).toBeInTheDocument();
  });

  it('keeps oauth provider buttons disabled until integration', () => {
    renderLoginPage();
    const kakao = screen.getByRole('button', { name: /카카오 계정으로 로그인/i });
    const naver = screen.getByRole('button', { name: /네이버 아이디로 로그인/i });
    const google = screen.getByRole('button', { name: /google 계정으로 로그인/i });

    expect(kakao).toBeDisabled();
    expect(naver).toBeDisabled();
    expect(google).toBeDisabled();
  });
});
