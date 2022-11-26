import axios from 'axios'
import { useState } from 'react'
import '../../styles/index.css'
import '../../styles/listpage/listitems.css'
import SelectPlayModeWeapon from './SelectPlayModeWeapon'


const SelectWeaponVote = () => {
  const weapon1_displayname = sessionStorage.getItem("weapon1_display");
  const weapon2_displayname = sessionStorage.getItem("weapon2_display");
  const [selectWeapon, setSelectWeapon] = useState(false)

  const handleClickSelectWeapon1 = async (e: any) => {
    setSelectWeapon(true)
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/votes/", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  const handleClickSelectWeapon2 = async (e: any) => {
    setSelectWeapon(true)
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/votes/", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }

  return (
    <div>
      <>
      {!selectWeapon ?
    <>
        <h1 className='h1'>どちらのブキでプレイした？</h1>
        <ul className='weaponList'>
          <li className='weaponItem'>
            <span data-weapon={weapon1_displayname} onClick={handleClickSelectWeapon1} className='listitemsTextLeft'>
              {weapon1_displayname}
            </span>
          </li>
          <li className='weaponItem'>
            <span data-weapon={weapon2_displayname} onClick={handleClickSelectWeapon2} className='listitemsTextLeft'>
              {weapon2_displayname}
            </span>
          </li>
        </ul>
    </>
    :
    <>
      <SelectPlayModeWeapon />
    </>
    }

      </>
    </div>
  )
}

export default SelectWeaponVote
