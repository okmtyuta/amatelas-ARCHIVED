'use client'
import { Heading, Progress, Button } from '@okmtyuta/amatelas/server'
import { useState } from 'react'

const _sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const Page = () => {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Heading>Overview</Heading>
      <Button
        onClick={async () => {
          setLoading(true)
          await _sleep(1000)
          setLoading(false)
        }}
        loading={loading}
        disabled={loading}
        color="info"
        spinner={<Progress size="xs" color="white" />}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default Page
