import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInterval } from "../functions/useInterval";
import '../styles/index.css';
import '../styles/menulist.css'

function Top() {
  const navigate = useNavigate();
  const handleClickWeaponList = () => {
    navigate('/weapons')
  }
  const handleClickHead = () => {
    navigate('/head')
  }
  const handleClickArmor = () => {
    navigate('/armor')
  }
  const handleClickShoes = () => {
    navigate('/shoes')
  }

  const [count, setCount] = useState(0);
  const [delay, setDelay] = useState(10000);
  const [isRunning, setIsRunning] = useState(true);

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
    <div className="Top">
      <ul className='btnList'>
        <li className='btn' onClick={handleClickWeaponList}>ブキ</li>
        <li className='btn' onClick={handleClickHead}>アタマ</li>
        <li className='btn' onClick={handleClickArmor}>フク</li>
        <li className='btn' onClick={handleClickShoes}>クツ</li>
      </ul>
      <div className='hukidashi'>
        <p>キミの知りたい<br /><span className='textEmphasis'>アイテム</span>を教えて<br />ほしいデシ！</p>
      </div>
      <p className='bukichi'></p>
    </div>
  );
}

export default Top;
