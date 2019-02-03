import React from 'react';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player'

const ClipPlayer = ({ clip }) => (
   <ReactPlayer
     url={clip.hls}
     playing
     pip
     controls
    />
);

export default ClipPlayer;
