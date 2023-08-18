import { clsx } from 'clsx'
import _ from 'lodash-es'
import useSWR from 'swr'
import Item from './Item.tsx'
interface Props {
  debouncedSearchText: string
}

function Component({ debouncedSearchText }: Props) {
  const url = `https://api.github.com/search/repositories?q=${debouncedSearchText}&per_page=10`
  const { data, isLoading, error } = useSWR(url)
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  const { items } = data

  return (
    <div className={clsx('flex flex-col gap-5')}>
      {items.map((item, index) => {
        return <Item key={index} item={item}></Item>
      })}
    </div>
  )
}

export default Component
