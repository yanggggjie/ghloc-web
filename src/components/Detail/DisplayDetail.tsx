import { clsx } from 'clsx'
import _ from 'lodash-es'
import LOC from './LOC.tsx'
import Files from './Files/Files.tsx'
import { Data } from './Detail.tsx'
interface Props {
  data: Data
}

function Component({ data }: Props) {
  const { children: files } = data
  const { loc, locByLangs } = data
  return (
    <div className={clsx('flex flex-row gap-5')}>
      <Files files={files}></Files>
      <LOC loc={loc} locByLangs={locByLangs}></LOC>
    </div>
  )
}

export default Component
