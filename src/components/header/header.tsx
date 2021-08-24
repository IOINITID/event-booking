// Components
import { Logo } from '../logo';

// Containers
import { NavigationContainer } from '../../containers/navigation-container';

// Styles
import { styles } from './styles';

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <NavigationContainer />
    </header>
  );
};

export { Header };
