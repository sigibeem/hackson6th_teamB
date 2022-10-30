import React, { useState } from 'react'
import '../styles/menulist.css'
import SellectWeapon1 from '../components/ListPageComponents/SellectWeapon1';
import SellectWeapon2 from '../components/ListPageComponents/SellectWeapon2';
import { useLocation } from 'react-router-dom';

const Lists = () => {
  const [isSellectWeapon1, setSellectWeapon1] = useState(false)

  const handleClickSellectWeapon2 = () => {
    setSellectWeapon1(true)
  }

  const location = useLocation()
  const [sellectWeaponLeft, setSellectWeaponLeft] = useState<{ title: string }>(location.state as {title: string})

  return (
    <div>
      <ul className='btnList'>
        <li className='listStyle'>
          <button className='btn' >list1</button>
          {/* onClick={handleClickSellectWeapon1} */}
        </li>
        <li className='listStyle'>
          <button className='btn' onClick={handleClickSellectWeapon2} disabled={!isSellectWeapon1}>list2</button>
          <button disabled={!isSellectWeapon1}>list2の状態</button>
        </li>  
      </ul>
      <br />
      <button onClick={handleClickSellectWeapon2}>list1選択を選択します</button>
      {!isSellectWeapon1 && <SellectWeapon1 />}
      {isSellectWeapon1 && <SellectWeapon2 />}  
      {/* <p>ブキ1：{selectCharger.title}</p> */}
    </div>
  )
}

export default Lists
