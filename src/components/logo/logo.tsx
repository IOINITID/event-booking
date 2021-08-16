// Routes
import { Routes } from '../../routes';

// Components
import { Link } from '../link';

// Types
import { LogoProps } from './types';

// Assets
import logoIcon from '../../assets/images/logo-icon.svg';

const Logo = ({ width }: LogoProps) => {
  return (
    <Link to={Routes.Main}>
      <img src={logoIcon} width={width} alt="Логотип Event booking." />
    </Link>
  );
};

export { Logo };
