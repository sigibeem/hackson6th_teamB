import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import '../../styles/menulist.css'
import '../../styles/index.css'
import blueInk from '../../images/background/blueInk1.png'
import yellowInk from '../../images/background/yellowInk1.png'

const VictoryOrDefeat = () => {
  const location = useLocation()
  const [selectPlayMode] = useState(location.state)
  const postAPIData = async (e: any) => {
    const datanum = e.currentTarget.dataset.num
    let boolValue;
    if(datanum === "1"){
      boolValue = true;
    }
    if(datanum === "0"){
      boolValue = false;
    }
    let weaponName;
    if(sessionStorage.weapon1_name){
      weaponName = sessionStorage.weapon1_name;
    }
    if(sessionStorage.weapon2_name){
      weaponName = sessionStorage.weapon2_name;
    }

    axios.post("http://localhost:8080/api/votes/", {"weapon":weaponName,"battle_mode":selectPlayMode, "result":boolValue})
    .then(response=>{console.log("body:",response.data)})
}

  return (
    <div>
      <h1 className='h1'>{selectPlayMode}</h1>
        <Link to='/' style={{ textDecoration: 'none' }}>
            <ul className='resultUl'>
              <li style={{ listStyle: 'none' }}>
                <button data-num="1" onClick={postAPIData} className='resultLiWin'>勝ち</button>
              </li>
              <li style={{ listStyle: 'none' }}>
                <button data-num="0" onClick={postAPIData} className='resultLiLose'>負け</button>
              </li>
            </ul>
        </Link>
    </div>
  )
}

export default VictoryOrDefeat
