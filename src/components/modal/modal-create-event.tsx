/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { css } from '@emotion/css';
import React from 'react';
import { useHistory } from 'react-router';
import { selectToken } from '../../features/user/userSlice';
import { useSelectorTyped } from '../../hooks';
import { styledButton, styledButtonCancel, styledModalActions } from './styled';
import imageIcon from '../../assets/images/image-icon.svg';
import closeIcon from '../../assets/images/close-icon.svg';

interface IModal {
  title: string;
  description?: string;
  date?: string;
  price?: number;
  cancel: boolean;
  confirm: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  confirmText?: string;
}

const ModalCreateEvent = (props: any) => {
  const token = useSelectorTyped(selectToken);
  const history = useHistory();

  return (
    <div
      className={css`
        z-index: 10;
        width: 808px;
        margin: 0 auto;
        background-color: #ffffff;
        border-radius: 16px;
      `}
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
          padding: 24px 40px 40px 40px;
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
                Рекомендуемый размер изображения не менее 800x300 пикселей
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
              />
              <span
                className={css`
                  cursor: pointer;
                `}
              >
                Выбрать фаил
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
                object-position: 50% 50%;
                object-fit: none;
              `}
              src={imageIcon}
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
              value={props.title}
              onChange={(event) => props.setTitle(event.target.value)}
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
              value={props.price}
              onChange={(event) => props.setPrice(event.target.value)}
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
              value={props.date}
              onChange={(event) => props.setDate(event.target.value)}
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
              value={props.location}
              onChange={(event) => props.setLocation(event.target.value)}
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
            value={props.description}
            onChange={(event) => props.setDescription(event.target.value)}
            rows={4}
          />
        </div>
      </form>

      <div className={styledModalActions}>
        <button className={styledButtonCancel} onClick={props.onCancel}>
          Отмена
        </button>
        <button className={styledButton} onClick={() => (token ? props.onConfirm() : history.push('/authorization'))}>
          Создать мероприятие ⟶
        </button>
      </div>
    </div>
  );
};

export default ModalCreateEvent;
