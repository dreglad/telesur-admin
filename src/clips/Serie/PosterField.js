import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
    root: { width: 100, maxWidth: 100, maxHeight: 100 }
};

const PosterField = withStyles(styles)(({ classes, record }) => (
    record && <img src={record.poster} className={classes.root} alt={record.name} />
));

export default PosterField;
