import { useState } from 'react'
import '../../styles/index.css'
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

const SelectWeaponVote = () => {
  //weaponlist_category
  const [showWeaponList, setShowWeaponList] = useState(true)
  //weaponlist
  const [showShooter, setShowShooter] = useState(false)
  const [showCharger, setShowCharger] = useState(false)
  const [showBlaster, setShowBlaster] = useState(false)
  const [showRoller, setShowRoller] = useState(false)
  const [showBrush, setShowBrush] = useState(false)
  const [showSlosher, setShowSlosher] = useState(false)
  const [showSplatling, setShowSplatling] = useState(false)
  const [showManeuver, setShowManeuver] = useState(false)
  const [showBrella, setShowBrella] = useState(false)
  const [showWiper, setShowWiper] = useState(false)
  const [showStringer, setShowStringer] = useState(false)
  const [showReelgun, setShowReelgun] = useState(false)
  //weaponlist_hide
  const [hide, setHide] = useState(false)

  const handleClickShowShooterList = () => {
    setShowShooter(true)
    setShowWeaponList(false)
  }
  const handleClickShowChargerList = () => {
    setShowCharger(true)
    setShowWeaponList(false)
  }
  const handleClickShowBlasterList = () => {
    setShowBlaster(true)
    setShowWeaponList(false)
  }
  const handleClickShowRollerList = () => {
    setShowRoller(true)
    setShowWeaponList(false)
  }
  const handleClickShowSlosherList = () => {
    setShowSlosher(true)
    setShowWeaponList(false)
  }
  const handleClickShowBrushList = () => {
    setShowBrush(true)
    setShowWeaponList(false)
  }
  const handleClickShowSplatlingList = () => {
    setShowSplatling(true)
    setShowWeaponList(false)
  }
  const handleClickShowManeuverList = () => {
    setShowManeuver(true)
    setShowWeaponList(false)
  }
  const handleClickShowBrellaList = () => {
    setShowBrella(true)
    setShowWeaponList(false)
  }
  const handleClickShowWiperList = () => {
    setShowWiper(true)
    setShowWeaponList(false)
  }
  const handleClickShowStringerList = () => {
    setShowStringer(true)
    setShowWeaponList(false)
  }
  const handleClickShowReelgunList = () => {
    setShowReelgun(true)
    setShowWeaponList(false)
  }
  //hide
  const handleClickHide = () =>{
    setHide(true)
  }

  return (
    <div>
      {showWeaponList ?
      <>
        <h1 className='h1'>どのブキでプレイした？</h1>
        <ul className='weaponList'>
          <li className='weaponItem'>
            <span onClick={handleClickShowShooterList} className='listitemsTextLeft'>
              シューター
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowChargerList} className='listitemsTextLeft'>
              チャージャー
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowBlasterList} className='listitemsTextLeft'>
              ブラスター
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowRollerList} className='listitemsTextLeft'>
              ローラー
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowBrushList} className='listitemsTextLeft'>
              ブラシ
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowSlosherList} className='listitemsTextLeft'>
              スロッシャー
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowSplatlingList} className='listitemsTextLeft'>
              スピナー
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowManeuverList} className='listitemsTextLeft'>
              マニューバー
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowBrellaList} className='listitemsTextLeft'>
              シェルター
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowWiperList} className='listitemsTextLeft'>
              ワイパー
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowStringerList} className='listitemsTextLeft'>
              ストリンガー
            </span>
          </li>
          <li className='weaponItem'>
            <span onClick={handleClickShowReelgunList} className='listitemsTextLeft'>
              リールガン
            </span>
          </li>
        </ul>
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


    </div>
  )
}

export default SelectWeaponVote
