import axios from 'axios'
import { useState } from 'react'
import '../../styles/index.css'
<<<<<<< HEAD
import '../../styles/listPage/listitems.css'
import UseVoteSelectBlaster from '../ListPageComponents/weaponlists/blaster/UseVoteSelectBlaster'
import UseVoteSelectBrella from '../ListPageComponents/weaponlists/brella/UseVoteSelectBrella'
import UseVoteSelectBrush from '../ListPageComponents/weaponlists/brush/UseVoteSelectBrush'
import UseVoteSelectCharger from '../ListPageComponents/weaponlists/charger/UseVoteSelectCharger'
import UseVoteSelectManeuver from '../ListPageComponents/weaponlists/maneuver/UseVoteSelectManeuver'
import UseVoteSelectReelgun from '../ListPageComponents/weaponlists/reelgun/UseVoteSelectReelgun'
import UseVoteSelectRoller from '../ListPageComponents/weaponlists/roller/UseVoteSelectRoller'
import UseVoteSelectShooter from '../ListPageComponents/weaponlists/shooter/UseVoteSelectShooter'
import UseVoteSelectSlosher from '../ListPageComponents/weaponlists/slosher/UseVoteSelectSlosher'
import UseVoteSelectSplatling from '../ListPageComponents/weaponlists/splatling/UseVoteSelectSplatling'
import UseVoteSelectStringer from '../ListPageComponents/weaponlists/stringer/UseVoteSelectStringer'
import UseVoteSelectWiper from '../ListPageComponents/weaponlists/wiper/UseVoteSelectWiper'
=======
import '../../styles/listpage/listitems.css'
import SelectPlayModeWeapon from './SelectPlayModeWeapon'
>>>>>>> remotes/origin/react_base

const SelectWeaponVote = () => {
  const weapon1_name = sessionStorage.getItem("weapon1_name");
  const weapon2_name = sessionStorage.getItem("weapon2_name");
  const [selectWeapon, setSelectWeapon] = useState(false)

  const handleClickSelectWeapon1 = async (e: any) => {
    setSelectWeapon(true)
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  const handleClickSelectWeapon2 = async (e: any) => {
    setSelectWeapon(true)
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }

  return (
    <div>
<<<<<<< HEAD
      {showWeaponList ?
=======
>>>>>>> remotes/origin/react_base
      <>
      {!selectWeapon ?
    <>
        <h1 className='h1'>どちらのブキでプレイした？</h1>
        <ul className='weaponList'>
          <li className='weaponItem'>
            <span data-weapon={weapon1_name} onClick={handleClickSelectWeapon1} className='listitemsTextLeft'>
              {weapon1_name}
            </span>
          </li>
          <li className='weaponItem'>
            <span data-weapon={weapon2_name} onClick={handleClickSelectWeapon2} className='listitemsTextLeft'>
              {weapon2_name}
            </span>
          </li>
        </ul>
<<<<<<< HEAD
      </>
      :
      <></>
      }

        {showShooter && <UseVoteSelectShooter />}
        {showSlosher && <UseVoteSelectSlosher />}
        {showStringer && <UseVoteSelectStringer />}
        {showSplatling && <UseVoteSelectSplatling />}
        {showBlaster && <UseVoteSelectBlaster />}
        {showBrella && <UseVoteSelectBrella />}
        {showBrush && <UseVoteSelectBrush />}
        {showCharger && <UseVoteSelectCharger />}
        {showManeuver && <UseVoteSelectManeuver />}
        {showReelgun && <UseVoteSelectReelgun />}
        {showRoller && <UseVoteSelectRoller />}
        {showWiper && <UseVoteSelectWiper />}

=======
    </>  
    :
    <>
      <SelectPlayModeWeapon />
    </>
    }
>>>>>>> remotes/origin/react_base

      </>
    </div>
  )
}

export default SelectWeaponVote
