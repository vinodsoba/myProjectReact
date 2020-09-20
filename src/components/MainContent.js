import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Styles and imports were ommited
function MainContent() {
  const classes = withStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>Title</Typography>
      </div>
      <div className={classes.content}>
        <Typography class='para1' paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus,
          nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem
          felis nec erat
        </Typography>
      </div>
    </main>
  );
}

export default MainContent;
