import { useState } from 'react'
import { useLocation } from 'react-router';
import SelectWeapon1 from '../components/ListPageComponents/SelectWeapon1';
import SelectWeapon2 from '../components/ListPageComponents/SelectWeapon2';
import '../styles/menulist.css';

const Lists = () => {
  const location = useLocation()
  const [selectWeapon1] = useState(location.state)

  // 通過履歴を削除
  if(localStorage.getItem('passed') === 'true'){
    localStorage.setItem('passed','false');
  }

  

  return (
    <div>
      <div id="confiremationViewsArea">
        <div className="weapon1">
          1
        </div>
        <div className="weapon2">
          2
        </div>
      </div>
      { !selectWeapon1 ? <SelectWeapon1 /> : <SelectWeapon2 /> }
    </div>
  )
}

export default Lists
