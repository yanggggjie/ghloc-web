import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR from 'swr'

function Component() {
  return (
    <div>
      <div className={clsx('inline-block bg-red-200')}>
        hello, vite react template
      </div>
    </div>
  )
}

export default Component
