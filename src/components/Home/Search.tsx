import { clsx } from 'clsx'
import _ from 'lodash-es'
import { useEffect, useRef } from 'react'
interface Props {
  searchText: string
  setSearchText: (searchText: string) => void
  showList: boolean
  setShowList: (showList: boolean) => void
  inputRef: any
}

function Component({
  searchText,
  setSearchText,
  showList,
  setShowList,
  inputRef,
}: Props) {
  const SearchIcon = <img src="/search.svg" alt="" className={clsx('w-6')} />

  function handleChange(e) {
    setSearchText(e.target.value)
  }
  function handleFocus() {
    setShowList(true)
  }
  function handleBlur() {
    setShowList(false)
  }
  return (
    <div>
      <div className={clsx('relative')}>
        <input
          type="text"
          ref={inputRef}
          className={clsx('w-full', 'text-center')}
          placeholder={'facebook/react'}
          value={searchText}
          onChange={(e) => {
            handleChange(e)
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div
          className={clsx(
            'absolute top-1/2 right-1 -translate-x-1/2 -translate-y-1/2',
          )}
        >
          {SearchIcon}
        </div>
      </div>
    </div>
  )
}

export default Component
