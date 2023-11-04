'use client'
import { Button, Flex, Heading, Modal } from '@okmtyuta/amatelas-react/server'
import { useState } from 'react'

const Page = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Modal open={open}>
        <Flex>
          <div>Modal is now activated!</div>
          <Button
            onClick={() => {
              setOpen(false)
            }}
            color="success"
            variant="filled"
          >
            CLOSE MODAL
          </Button>
        </Flex>
      </Modal>
      <Heading>Overview</Heading>
      <Flex>
        <Button
          href="/components/modal/open"
          color="info"
          variant="filled"
          as="a"
        >
          OPEN MODAL WITH URL
        </Button>
        <Button
          onClick={() => {
            setOpen(true)
          }}
          color="success"
          variant="filled"
        >
          OPEN MODAL WITH STATE
        </Button>
      </Flex>
    </>
  )
}

export default Page
