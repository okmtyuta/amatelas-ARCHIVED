import { demoText } from '@root/demo-text'
import { Alert, Textarea } from '..'

export const Index = () => {
  return (
    <>
      <Alert summary="This is alert">{demoText.en.long}</Alert>
    </>
  )
}

