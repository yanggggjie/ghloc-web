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
        <Route path={'/detail/:user/:repo'} element={<Detail />}></Route>
      </Routes>
      <InputFocusTest></InputFocusTest>
    </div>
  )
}

export default Component

function InputFocusTest() {
  const [showButton, setShowButton] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  function handleButtonMouseDown(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    console.log('handleButtonMouseDown')
    e.preventDefault()
  }
  function handleInputFocus() {
    setShowButton(true)
  }
  function handleInputBlur() {
    setShowButton(false)
  }
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {showButton && (
        <div onMouseDown={handleButtonMouseDown}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          earum facilis id iusto maiores molestiae neque ullam! Ea laudantium
          minus perferendis vitae! Asperiores beatae blanditiis, ipsum molestiae
          possimus qui quisquam!
        </div>
      )}
    </div>
  )
}
