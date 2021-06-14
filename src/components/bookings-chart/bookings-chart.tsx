import React from 'react';

// Styles imports
import { styles } from './styled';

// Additional imports
import { PieChart, Pie, Cell } from 'recharts';
import { css, cx } from '@emotion/css';

const BookingsChart = (props: any) => {
  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const one = props.bookings.reduce((previousValue: number, currentValue: any) => {
    if (currentValue.event.price >= 0 && currentValue.event.price <= 3000) {
      return previousValue + currentValue.event.price;
    } else {
      return previousValue;
    }
  }, 0);

  const two = props.bookings.reduce((previousValue: number, currentValue: any) => {
    if (currentValue.event.price >= 3000 && currentValue.event.price <= 8000) {
      return previousValue + currentValue.event.price;
    } else {
      return previousValue;
    }
  }, 0);

  const three = props.bookings.reduce((previousValue: number, currentValue: any) => {
    if (currentValue.event.price >= 8000 && currentValue.event.price <= 10000) {
      return previousValue + currentValue.event.price;
    } else {
      return previousValue;
    }
  }, 0);

  const four = props.bookings.reduce((previousValue: number, currentValue: any) => {
    if (currentValue.event.price >= 10000) {
      return previousValue + currentValue.event.price;
    } else {
      return previousValue;
    }
  }, 0);

  const dataValues = [
    { name: 'one', value: one, color: '#557AFF' },
    { name: 'two', value: two, color: '#33EF23' },
    { name: 'three', value: three, color: '#6423EF' },
    { name: 'four', value: four, color: '#EF4723' },
  ];

  const data = dataValues.filter((item: any) => item.value);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.heading}>Статистика расходов на мероприятия</h2>
        <ul className={styles.list}>
          <li className={styles.item}>
            <div
              className={cx(
                styles.itemIndicator,
                css`
                  background-color: #557aff;
                `
              )}
            ></div>
            <p className={styles.itemDescription}>От 0₽ до 3 000₽</p>
          </li>
          <li className={styles.item}>
            <div
              className={cx(
                styles.itemIndicator,
                css`
                  background-color: #33ef23;
                `
              )}
            ></div>
            <p className={styles.itemDescription}>От 3 000₽ до 8 000₽</p>
          </li>
          <li className={styles.item}>
            <div
              className={cx(
                styles.itemIndicator,
                css`
                  background-color: #6423ef;
                `
              )}
            ></div>
            <p className={styles.itemDescription}>От 8 000₽ до 10 000₽</p>
          </li>
          <li className={styles.item}>
            <div
              className={cx(
                styles.itemIndicator,
                css`
                  background-color: #ef4723;
                `
              )}
            ></div>
            <p className={styles.itemDescription}>От 10 000₽ и более</p>
          </li>
        </ul>
      </div>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={160}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default BookingsChart;
