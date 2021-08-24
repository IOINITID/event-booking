// Components
import { Logo } from '../logo';

// Containers
import { NavigationContainer } from '../../containers/navigation-container';

// Styles
import { styles } from './styles';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo width={210} />
      <NavigationContainer />
    </header>
  );
};

export { Header };
