// Components
import { Link } from '../link';
import { Logo } from '../logo';

// Types
import { LinkDataType } from './types';

// Hooks
import { useNavigation } from './hooks';

// Styles
import { styles } from './styles';

const Navigation = () => {
  const { pathname, linksData } = useNavigation();

  return (
    <header className={styles.header}>
      <Logo width={210} />
      <nav>
        <ul className={styles.navigationList}>
          {linksData.map(({ id, enable, title, path, onClick }: LinkDataType) => {
            return (
              enable && (
                <li key={id} className={styles.navigationItem}>
                  <Link variant={pathname === path ? 'contained' : 'outlined'} to={path} onClick={onClick}>
                    {title}
                  </Link>
                </li>
              )
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export { Navigation };
