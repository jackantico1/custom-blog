import { Routes, Route } from "react-router-dom"
import { Home } from '../src/pages/home'

// Projects
import { BCGetDelivery } from "./pages/projects/bc-get-delivery"
import { BCDiningHallMenus } from "./pages/projects/bc-dining-hall-menus"
import { Target } from "./pages/projects/target"
import { Helium } from "./pages/projects/helium"
import { Jibra } from "./pages/projects/jibra"
import { ReturnLogic } from "./pages/projects/returnlogic"
import { RPACanoe } from "./pages/projects/rpa-canoe"
import { Pixels } from "./pages/blogs/pixels"
import { BuildingAnAINotetakerWithLoveable } from "./pages/blogs/building-an-ai-notetaker-with-loveable"
import { ReflectionsOnAYearInProductManagement } from '../src/pages/blogs/reflections-on-a-year-in-product-management'
import { UsingAWeightedBlanketForAWeek } from '../src/pages/blogs/using-a-weighted-blanket-for-a-week'
import { WhatIWishIKnewBeforeIStartedJobHunting } from '../src/pages/blogs/what-i-wish-knew-before-i-started-job-hunting'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      {/* Projects */}
      <Route path='/rpa-canoe' element={<RPACanoe/>}/>
      <Route path='/helium' element={<Helium/>}/>
      <Route path='/bc-get-delivery' element={<BCGetDelivery/>}/>
      <Route path='/returnlogic' element={<ReturnLogic/>}/>
      <Route path='/target' element={<Target/>}/>
      <Route path='/jibra' element={<Jibra/>}/>
      <Route path='/bc-dining-hall-menus' element={<BCDiningHallMenus/>}/>
      {/* Blogs */}
      <Route path="/pixels" element={<Pixels/>}/>
      <Route path='/building-an-ai-notetaker-with-loveable' element={<BuildingAnAINotetakerWithLoveable/>}/>
      <Route path='/reflections-on-a-year-in-product-management' element={<ReflectionsOnAYearInProductManagement/>}/>
      <Route path='using-a-weighted-blanket-for-a-week' element={<UsingAWeightedBlanketForAWeek/>}/>
      <Route path='what-I-wish-knew-before-I-started-job-hunting' element={<WhatIWishIKnewBeforeIStartedJobHunting/>}/>
    </Routes>
  );
}

export default App;
