// Components
import { Link } from '../link';

// Types
import { LinkDataType, NavigationProps } from './types';

// Styles
import { styles } from './styles';

const Navigation = ({ pathname, linksData }: NavigationProps) => {
  return (
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
  );
};

export { Navigation };
