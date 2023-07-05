import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { revenue } from '../data'


const Evenue = () => {
  const [data, setData] = useState({
    labels: revenue.map((data) => data.month),
    datasets: [
      {
        label: "Revenue",
        data: revenue.map((data) => data.amount),
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
      <Bar data={data}/>
    </div>
  )
}

export default Evenue