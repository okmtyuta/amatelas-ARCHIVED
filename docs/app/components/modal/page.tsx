import { Button, Flex, Heading } from '@okmtyuta/amatelas/server'

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
    </>
  )
}

export default Page
