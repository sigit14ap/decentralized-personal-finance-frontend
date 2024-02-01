import React from 'react';
import AuthLayout from '@/components/templates/AuthLayout';
import LoginForm from '@/components/molecules/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
};

export default LoginPage;