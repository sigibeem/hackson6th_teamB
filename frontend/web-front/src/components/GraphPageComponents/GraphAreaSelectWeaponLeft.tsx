import '../../styles/graph/graph.css'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from "react-chartjs-2";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend)

ChartJS.defaults.backgroundColor = '#000'    
ChartJS.defaults.color = '#fff'
ChartJS.defaults.borderColor = '#616161'
ChartJS.defaults.font.size = 20

const GraphAreaSelectWeaponLeft = () => {
  const location = useLocation()
  const [weapon1] = useState(location.state)
  const labels = ["射程", "ダメージ", "連射力"];
  const graphData = {
    labels: labels,
    datasets: [
      {
          label: weapon1.weapon1_name,
          data: [weapon1.weapon1_range, weapon1.weapon1_damage, weapon1.weapon1_firerate],
          backgroundColor: 'rgba(204, 235, 0, 0.2)',
          borderColor: 'rgba(204, 235, 0, 1)',
          borderWidth: 3,
      }
    ],
  };
  const options: {} = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        titleFont: { size: 17 },
        bodyFont: { size: 17 },
        titleMarginBottom: 15,
        backgroundColor: "rgba(255,112,162,0.8)",
        titleColor: "rgba(0,0,0,1)",
        bodyColor: "rgba(0,0,0,1)",
        displayColors: true,
        xAlign: "center"
      },
    },
  };
  sessionStorage.setItem('weapon1_name', weapon1.weapon1_name)
  sessionStorage.setItem('weapon1_range', weapon1.weapon1_range)
  sessionStorage.setItem('weapon1_damage', weapon1.weapon1_damage)
  sessionStorage.setItem('weapon1_firerate', weapon1.weapon1_firerate)
  console.log(sessionStorage.getItem('weapon1_range'))
  return (
    <>
        <div className='grapharea'>
        <Radar
            height={300}
            width={300}
            data={graphData}
            options={options}
            id="chart-key"
        />
      </div>
    </>
  )
}

export default GraphAreaSelectWeaponLeft
