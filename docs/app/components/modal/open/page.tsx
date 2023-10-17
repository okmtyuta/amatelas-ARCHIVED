import { Button, Flex, Heading, Modal } from '@okmtyuta/amatelas/server'

const Page = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <Flex>
        <Button
          href="/components/modal/open"
          color="info"
          variant="filled"
          as="a"
        >
          OPEN MODAL
        </Button>
      </Flex>
      <Modal open>
        <Flex>
          <div>Modal is now activated!</div>
          <Button href="/components/modal" color="info" variant="filled" as="a">
            CLOSE MODAL
          </Button>
        </Flex>
      </Modal>
    </>
  )
}

export default Page
