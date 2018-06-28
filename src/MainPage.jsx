import React from 'react';

import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

function MainPage() {
  return (
    <div>
      <HeaderBar />
      <Paper elevation={1}>
        <Typography variant="headline" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
      <FooterBar />
    </div>
  );
}

MainPage.propTypes = {
  // classes: PropTypes.object.isRequired,
};


export default MainPage;
