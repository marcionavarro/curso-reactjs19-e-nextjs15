import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';
import styles from './styles.module.css';

type AvalilableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvalilableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvalilableThemes) || 'dark';
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    evento: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    evento.preventDefault();
    setTheme(prevTheme => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        href='/'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        href='/history'
        className={styles.menuLink}
        aria-label='Ver Historico'
        title='Ver Historico'
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        href='/settings'
        className={styles.menuLink}
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        href='#'
        className={styles.menuLink}
        aria-label='Mudar tema'
        title='Mudar tema'
        onClick={event => handleThemeChange(event)}
      >
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}
