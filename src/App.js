import React, { useEffect, useState } from 'react';
import alnBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import { Typography } from '@material-ui/core';

import useStyles from './styles';
const alnKey = '3f86b51be21785b46fa1f820093fd85b2e956eca572e1d8b807a3e2338fdd0dc/stage';


const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        alnBtn({
            key: alnKey,
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])
    return (
        <div>

            <div className={classes.logoContainer}>

                <img src="https://i.pinimg.com/564x/ff/0a/b0/ff0ab0bb20e64890fadc31d87affd643.jpg" className={classes.alanLogo} alt="logo" />
                <Typography color="textSecondary" variant="h1">NEWS AI</Typography>
            </div>
            <NewsCards articles={newsArticles} />
        </div>
    );
}

export default App;