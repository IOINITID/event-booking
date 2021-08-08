/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ChangeEvent, useState } from 'react';

// Components imports
import { Modal } from './modal';
import imageIcon from '../../assets/images/image-icon.svg';
import closeIcon from '../../assets/images/close-icon.svg';

// Additional imports
import { toast } from 'react-toastify';
import { css } from '@emotion/css';

// Interfaces and types
interface IEventData {
  title: string;
  description: string;
  date: string;
  price: string;
  location: string;
  image: string;
}

interface IModalCreateEvent {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: (eventData: IEventData) => void;
}

const ModalCreateEvent = (props: IModalCreateEvent) => {
  // State values
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  return (
    <Modal
      isOpen={props.isOpen}
      cancelButton={{ title: 'Отменить', onClick: props.onCancel }}
      confirmButton={{
        title: ' Создать мероприятие ⟶',
        onClick: () => props.onConfirm({ title, price, date, description, location, image }),
      }}
      width={808}
    >
      <header
        className={css`
          display: grid;
          justify-content: space-between;
          align-items: center;
          grid-auto-flow: column;
          padding: 24px 40px;
          border-bottom: 1px solid #282828;
        `}
      >
        <h2
          className={css`
            margin: 0;
          `}
        >
          Создать мероприятие
        </h2>
        <div
          className={css`
            cursor: pointer;
          `}
          onClick={props.onCancel}
        >
          <img src={closeIcon} alt="" />
        </div>
      </header>

      <form
        className={css`
          display: grid;
          padding: 32px;
          row-gap: 24px;
        `}
        action="#"
      >
        <div
          className={css`
            display: grid;
            grid-auto-flow: column;
            column-gap: 48px;
          `}
        >
          <div
            className={css`
              display: grid;
              row-gap: 24px;
            `}
          >
            <div
              className={css`
                display: grid;
                row-gap: 16px;
              `}
            >
              <p
                className={css`
                  margin: 0;
                `}
              >
                Обложка мероприятия
              </p>
              <p
                className={css`
                  margin: 0;
                `}
              >
                Рекомендуемый размер изображения не менее 800x300 пикселей и весом не более 5MB.
              </p>
            </div>
            <div
              className={css`
                position: relative;
                width: max-content;
                height: max-content;
                padding: 16px 24px;
                font-weight: 700;
                font-size: 14px;
                line-height: 16px;
                font-family: 'Grandis Extended', 'Arial', sans-serif;
                color: #ef4723;
                background: transparent;
                border: 1px solid #ef4723;
                border-radius: 8px;
                cursor: pointer;

                &:hover,
                &:focus {
                  color: #ffffff;
                  background: #f06749;
                }

                &:active {
                  color: #ffffff;
                  background: #e52f07;
                }
              `}
            >
              <label
                className={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                  opacity: 0;
                `}
                htmlFor="image"
              >
                Обложка мероприятия
              </label>
              <input
                className={css`
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  opacity: 0;
                  pointer-events: none;
                `}
                type="file"
                id="image"
                name="image"
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const image = event.target.files[0];
                  const fileReader = new FileReader();

                  fileReader.readAsDataURL(image);
                  fileReader.onload = () => {
                    const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

                    if (image.size > MAX_IMAGE_SIZE) {
                      toast('Изображение должно быть меньше 5MB.');
                      return;
                    } else {
                      setImage(String(fileReader.result));
                    }
                  };
                }}
              />
              <span
                className={css`
                  cursor: pointer;
                `}
              >
                Выбрать файл
              </span>
            </div>
          </div>

          <div
            className={css`
              position: relative;
              box-sizing: border-box;
              width: 352px;
              height: 188px;
              border: 2px dashed #282828;
              border-radius: 16px;
            `}
          >
            <img
              className={css`
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 4px;
                border-radius: 16px;
                object-position: 50% 50%;
                object-fit: ${image ? 'cover' : 'none'};
              `}
              src={image ? image : imageIcon}
              alt=""
            />
          </div>
        </div>

        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 24px;
          `}
        >
          <div
            className={css`
              display: grid;
              row-gap: 16px;
            `}
          >
            <label htmlFor="title">Название мероприятия</label>
            <input
              className={css`
                padding: 20px 16px;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                font-family: 'Grandis Extended', 'Arial', sans-serif;
                color: #282828;
                border: 1px solid #282828;
                border-radius: 8px;
              `}
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div
            className={css`
              display: grid;
              row-gap: 16px;
            `}
          >
            <label htmlFor="price">Стоимость</label>
            <input
              className={css`
                padding: 20px 16px;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                font-family: 'Grandis Extended', 'Arial', sans-serif;
                color: #282828;
                border: 1px solid #282828;
                border-radius: 8px;
              `}
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
        </div>

        <div
          className={css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 24px;
          `}
        >
          <div
            className={css`
              display: grid;
              row-gap: 16px;
            `}
          >
            <label htmlFor="date">Дата и время проведения</label>
            <input
              className={css`
                padding: 20px 16px;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                font-family: 'Grandis Extended', 'Arial', sans-serif;
                color: #282828;
                border: 1px solid #282828;
                border-radius: 8px;
              `}
              type="datetime-local"
              id="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>

          <div
            className={css`
              display: grid;
              row-gap: 16px;
            `}
          >
            <label htmlFor="location">Место проведения</label>
            <input
              className={css`
                padding: 20px 16px;
                font-weight: 400;
                font-size: 14px;
                line-height: 16px;
                font-family: 'Grandis Extended', 'Arial', sans-serif;
                color: #282828;
                border: 1px solid #282828;
                border-radius: 8px;
              `}
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
            />
          </div>
        </div>

        <div
          className={css`
            display: grid;
            row-gap: 16px;
          `}
        >
          <label htmlFor="description">Описание</label>
          <textarea
            className={css`
              min-height: 152px;
              padding: 16px;
              font-weight: 400;
              font-size: 14px;
              line-height: 20px;
              font-family: 'Grandis Extended', 'Arial', sans-serif;
              color: #282828;
              border: 1px solid #282828;
              border-radius: 8px;
            `}
            id="description"
            name="description"
            value={description}
            maxLength={500}
            onChange={(event) => setDescription(event.target.value)}
            rows={4}
          />
          <span
            className={css`
              justify-self: end;
            `}
          >
            {`${description.length}/500`}
          </span>
        </div>
      </form>
    </Modal>
  );
};

export { ModalCreateEvent };
