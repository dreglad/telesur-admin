import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    root: { width: 200, maxWidth: 200, maxHeight: 200 },
};

const PosterField = withStyles(styles)(({ classes, record }) => (
    <img src={record.poster} className={classes.root} alt={record.name} />
));

export default PosterField;

