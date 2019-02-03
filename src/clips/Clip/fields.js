import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import countryData from 'country-region-data';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { PosterField } from '../Serie';

import {
  Arrayfield,
  ChipField,
  DateField,
} from 'react-admin';

const editorialFieldStyles = theme => ({
  root: {
    paddingTop: '1em',
    paddingBottom: '1em'
  },
  tagsChip: {
    margin: '0 2px 2px 0',
    height: '24px'
  }
});

export const EditorialField = withStyles(editorialFieldStyles)(({ classes, record }) => (
  <Grid container spacing={8} className={classes.root}>
    <Grid item xs={12}>
      <Typography variant="title">
        {false && record.published ? (
          <a href={record.url} target="_blank">{record.title}</a>
        ) : (
          record.title
        )}
      </Typography>
    </Grid>

    {record.tags && (
      <Grid item xs={12}>
        {record.tags.map((tag, i) => (
          <Chip key={`${tag}${i}`} label={tag} variant="outlined" className={classes.tagsChip} />
        ))}
      </Grid>
    )}

    <Grid item xs={12}>
      <Typography variant="body1">{record.description}</Typography>
    </Grid>
  </Grid>
));

EditorialField.defaultProps = {
  addLabel: true
};

export const CountryField = ({ record: { country } }) => {
  const data = countryData.find(({ countryShortCode }) => countryShortCode === country );
  if (data.countryName) {
    return <span>{data.countryName} ({country})</span>
  }
};

CountryField.defaultProps = {
  addLabel: true
};

export const ClasificationGridField = ({ record }) => (
  <div>
    <Grid container spacing={8}>
      <Grid item xs={12}>
        {/*<Paper>{record.genre.name}</Paper>*/}
        <Typography variant="title">{record.genre.name}</Typography>
      </Grid>

      {record.genre.slug === 'programa' && (
        <Grid item xs={12}>
          <SerieCard record={record} />
        </Grid>
      )};

      <Grid item xs={12}>
        <DateField source="date" record={record} showTime />
        {record.correspondent && (
          <Chip avatar={<Avatar>{record.correspondent.id}</Avatar>} label={record.correspondent.name} variant="outlined" />
        )}
      </Grid>
      <Grid item xs={12}>
        {record.genre && <ChipField record={record.genre} source="name" />}
      </Grid>
    </Grid>
  </div>
);

ClasificationGridField.defaultProps = {
  addLabel: true
};

export const SerieCard = ({ record }) => (
  <Card>
    <CardMedia
      component="img"
      alt={record.serie.name}
      height="140"
      image={record.serie.poster}
      title={record.serie.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {record.title || record.serie.name}
      </Typography>
      <Typography component="p">
        {record.description}
      </Typography>
    </CardContent>
  </Card>
);
