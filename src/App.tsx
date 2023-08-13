import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
interface Props {}
function PageIndex() {
  return <div>index</div>
}
function PageA() {
  return <div>a</div>
}
function PageB() {
  return <div>b</div>
}
function Page404() {
  return <div>404</div>
}

function Component({}: Props) {
  const navigate = useNavigate()
  function handleIndexClick() {
    navigate('/')
  }
  return (
    <div>
      <button onClick={handleIndexClick}>back to index</button>

      <div className={clsx('flex flex-row')}>
        <Link to={'/'}>index</Link>
        <Link to={'/a'}>a</Link>
        <Link to={'/b'}>b</Link>
      </div>
      <Routes>
        <Route path={'/'} element={<PageIndex />}></Route>
        <Route path={'/a'} element={<PageA />}></Route>
        <Route path={'/b'} element={<PageB />}></Route>
        <Route path={'/404'} element={<Page404 />}></Route>
        <Route path={'*'} element={<Navigate to={'/404'} />}></Route>
      </Routes>
    </div>
  )
}

export default Component
