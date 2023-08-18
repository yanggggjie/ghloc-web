import { clsx } from 'clsx'
import _ from 'lodash-es'
import Header from './components/Header.tsx'
import Home from './components/Home/Home.tsx'
import { Route, Routes } from 'react-router-dom'
import Detail from './components/Detail/Detail.tsx'
import { useRef, useState } from 'react'
interface Props {}

function Component({}: Props) {
  return (
    <div className={clsx('m-4')}>
      <Header></Header>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/detail/:user/:repo/*'} element={<Detail />}></Route>
      </Routes>
    </div>
  )
}

export default Component
