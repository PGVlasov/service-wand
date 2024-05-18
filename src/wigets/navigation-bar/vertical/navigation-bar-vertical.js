import { useState } from "react"
import { NavigationBarVerticalSlim } from "./navigation-bar-vertical-slim"
import { NavigationBarVerticalExpanded } from "./navigation-bar-vartical-expanded"

export const NavigationBarVertical = ({ setVerticalMenu }) => {
  const [verticalMenuSlim, setVerticalMenuSlim] = useState(false)


  return (<>
    {verticalMenuSlim ? <NavigationBarVerticalSlim setExpanded={setVerticalMenuSlim} /> : < NavigationBarVerticalExpanded setMenuSlim={setVerticalMenuSlim} setVerticalMenu={setVerticalMenu} />}
  </>)
}
