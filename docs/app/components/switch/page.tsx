'use client'
import { Flex, Heading, Switch, Typography } from '@okmtyuta/amatelas/server'
import { useState } from 'react'

const Page = () => {
  const [info, setInfo] = useState<boolean>(false)
  const [danger, setDanger] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [warning, setWarning] = useState<boolean>(false)
  return (
    <>
      <Heading>Overview</Heading>
      <Flex>
        <div>
          <Flex justify="flex-start" align="center" direction="row">
            <Switch
              onChange={() => {
                setInfo((current) => !current)
              }}
              color="info"
            />
            <Typography color="info">{info ? 'ON' : 'OFF'}</Typography>
          </Flex>
        </div>
        <div>
          <Flex justify="flex-start" align="center" direction="row">
            <Switch
              onChange={() => {
                setDanger((current) => !current)
              }}
              color="danger"
            />
            <Typography color="danger">{danger ? 'ON' : 'OFF'}</Typography>
          </Flex>
        </div>
        <div>
          <Flex justify="flex-start" align="center" direction="row">
            <Switch
              onChange={() => {
                setWarning((current) => !current)
              }}
              color="warning"
            />
            <Typography color="warning">{warning ? 'ON' : 'OFF'}</Typography>
          </Flex>
        </div>
        <div>
          <Flex justify="flex-start" align="center" direction="row">
            <Switch
              onChange={() => {
                setSuccess((current) => !current)
              }}
              color="success"
            />
            <Typography color="success">{success ? 'ON' : 'OFF'}</Typography>
          </Flex>
        </div>
      </Flex>
    </>
  )
}

export default Page
