import '@okmtyuta/awesome-css/reset.css'

import { Button, Flex, Frame, Chip } from './components/server'

export const App = () => {
  return (
    <>
      <Frame>
        <Flex gap="xl">
          <Flex direction="row">
            <div>
              <Button width="auto" color="info" variant="outlined">
                BUTTON
              </Button>
              <Button width="auto" color="info" variant="filled">
                BUTTON
              </Button>
              <Button color="info" variant="standard">
                BUTTON
              </Button>
            </div>

            <div>
              <Button color="alert" variant="outlined">
                BUTTON
              </Button>
              <Button color="alert" variant="filled">
                BUTTON
              </Button>
              <Button color="alert" variant="standard">
                BUTTON
              </Button>
            </div>

            <div>
              <Button color="warning" variant="outlined">
                BUTTON
              </Button>
              <Button color="warning" variant="filled">
                BUTTON
              </Button>
              <Button color="warning" variant="standard">
                BUTTON
              </Button>
            </div>

            <div>
              <Button color="success" variant="outlined">
                BUTTON
              </Button>
              <Button color="success" variant="filled">
                BUTTON
              </Button>
              <Button color="success" variant="standard">
                BUTTON
              </Button>
            </div>

            <div>
              <Button color="neutral" variant="outlined">
                BUTTON
              </Button>
              <Button color="neutral" variant="filled">
                BUTTON
              </Button>
              <Button color="neutral" variant="standard">
                BUTTON
              </Button>
            </div>

            <div>
              <Button color="light-blue" variant="outlined">
                BUTTON
              </Button>
              <Button color="light-blue" variant="filled">
                BUTTON
              </Button>
              <Button color="light-blue" variant="standard">
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
              <Chip color="alert" variant="outlined">
                BUTTON
              </Chip>
              <Chip color="alert" variant="filled">
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
