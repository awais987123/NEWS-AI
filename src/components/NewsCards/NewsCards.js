import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid , Grow, Typography}  from '@material-ui/core';
import useStyles from './Style';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'BBC News Headlines', info: 'BBC News is  responsible for the gathering and broadcasting of news and current affairs.', text: 'Give me the news from BBC' },
  ];


const NewsCards = ({articles}) => {
    const classes= useStyles();

    if(!articles.length)
    {
        return(
            <Grow in>
            <Grid container spacing={3} alignItems="stretch">
            {infoCards.map((infoCard)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
              </div>
                </Grid> 
            ))}
            </Grid>
            </Grow>

            );
    }
    return (
      <Grow in>
      <Grid  container spacing={3} alignItems="stretch">
      {articles.map((article, i)=> (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
          <NewsCard article={article} i={i}/>
          </Grid>
      )    
      )}
      </Grid>
      </Grow>   
            );
}

export default NewsCards;