// Additional
import { PieChart, Pie, Cell, PieLabelRenderProps } from 'recharts';
import { css, cx } from '@emotion/css';

// Types
import { StatisticsTabProps } from './types';

// Styles
import { styles } from './styles';

const StatisticsTab = ({ bookingsStatistics }: StatisticsTabProps) => {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelRenderProps) => {
    const radius = Number(innerRadius) + (Number(outerRadius) - Number(innerRadius)) * 0.5;
    const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
    const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > Number(cx) ? 'start' : 'end'} dominantBaseline="central">
        {`${(Number(percent) * 100).toFixed(0)}%`}
      </text>
    );
  };

  const dataValues = [
    { value: bookingsStatistics?.lowPriceSum, color: '#557AFF' },
    { value: bookingsStatistics?.mediumPriceSum, color: '#33EF23' },
    { value: bookingsStatistics?.highPriceSum, color: '#6423EF' },
    { value: bookingsStatistics?.veryHighPriceSum, color: '#EF4723' },
  ];

  const data = dataValues.filter((value) => value.value);

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
          {data.map(({ color }, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export { StatisticsTab };
