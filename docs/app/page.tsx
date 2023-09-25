import { Heading, Accordion, Progress, Alert } from '@okmtyuta/amatelas'

const Page = () => {
  return (
    <>
      <Heading>Recently Added</Heading>

      <Heading type="h3">Accordion</Heading>
      <Accordion summary="Accordion Menu">
        React lets you build user interfaces out of individual pieces called
        components. Create your own React components like Thumbnail, LikeButton,
        and Video. Then combine them into entire screens, pages, and apps. [from
        React.dev]
      </Accordion>

      <Heading type="h3">Progress</Heading>
      <Progress variant="danger" />
      <Progress variant="info" />
      <Progress variant="success" />
      <Progress variant="warning" />

      <Heading type="h3">Progress</Heading>

      <Heading type="h3">Alert</Heading>

      <Alert label="Info">
        You can delete this alert with clicking x at right.
      </Alert>
      <Alert variant="error" label="Danger">
        DO NOT DELETE THIS ALERT!
      </Alert>

      <Heading type="h3">Skeleton (Experimental)</Heading>
    </>
  )
}

export default Page
