import '@okmtyuta/awesome-css/reset.css'

import { Alert, Frame } from './components/server'

export const App = () => {
  return (
    <>
      <Frame>
        <Alert summary="alert">
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert
        </Alert>
        <Alert summary="purple" color="purple">
          Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert Alert
          Alert Alert Alert
        </Alert>
      </Frame>
    </>
  )
}
