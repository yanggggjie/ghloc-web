import { clsx } from 'clsx'
import _ from 'lodash-es'
import { ReactNode } from 'react'
interface Props {}

type ButtonConfig =
  | {
      type: 'a'
      icon: ReactNode
      url: string
    }
  | {
      type: 'button'
      icon: ReactNode
    }

function Component({}: Props) {
  const SearchIcon = <img src="/search.svg" alt="" className={clsx('w-6')} />
  const LightIcon = <img src="/light.svg" alt="" className={clsx('w-6')} />
  const DarkIcon = <img src="/dark.svg" alt="" className={clsx('w-6')} />
  const GithubIcon = <img src="/github.svg" alt="" className={clsx('w-6')} />
  const FirefoxIcon = <img src="/firefox.svg" alt="" className={clsx('w-6')} />
  const ScriptIcon = <img src="/script.svg" alt="" className={clsx('w-6')} />

  const buttonsConfig: ButtonConfig[] = [
    {
      type: 'a',
      icon: SearchIcon,
      url: '/',
    },
    {
      type: 'button',
      icon: LightIcon,
    },
    {
      type: 'a',
      icon: GithubIcon,
      url: 'https://github.com',
    },
    {
      type: 'a',
      icon: FirefoxIcon,
      url: 'https://firefox.com',
    },
    {
      type: 'a',
      icon: ScriptIcon,
      url: 'https://script.google.com',
    },
  ]

  return (
    <div className={clsx('flex flex-row gap-2 items-center justify-end')}>
      {buttonsConfig.map((buttonConfig, index) => {
        if (buttonConfig.type === 'a') {
          return (
            <a href={buttonConfig.url} key={index}>
              {buttonConfig.icon}
            </a>
          )
        } else {
          return <button key={index}>{buttonConfig.icon} </button>
        }
      })}
    </div>
  )
}

export default Component
