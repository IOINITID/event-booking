import React from 'react';
import { Bar } from 'react-chartjs-2';
import { styles } from './styled';

const BOOKING_BUCKETS = {
  Cheap: {
    min: 0,
    max: 100,
    color: 'rgba(255, 99, 132, 0.2)',
  },
  Normal: {
    min: 100,
    max: 200,
    color: 'rgba(54, 162, 235, 0.2)',
  },
  Expensive: {
    min: 200,
    max: 1000,
    color: 'rgba(255, 206, 86, 0.2)',
  },
};

const BookingsChart = (props: any) => {
  const chartData = { labels: [], datasets: [] };
  let values = [];

  for (const bucket in BOOKING_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prevValue, currentValue) => {
      if (
        currentValue.event.price > BOOKING_BUCKETS[bucket].min &&
        currentValue.event.price < BOOKING_BUCKETS[bucket].max
      ) {
        return prevValue + 1;
      } else {
        return prevValue;
      }
    }, 0);

    values.push(filteredBookingsCount);

    chartData.labels.push(bucket);
    chartData.datasets.push({
      label: [bucket],
      backgroundColor: [BOOKING_BUCKETS[bucket].color],
      borderColor: [BOOKING_BUCKETS[bucket].color],
      borderWidth: 1,
      data: values,
    });

    values = [...values];
    values[values.length - 1] = 0;
  }

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className={styles.container}>
      <Bar data={chartData} options={options} type="bar" />
    </div>
  );
};

export default BookingsChart;
