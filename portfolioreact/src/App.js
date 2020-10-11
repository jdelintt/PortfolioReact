import React from 'react';
import Navbar from './Navbar'


import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from './Card'
import { Grid } from '@material-ui/core';


const style = {
    bg: {
      backgroundColor: '#364150',
      color: 'white'
    }
  };

function App() {
  return (
    <div style={style.bg}>
    
        
        <Container maxWidth="sm">


        <Typography component="div"  />
      
    
    <Grid sm="12" justify="left">
        <Navbar></Navbar>
    </Grid>
    <Grid md="12" justify="center">
        <Card ></Card>
     </Grid>
    


</Container>
    
  </div>
  );
}
export default App;
