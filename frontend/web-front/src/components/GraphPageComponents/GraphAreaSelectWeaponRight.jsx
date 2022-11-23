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
import { useState } from 'react';
import { useLocation } from 'react-router';
import TotallingLink from '../TotallingPageComponents/TotallingLink';

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

 const GraphAreaSelectWeaponRight = () => {
  const weapon_name = sessionStorage.getItem("weapon1_name");
  const weapon_damage = Number(sessionStorage.getItem("weapon1_damage"))
  const weapon_range = Number(sessionStorage.getItem("weapon1_range"))
  const weapon_firerate = Number(sessionStorage.getItem("weapon1_firerate"))

  const location = useLocation()
  const [weapon2] = useState(location.state)

  const labels = ["射程", "ダメージ", "連射力"];
  const graphData = {
    labels: labels,
    datasets: [
      {
          label: weapon_name,
          data: [weapon_range, weapon_damage, weapon_firerate],
          backgroundColor: 'rgba(204, 235, 0, 0.2)',
          borderColor: 'rgba(204, 235, 0, 1)',
          borderWidth: 3,
      },{
        label: weapon2.weapon2_name,
        data: [weapon2.weapon2_range, weapon2.weapon2_damage, weapon2.weapon2_firerate],
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderColor: 'rgba(255, 0, 0, 1)',
        borderWidth: 3,
    },
    ],
  };

  const options = {
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

  sessionStorage.setItem('weapon2_name', weapon2.weapon2_name)
  sessionStorage.setItem('weapon2_range', weapon2.weapon2_range)
  sessionStorage.setItem('weapon2_damage', weapon2.weapon2_damage)
  sessionStorage.setItem('weapon2_firerate', weapon2.weapon2_firerate)

  if(localStorage.getItem('passed') === 'false' || !localStorage.getItem('passed')){
    localStorage.setItem('passed','true');
  }

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
      <TotallingLink />
    </>
  )
}

export default GraphAreaSelectWeaponRight
