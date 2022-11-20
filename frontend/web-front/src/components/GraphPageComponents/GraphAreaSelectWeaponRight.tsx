import { useState } from "react";
import '../../styles/graph/graph.css';
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
import { useInterval } from "../../functions/useInterval";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend)

const GraphAreaSelectWeaponRight = () => {
  const labels = ["range", "damage", "fire_rate"];
  const graphData = {
    labels: labels,
    datasets: [
      {
          label: 'ブキ１',
          data: [5, 9, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
      },{
        label: 'ブキ2',
        data: [7, 5, 5],
        backgroundColor: 'rgba(32, 111, 25, 0.2)',
        borderColor: 'rgba(32, 111, 25, 1)',
        borderWidth: 1,
    },
    ],
  };

  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(10000);
  const [isRunning, setIsRunning] = useState(true);

  // ローカルストレージが'pssed'='false'の場合もしくはpassedがない場合は発火
  if(localStorage.getItem('passed') === 'false' || !localStorage.getItem('passed')){
    localStorage.setItem('passed','true');
    // カウントアップ関数の呼び出し
  }

  useInterval(
    () => {
      console.log(count);
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  if(count === 3){
    setCount(count - 3);
    setDelay(delay - 10000);
    setIsRunning(!isRunning);
    localStorage.passed === 'true' ? movePage() : stopfunction();
  }

  function movePage(){
    window.location.href = "/totalling";
  }

  function stopfunction(){
    return;
  }


  return (
    <div className='grapharea'>
      <Radar
          height={300}
          width={300}
          data={graphData}
          id="chart-key"
      />
    </div>
  )
}

export default GraphAreaSelectWeaponRight
