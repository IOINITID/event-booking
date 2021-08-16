// Components
import { Logo } from '../logo';
import { Navigation } from '../navigation';

// Hooks
import { useNavigation } from '../navigation/hooks';

// Styles
import { styles } from './styles';

const Header = () => {
  const { pathname, linksData } = useNavigation();

  return (
    <header className={styles.header}>
      <Logo width={210} />
      <Navigation pathname={pathname} linksData={linksData} />
    </header>
  );
};

export { Header };
