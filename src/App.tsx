import { clsx } from 'clsx'
import _ from 'lodash-es'
import Test from './components/Test.tsx'
import { SWRConfig } from 'swr'
import axios from 'axios'

function Component() {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axios.get(url).then((res) => res.data),
      }}
    >
      <div className={clsx()}>
        <Test></Test>
      </div>
    </SWRConfig>
  )
}

export default Component
