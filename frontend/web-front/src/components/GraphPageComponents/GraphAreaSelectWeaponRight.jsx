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

 const GraphAreaSelectWeaponRight = () => {
  const weapon_name = sessionStorage.getItem("weapon1_name");
  const weapon_damage = Number(sessionStorage.getItem("weapon1_damage"))
  const weapon_range = Number(sessionStorage.getItem("weapon1_range"))
  const weapon_firerate = Number(sessionStorage.getItem("weapon1_firerate"))

  const location = useLocation()
  const [weapon2] = useState(location.state)

  const labels = ["range", "damage", "fire_rate"];
  const graphData = {
    labels: labels,
    datasets: [
      {
          label: weapon_name,
          data: [weapon_range, weapon_damage, weapon_firerate],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
      },{
        label: weapon2.weapon2_name,
        data: [weapon2.weapon2_range, weapon2.weapon2_damage, weapon2.weapon2_firerate],
        backgroundColor: 'rgba(32, 111, 25, 0.2)',
        borderColor: 'rgba(32, 111, 25, 1)',
        borderWidth: 1,
    },
    ],
  };

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
            id="chart-key"
        />
        
      </div>
      <TotallingLink />
    </>
  )
}

export default GraphAreaSelectWeaponRight
