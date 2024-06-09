import { Helmet } from 'react-helmet'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Valectorian</title>
      </Helmet>
      <Container maxWidth="md" sx={{ pt: 4, px: 3 }}>
        <h1>Valedictorian</h1>
        <Typography variant="body2">{}</Typography>
      </Container>
    </>
  )
}
