// Components imports
import { Button } from '../button';

// Styles imports
import { styles } from './styles';

// Interfaces and types
interface IEventsBanner {
  description: string;
  buttonTitle: string;
  onClick: () => void;
}

const InfoBanner = (props: IEventsBanner) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        Здесь пока пусто.
        <br />
        {props.description}
      </h2>
      <Button variant="contained" onClick={props.onClick}>
        {props.buttonTitle} ⟶
      </Button>
    </div>
  );
};

export { InfoBanner };
