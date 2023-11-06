import '@okmtyuta/awesome-css/reset.css'

import { Button, Flex, Frame, Chip } from './components/server'

export const App = () => {
  return (
    <>
      <Frame>
        <Flex gap="xl">
          <Flex direction="row">
            <div>
              <Button width="auto" disabled color="info" variant="outlined">
                BUTTON
              </Button>
              <Button width="auto" disabled color="info" variant="filled">
                BUTTON
              </Button>
              <Button disabled color="info" variant="standard">
                BUTTON
              </Button>
            </div>

            <div>
              <Button disabled color="danger" variant="outlined">
                BUTTON
              </Button>
              <Button disabled color="danger" variant="filled">
                BUTTON
              </Button>
              <Button disabled color="danger" variant="standard">
                BUTTON
              </Button>
            </div>

            <div>
              <Button disabled color="warning" variant="outlined">
                BUTTON
              </Button>
              <Button disabled color="warning" variant="filled">
                BUTTON
              </Button>
              <Button disabled color="warning" variant="standard">
                BUTTON
              </Button>
            </div>

            <div>
              <Button disabled color="success" variant="outlined">
                BUTTON
              </Button>
              <Button disabled color="success" variant="filled">
                BUTTON
              </Button>
              <Button disabled color="success" variant="standard">
                BUTTON
              </Button>
            </div>
          </Flex>

          <Flex direction="row">
            <div>
              <Chip color="info" variant="outlined">
                BUTTON
              </Chip>
              <Chip color="info" variant="filled">
                BUTTON
              </Chip>
            </div>

            <div>
              <Chip color="danger" variant="outlined">
                BUTTON
              </Chip>
              <Chip color="danger" variant="filled">
                BUTTON
              </Chip>
            </div>

            <div>
              <Chip color="warning" variant="outlined">
                BUTTON
              </Chip>
              <Chip color="warning" variant="filled">
                BUTTON
              </Chip>
            </div>

            <div>
              <Chip color="success" variant="outlined">
                BUTTON
              </Chip>
              <Chip color="success" variant="filled">
                BUTTON
              </Chip>
            </div>
          </Flex>
        </Flex>
      </Frame>
    </>
  )
}
