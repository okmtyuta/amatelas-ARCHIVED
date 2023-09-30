import { Heading, Accordion, Progress, Alert, Frame } from './index'

export const App = () => {
  return (
    <>
      <Frame>
        <Heading>Recently Added</Heading>

        <Heading type="h3">Accordion</Heading>
        <Accordion summary="Accordion Menu">
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps. [from React.dev]
        </Accordion>

        <Heading type="h3">Progress</Heading>
        <Progress variant="danger" />
        <Progress variant="info" />
        <Progress variant="success" />
        <Progress variant="warning" />

        <Heading type="h3">Progress</Heading>

        <Heading type="h3">Alert</Heading>

        <Alert summary="Info">
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps. [from React.dev] React lets you build user interfaces out of
          individual pieces called components. Create your own React components
          like Thumbnail, LikeButton, and Video. Then combine them into entire
          screens, pages, and apps. [from React.dev] React lets you build user
          interfaces out of individual pieces called components. Create your own
          React components like Thumbnail, LikeButton, and Video. Then combine
          them into entire screens, pages, and apps. [from React.dev]
        </Alert>
        <Alert variant="error" summary="Danger">
          東大在学中に同人雑誌「新思潮」に発表した「鼻」を漱石が激賞し、文壇で活躍するようになる。王朝もの、近世初期のキリシタン文学、江戸時代の人物・事件、明治の文明開化期など、さまざまな時代の歴史的文献に題材をとり、スタイルや文体を使い分けたたくさんの短編小説を書いた。体力の衰えと「ぼんやりした不安」から自殺。その死は大正時代文学の終焉と重なっている。
        </Alert>

        <Heading type="h3">Skeleton (Experimental)</Heading>
      </Frame>
    </>
  )
}
