import { clsx } from 'clsx'
import _ from 'lodash-es'
import { useNavigate } from 'react-router-dom'
interface Props {
  item: any
}

function Component({ item }: Props) {
  const navigate = useNavigate()
  const { full_name, description, stargazers_count, forks_count } = item
  const StarIcon = <img src="/star.svg" alt="" className={clsx('w-5')} />
  const ForkIcon = <img src="/fork.svg" alt="" className={clsx('w-5')} />
  function handleClick(full_name) {
    navigate('/detail/' + full_name)
  }
  function handleMouseDown(e) {
    e.preventDefault()
  }
  return (
    <div
      className={clsx('flex flex-col', 'hover:bg-blue-100')}
      onMouseDown={(e) => {
        handleMouseDown(e)
      }}
      onClick={() => {
        handleClick(full_name)
      }}
    >
      <div className={clsx('font-bold')}>{full_name}</div>
      <div className={clsx('font-light')}>{description}</div>
      <div className={clsx('flex flex-row gap-3')}>
        <div className={clsx('flex flex-row')}>
          {StarIcon}
          {stargazers_count}
        </div>
        <div className={clsx('flex flex-row')}>
          {ForkIcon}
          {forks_count}
        </div>
      </div>
    </div>
  )
}

export default Component
