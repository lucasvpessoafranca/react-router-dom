import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home} from './components/Home/index'
import { About } from './components/About'
import './styles/global.css'
import { Menu } from './components/Menu'
import { Post } from './components/Post'
import { Redirect } from './components/Redirect'
import { PaginaNaoEncontrada } from './components/404'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Menu/>
      <Routes>
  
        <Route path="/" element={ <Home />}/>
        <Route path="/about" element={ <About />}/>
        {/* <Route path="/posts/:id" element={ <Post />}/> */}
        <Route path="/posts/" element={ <Post />}>
          <Route path=':id' element={<div>Oi</div>}/>
        </Route>
        <Route path="/posts" element={ <Post />}/>
        <Route path="/redirect" element={ <Redirect />}/>
        <Route path="*" element={ <PaginaNaoEncontrada />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
