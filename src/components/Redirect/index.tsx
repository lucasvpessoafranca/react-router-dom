import { useState, useRef, useEffect } from 'react'
import {useNavigate, NavLink, Link, useParams, useSearchParams} from 'react-router-dom'
export function Redirect () {

    const [time, setTime] = useState(3)
   
    const timeout = useRef(0)
    const navigate = useNavigate()
    useEffect(()=> {
        clearTimeout(timeout.current)
        timeout.current = setTimeout(()=> {
            setTime(t=> t-1)
        },1000)
        if (time <= 0) {
            navigate('/about', {
                state: `this is ${Math.random()}`
            })
        }

        return () => {
        clearTimeout(timeout.current)

        }
    })
    return <>

    <h1>redirecionando em.. {time}</h1>
    </>
}