import React from 'react';
import '../styles/App.css';
import { useNavigate } from "react-router-dom";

function Top() {
  const navigate = useNavigate();
  const handleClickWeaponList = () => {
    navigate('/weaponlist')
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
