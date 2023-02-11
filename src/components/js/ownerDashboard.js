import react, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import TabNavItem from './tabNavItem';
import TabContent from './tabContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Modal } from '@mui/material';
import { Typography } from '@mui/material';

const OwnerDashboard = () => {
  const [total_tokens, setTotalTokens] = useState(100);
  const [tokens_owned, setTokensOwned] = useState(10);

  return (
    <div>
      <Container className='container-class'>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
        >
          Owner Dashboard
        </Typography>
        <hr />
        <Grid container rowSpacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="left"
            >
              Total Number of Tokens: {total_tokens}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              align="left"
            >
              Tokens you have: {tokens_owned} ({tokens_owned / total_tokens * 100}%)
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default OwnerDashboard;
