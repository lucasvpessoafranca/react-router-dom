import {NavLink, Outlet, Link, useParams, useSearchParams} from 'react-router-dom'
export function Post () {

    const params = useParams()
    const {id} = useParams()
    const [qs] =  useSearchParams()
    return <>
    <h1>POST {id}</h1>
    <p>Query {qs}</p>
    {/* /exemplo?page=101 */}
    <Outlet/>
    </>
}