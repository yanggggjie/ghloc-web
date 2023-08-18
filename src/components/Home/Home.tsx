import { clsx } from 'clsx'
import _ from 'lodash-es'
import Title from './Title.tsx'
import Search from './Search.tsx'
import List from './List/List.tsx'
import { useRef, useState } from 'react'
import useDebounce from '../../hooks/useDebounce.ts'
interface Props {}

function Component({}: Props) {
  const [searchText, setSearchText] = useState<string>('facebook/react')
  const debouncedSearchText = useDebounce(searchText, 1000)
  const [showList, setShowList] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className={clsx('flex flex-col items-center')}>
      <Title></Title>
      <div className={clsx('relative w-96')}>
        <Search
          inputRef={inputRef}
          searchText={searchText}
          setSearchText={setSearchText}
          showList={showList}
          setShowList={setShowList}
        ></Search>
        {showList && (
          <div className={clsx('absolute z-10 h-96 overflow-y-scroll')}>
            <List debouncedSearchText={debouncedSearchText}></List>
          </div>
        )}
      </div>
    </div>
  )
}

export default Component
