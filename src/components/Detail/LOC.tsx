import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Data } from './Detail.tsx'
interface Props {
  loc: number
  locByLangs: Data['locByLangs']
}

function Component({ loc, locByLangs }: Props) {
  return (
    <div className={clsx('')}>
      <div className={clsx('font-bold text-xl')}>Lines of code ({loc})</div>
      <div className={clsx('flex flex-col outline p-2 rounded')}>
        {Object.keys(locByLangs).map((key, index) => {
          return (
            <div
              key={index}
              className={clsx('flex flex-row items-center justify-between ')}
            >
              <div>{key}</div>
              <div>{locByLangs[key]}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Component
