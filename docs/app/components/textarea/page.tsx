import { Flex, Heading, Textarea } from '@okmtyuta/amatelas-react/server'

const Page = () => {
  return (
    <>
      <Heading>Overview</Heading>
      <Flex>
        <Textarea validate variant="filled" placeholder="placeholder" />
        <Textarea validate variant="outlined" placeholder="placeholder" />
        <Textarea variant="standard" placeholder="placeholder" required />
      </Flex>
    </>
  )
}

export default Page
