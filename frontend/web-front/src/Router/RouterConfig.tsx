import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Blaster from '../components/ListPageComponents/weaponlists/blaster/Blaster'
import Brush from '../components/ListPageComponents/weaponlists/brush/Brush'
import Charger from '../components/ListPageComponents/weaponlists/charger/Charger'
import Manuver from '../components/ListPageComponents/weaponlists/manuver/Manuver'
import Reelgun from '../components/ListPageComponents/weaponlists/reelgun/Reelgun'
import Roller from '../components/ListPageComponents/weaponlists/roller/Roller'
import Shelter from '../components/ListPageComponents/weaponlists/shelter/Shelter'
import Shooter from '../components/ListPageComponents/weaponlists/shooter/Shooter'
import Spinner from '../components/ListPageComponents/weaponlists/spinner/Spinner'
import Stringer from '../components/ListPageComponents/weaponlists/stringer/Stringer'
import Throsher from '../components/ListPageComponents/weaponlists/throsher/Throsher'
import Wiper from '../components/ListPageComponents/weaponlists/wiper/Wiper'
import Graph from '../mainflames/Graph'
import Lists from '../mainflames/Lists'
import Top from '../mainflames/Top'

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        
        {/* mainflames */}
        <Route index element={<Top />} />
        <Route path="/weapons" element={<Lists />} />
        <Route path="/result-graph" element={<Graph />} />

        {/* weaponlists */}
        <Route path="/weapons/blaster" element={<Blaster />} />
        <Route path="/weapons/brush" element={<Brush />} />
        <Route path="/weapons/charger" element={<Charger />} />
        <Route path="/weapons/manuver" element={<Manuver />} />
        <Route path="/weapons/reelgun" element={<Reelgun />} />
        <Route path="/weapons/roller" element={<Roller />} />
        <Route path="/weapons/shelter" element={<Shelter />} />
        <Route path="/weapons/shooter" element={<Shooter />} />
        <Route path="/weapons/spinner" element={<Spinner />} />
        <Route path="/weapons/stringer" element={<Stringer />} />
        <Route path="/weapons/throsher" element={<Throsher />} />
        <Route path="/weapons/wiper" element={<Wiper />} />
      </Routes>
    </div>
  )
}

export default RouterConfig
