import { demoText } from '@root/demo-text'
import { Alert } from '..'

export const Index = () => {
  return (
    <>
      <Alert summary="This is alert">{demoText.en.long}</Alert>
    </>
  )
}
