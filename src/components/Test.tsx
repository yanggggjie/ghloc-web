import { clsx } from 'clsx'
import _ from 'lodash-es'
import axios from 'axios'
import useSWR from 'swr'
import { useState } from 'react'

function Test() {
  const { data, isLoading, error } = useSWR('/api')
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>
  return <div>{data}</div>
}

function Component() {
  return (
    <div>
      <Test></Test>
    </div>
  )
}

export default Component
