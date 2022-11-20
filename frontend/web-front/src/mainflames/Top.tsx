import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInterval } from "../functions/useInterval";
import '../styles/index.css';
import '../styles/topPage/topPageStyle.css';
import weaponImage from "../images/btnImages/weapon/shooter/gal52.png";
import noImage from "../images/btnImages/noimage.jpg";
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

  // メニューリストアイテム
  const topPageMenuItems = [];

  const topPageMenuData = [
    {
      name : "ブキ",
      img: weaponImage,
      func: handleClickWeaponList
    },
    {
      name : "アタマ",
      img: noImage,
      func: handleClickHead
    },
    {
      name : " フク",
      img: noImage,
      func: handleClickArmor
    },
    {
      name : " クツ",
      img: noImage,
      func: handleClickShoes
    }
  ];

  for(let i in topPageMenuData){
    topPageMenuItems.push(
      <li key={i} className='topMenuBtn' onClick={topPageMenuData[i].func}>
        <img src={topPageMenuData[i].img} alt="" />
        <div className="topMenuTextBlock">
          <h2>{topPageMenuData[i].name}</h2>
        </div>
      </li>
    );
  }

  // カウントアップ関数の呼び出し
  useInterval(
    () => {
      console.log(count);
      setCount(count + 1);
    },
    isRunning ? delay : null
  );

  // カウントアップの取り消し（count == 3 の場合 setIntervalをキャンセル）
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
      <div className="topPagelistBox">
        <div className="lineMarkerLong"></div>
        <div className="lineMarkerShrot"></div>
        <ul className='topMenuList'>
          {topPageMenuItems}
        </ul>
      </div>
      <div id="messageArea">
        <div className='contentMessageBox'>
          <p>2つの<span className='textEmphasis'>アイテム</span>をくらべて<br />みなイカ？</p>
        </div>
      </div>
      <div id="characterImage"></div>
    </div>
  );
}

export default Top;
