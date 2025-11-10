import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { sleep } from '@/lib/sleep';

const loginSchema = z.object({
  username: z.string().email('올바른 이메일을 입력하세요.'),
  password: z.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
});

export type EmailLoginFields = z.infer<typeof loginSchema>;

async function mockEmailLogin(payload: EmailLoginFields) {
  await sleep(800);
  if (payload.password === 'wrong-pass') {
    throw new Error('아이디 혹은 비밀번호를 확인하세요.');
  }
  return { token: 'dev-token', user: { email: payload.username } };
}

export const useEmailLogin = () => {
  const form = useForm<EmailLoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  const mutation = useMutation({
    mutationKey: ['email-login'],
    mutationFn: mockEmailLogin,
    onSuccess: () => {
      form.reset();
    }
  });

  const handleSubmit = form.handleSubmit((values) => mutation.mutate(values));

  const fieldState = useMemo(
    () => ({
      username: form.formState.errors.username?.message,
      password: form.formState.errors.password?.message
    }),
    [form.formState.errors.password?.message, form.formState.errors.username?.message]
  );

  return { form, handleSubmit, fieldState, isLoading: mutation.isPending, error: mutation.error };
};
