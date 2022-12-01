import {useLocation} from 'react-router-dom'
export function About () {

    const location  = useLocation()
    const {state} = location

    return <>
       <h1>About</h1>
       {state}
    </>
}