// Components
import { Link } from '../link';

// Routes
import { Routes } from '../../routes';

// Assets
import logoIcon from '../../assets/images/logo-icon.svg';

const Logo = () => {
  return (
    <Link to={Routes.Main}>
      <img src={logoIcon} width={210} alt="Логотип Event booking." />
    </Link>
  );
};

export { Logo };
