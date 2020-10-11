import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function OutlinedChips() {
  const classes = useStyles();


  const handleClickPortfolio = () => {
    window.location.replace('https://salty-plains-85548.herokuapp.com/notes')
  };

  const handleClickGithub = () => {
    window.location.replace('https://github.com/jdelintt?tab=repositories')
  };
  const handleClickProject = () => {
    window.location.replace('https://secure-meadow-97878.herokuapp.com/')
  };


  return (
    <div className={classes.root}>
      <Chip
        avatar={<Avatar></Avatar>}
        label="NoteTaker App"
        onClick={handleClickPortfolio}
        variant="outlined"
      />
      
      <Chip
        avatar={<Avatar></Avatar>}
    label="This is my Github Repo"
        onClick={handleClickGithub}
        variant="outlined"
      />
      <Chip
        avatar={<Avatar></Avatar>}
        label="Project Three"
        onClick={handleClickProject}
        variant="outlined"
      />
      
      
    </div>
  );
}