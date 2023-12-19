'use client';
import { useState, useEffect, FC } from 'react';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import style from './style.module.scss';
import { useTheme } from 'next-themes';

const Header: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <header className={style.header}></header>;
  }

  const toggleTheme = (checked: boolean) => {
    const theme = checked ? 'dark' : 'light';
    setTheme(theme);
  };

  return (
    <header className={style.header}>
      <ToggleSwitch label="theme" onToggle={toggleTheme} />
      <p>Toggle Theme ({theme})</p>
    </header>
  );
};

export default Header;
