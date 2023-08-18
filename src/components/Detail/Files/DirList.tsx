import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Data } from '../Detail.tsx'

interface Props {
  dirObj: any
}

function Component({ dirObj }: Props) {
  const dirIcon = <img src="/dir.svg" alt="" className={clsx('w-4')} />
  console.log(dirObj)
  return (
    <div>
      {Object.keys(dirObj).map((key, index) => {
        return (
          <div
            key={index}
            className={clsx('flex flex-row items-center justify-between ')}
          >
            <div className={clsx('flex flex-row')}>
              {dirIcon}
              {key}
            </div>
            <div>{dirObj[key].loc}</div>
          </div>
        )
      })}
    </div>
  )
}

export default Component
