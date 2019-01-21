import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  grid: {
    minHeight: '100vh'
  }
});

const Loading = ({ classes, label }) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      spacing={24}
      className={classes.grid}
    >
      <Grid item>
        <CircularProgress />
      </Grid>
      <Grid item>
        {label}
      </Grid>
    </Grid>
  );
};

Loading.propTypes = {
  label: PropTypes.string
};

export default withStyles(styles)(Loading);
