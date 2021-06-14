import React from 'react';
// import { Bar } from 'react-chartjs-2';
import { styles } from './styled';
import { PieChart, Pie, Cell } from 'recharts';

// const BOOKING_BUCKETS = {
//   Cheap: {
//     min: 0,
//     max: 100,
//     color: 'rgba(255, 99, 132, 0.2)',
//   },
//   Normal: {
//     min: 100,
//     max: 200,
//     color: 'rgba(54, 162, 235, 0.2)',
//   },
//   Expensive: {
//     min: 200,
//     max: 1000,
//     color: 'rgba(255, 206, 86, 0.2)',
//   },
// };

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#557AFF', '#33EF23', '#6423EF', '#EF4723'];
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

const BookingsChart = (props: any) => {
  // const chartData = { labels: [], datasets: [] };
  // let values = [];

  // for (const bucket in BOOKING_BUCKETS) {
  //   const filteredBookingsCount = props.bookings.reduce((prevValue, currentValue) => {
  //     if (
  //       currentValue.event.price > BOOKING_BUCKETS[bucket].min &&
  //       currentValue.event.price < BOOKING_BUCKETS[bucket].max
  //     ) {
  //       return prevValue + 1;
  //     } else {
  //       return prevValue;
  //     }
  //   }, 0);

  //   values.push(filteredBookingsCount);

  //   chartData.labels.push(bucket);
  //   chartData.datasets.push({
  //     label: [bucket],
  //     backgroundColor: [BOOKING_BUCKETS[bucket].color],
  //     borderColor: [BOOKING_BUCKETS[bucket].color],
  //     borderWidth: 1,
  //     data: values,
  //   });

  //   values = [...values];
  //   values[values.length - 1] = 0;
  // }

  // const options = {
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           beginAtZero: true,
  //         },
  //       },
  //     ],
  //   },
  // };

  return (
    // <div className={styles.container}>
    //   <Bar data={chartData} options={options} type="bar" />
    // </div>
    <div className={styles.container}>
      <div className={styles.info}>
        <h2 className={styles.heading}>Статистика расходов на мероприятия</h2>
        <ul className={styles.list}>
          <li className={styles.item}>От 0₽ до 3 000₽</li>
          <li className={styles.item}>От 3 000₽ до 8 000₽ </li>
          <li className={styles.item}>От 8 000₽ до 10 000₽ </li>
          <li className={styles.item}>От 10 000₽ и более</li>
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
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default BookingsChart;
