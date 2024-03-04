import React from 'react';
import { useTranslation } from 'react-i18next';

function WelcomeMessage() {
  const { t } = useTranslation();

  return <h1>{t('welcome')}</h1>;
}

function Greeting({ name }) {
  const { t } = useTranslation();

  return <p>{t('greeting', { name })}</p>;
}

export default function App() {
  return (
    <div>
      <WelcomeMessage />
      <Greeting name="John" />
    </div>
  );
}
