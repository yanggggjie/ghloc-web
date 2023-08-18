import { clsx } from 'clsx'
import _ from 'lodash-es'
import { Data } from '../Detail.tsx'
interface Props {
  fileObj: any
}

function Component({ fileObj }: Props) {
  const fileIcon = <img src="/file.svg" alt="" className={clsx('w-4')} />
  return (
    <div>
      {Object.keys(fileObj).map((key, index) => {
        return (
          <div key={index} className={clsx('flex flex-row')}>
            {fileIcon}
            {key}
            {fileObj[key]}
          </div>
        )
      })}
    </div>
  )
}

export default Component
