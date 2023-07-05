import { Line } from 'react-chartjs-2'
import { subcription } from '../data'
import { useState } from 'react'
import Chart from 'chart.js/auto';

const Subcription = () => {
  const [data, setData] = useState({
    labels: subcription.map((data) => data.date),
    datasets: [
      {
        label: "Subcriptions",
        data: subcription.map((data) => data.amount),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  })


  return (
    <div>
      <Line data={data}/>
    </div>
  )
}

export default Subcription