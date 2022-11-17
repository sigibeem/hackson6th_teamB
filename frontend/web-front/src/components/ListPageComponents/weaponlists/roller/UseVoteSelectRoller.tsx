import { roller } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"

const UseVoteSelectRoller = () => {
  const [show, setShow] = useState(true)
  const handleClick = async (e: any) => {
    setShow(false)
    const weapon = e.currentTarget.dataset.weapon
    axios.post("http://localhost:8080/api/vote", {"weapon":weapon})
    .then(response=>{console.log("body:",response.data)})
  }
  return (
    <div>
      {show ? 
      <>
        {roller.map((rollers) => {
          return(
          <ul className='listitemsUlLeft' key={rollers.id}>
            <li data-weapon={rollers.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
              {rollers.weapon_name}
            </li>
          </ul>
          )
        })}
      </>
      :
      <></>}
    </div>
  )
}

export default UseVoteSelectRoller
