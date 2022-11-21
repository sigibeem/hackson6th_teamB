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

const GraphAreaSelectWeaponLeft = () => {
  const location = useLocation()
  const [weapon1] = useState(location.state)
  const labels = ["range", "damage", "fire_rate"];
  const graphData = {
    labels: labels,
    datasets: [
      {
          label: weapon1.weapon1_name,
          data: [weapon1.weapon1_range, weapon1.weapon1_damage, weapon1.weapon1_firerate],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
      }
    ],
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
            id="chart-key"
        />
      </div>
    </>
  )
}

export default GraphAreaSelectWeaponLeft
