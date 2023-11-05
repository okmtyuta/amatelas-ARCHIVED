import '@okmtyuta/awesome-css/reset.css'

import { Chip, Flex, Frame } from './components/server'

export const App = () => {
  return (
    <>
      <Frame>
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
      </Frame>
    </>
  )
}
