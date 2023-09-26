import { Heading, Accordion, Progress, Alert, Fixed } from '@okmtyuta/amatelas'
import { Markdown } from '@okmtyuta/amatelas-markdown'
import 'katex/dist/katex.min.css'

const Page = () => {
  return (
    <>
      <Fixed positionalMargin={{ left: 'none', right: 'none' }}>
        <Alert label="INFO">New components available!</Alert>
        <Alert variant="error" label="ERROR">
          INCOMPATIBLE USER ID!!
        </Alert>
        <Alert variant="success" label="おめでとう！">
          The React Framework for the Web Used by some of the worlds largest
          companies, Next.js enables you to create full-stack Web applications
          by extending the latest React features, and integrating powerful
          Rust-based JavaScript tooling for the fastest builds.
        </Alert>
      </Fixed>

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
      <Markdown>
        This is Markdown Text: *italic*, **bold**, math: $a + b = c$
      </Markdown>
    </>
  )
}

export default Page
