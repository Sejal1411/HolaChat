import { Grid } from '@mui/material';
import {conversations} from '../dev-data/conversationsData.js';
import { useNavigate } from 'react-router-dom';

const Conversations = () => {
  console.log({ conversations });
  return (
    <Grid container className='conversations'>
      {conversations.map((conversation, i) => {
        return <conversation props={conversation} key={i}/>;
      })}
    </Grid>
  );
};

export default Conversations;
