export type EventProps = {
  /** Event title */
  title: string;
  /** Event date */
  date: string;
  /** Event price */
  price: string;
  /** Path to image for event */
  image: string;
  /** Handler to show modal with details */
  onDetailClick: () => void;
};
