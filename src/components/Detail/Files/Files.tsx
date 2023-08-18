import { clsx } from 'clsx'
import _ from 'lodash-es'
import FileList from './FileList.tsx'
import DirList from './DirList.tsx'
import { Data } from '../Detail.tsx'
interface Props {
  files: Data['children']
}

function Component({ files }: Props) {
  if (!files) return <div></div>
  console.log('files', files)

  const fileObj = _.pickBy(files, (value) => {
    return value.children === undefined
  })

  const dirObj = _.pickBy(files, (value) => {
    return value.children !== undefined
  })

  return (
    <div className={clsx('')}>
      <div className={clsx('font-bold text-xl')}>Files</div>
      <div className={clsx('flex flex-col', 'outline rounded p-2')}>
        <DirList dirObj={dirObj}></DirList>
        <FileList fileObj={fileObj}></FileList>
      </div>
    </div>
  )
}

export default Component
