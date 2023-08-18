import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Route, Routes, useParams } from 'react-router-dom'
import useSWR from 'swr'
import DisplayDetail from './DisplayDetail.tsx'
interface Props {}

export interface Data {
  loc: number
  locByLangs: {
    [key: string]: number
  }
  children?: {
    [key: string]: Data
  }
}

function Component({}: Props) {
  const { user, repo } = useParams()
  const api = `https://ghloc.ifels.dev/${user}/${repo}/master`
  const { data, isLoading, error } = useSWR(api)
  if (error) return <div className={clsx('text-red-500')}>Error</div>
  if (isLoading) return <div className={clsx('text-blue-500')}>Loading</div>

  return (
    <div>
      <Routes>
        <Route path={''}></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}

export default Component
