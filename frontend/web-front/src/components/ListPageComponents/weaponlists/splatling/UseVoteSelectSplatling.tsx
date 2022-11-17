import { splatling } from "../weaponItems"
import '../../../../styles/listpage/listitems.css'
import axios from 'axios'
import { useState } from "react"

const UseVoteSelectSplatling = () => {
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
        {splatling.map((splatlings) => {
          return(
          <ul className='listitemsUlLeft' key={splatlings.id}>
            <li data-weapon={splatlings.weapon_name} className='listitemsLiLeft' onClick={handleClick}>
              {splatlings.weapon_name}
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

export default UseVoteSelectSplatling
