import {NavLink, Link} from 'react-router-dom'
export function Menu () {


    return <>
        <nav>
            <ul>
                <li> 
                    <Link to="/">Home</Link>
                </li>
                <li> 
                <Link to="/about">Sobre</Link>

                </li>
                <li>
                    <Link to="/posts">Posts</Link>
                </li>
                <li>
                    <Link to="/posts/10">Posts 10</Link>
                </li>
                <li>
                    <Link to="/redirect">Redirect</Link>
                </li>
            </ul>
        </nav>
    </>
}