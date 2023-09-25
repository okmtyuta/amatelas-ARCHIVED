import { Accordion } from './components/server/accordion/Accordion'
import '@theme/reset.css'
import { Alert } from './components/server/alert/Alert'
import { Link } from './components/server/link/Link'
import { TextField } from '.'
import { Typography } from './components/server/typography/Typography'

export const App = () => {
  return (
    <div>
      <Accordion summary="summary">これはさまりです。</Accordion>
      <Alert label="INFO">ALLLL</Alert>
      <Link external href='https://me.okmtyuta.jp'>this is linkt</Link>
      <TextField placeholder='text'/>
      <Typography color='danger'>typography</Typography>
    </div>
  )
}
