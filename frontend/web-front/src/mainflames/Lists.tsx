import React, { useState } from 'react'
import '../styles/menulist.css'
import SellectWeapon1 from '../components/ListPageComponents/SellectWeapon1';
import SellectWeapon2 from '../components/ListPageComponents/SellectWeapon2';
import { useLocation, Routes, Route } from 'react-router-dom';
import Blaster from '../components/ListPageComponents/weaponlists/blaster/Blaster';
import Brush from '../components/ListPageComponents/weaponlists/brush/Brush';
import Charger from '../components/ListPageComponents/weaponlists/charger/Charger';
import Manuver from '../components/ListPageComponents/weaponlists/manuver/Manuver';
import Reelgun from '../components/ListPageComponents/weaponlists/reelgun/Reelgun';
import Roller from '../components/ListPageComponents/weaponlists/roller/Roller';
import Shelter from '../components/ListPageComponents/weaponlists/shelter/Shelter';
import Shooter from '../components/ListPageComponents/weaponlists/shooter/Shooter';
import Spinner from '../components/ListPageComponents/weaponlists/spinner/Spinner';
import Stringer from '../components/ListPageComponents/weaponlists/stringer/Stringer';
import Throsher from '../components/ListPageComponents/weaponlists/throsher/Throsher';
import Wiper from '../components/ListPageComponents/weaponlists/wiper/Wiper';

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
      {/* weaponlistRoute */}
    </div>
  )
}

export default Lists
