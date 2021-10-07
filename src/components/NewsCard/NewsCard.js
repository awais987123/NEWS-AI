import React from 'react';
import {Card , CardActionArea, CardActions, CardMedia , CardContent,Button, Typography} from '@material-ui/core';
import useStyles from '../NewsCard/Style';

const NewsCard = ({article:{description, title, url, publishedAt, urlToImage, source}, i}) => {
    const classes=useStyles();
    return (
      <Card className={classes.card}>
      <CardActionArea href={url} target="_blank">
      <CardMedia className={classes.media} image={urlToImage} />
      <div className={classes.details}>
      <Typography  variant="body2" component="h2" color="textSecondary" >{(new Date(publishedAt)).toDateString()}</Typography>
      <Typography variant="body2" component="h2" color="textSecondary" >{source.name}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
      <CardContent>
      <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
      </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary">Learn More</Button>
      <Typography variant="h5" color="textSecondary">{i+1}</Typography>
      </CardActions>
      </Card>

    );
}

export default NewsCard
