import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Skeleton from '../components/Skeleton'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  media: {
    height: 140,
  },

  cardContainer: {
    height: 300,
    padding: 10,
  }
});

const Meals = () => {

    const classes = useStyles();
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async() => {
        setLoading(true)
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        const data = await res.json();
        console.log(data);
        setMeals(data.categories);
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }

    
    useEffect(() => {
        fetchData()
    }, [])
    
    if(loading) {
        return (
            <>
                <Skeleton />
                {/* Loading... */}
            </>
        )
    }

    
    return (
        <>
            <Grid container spacing={2}>
                {
                    meals.map((val, key) => {
                        return (
                            <Grid item xs={4} key={key}>
                                <Card className={classes.cardContainer}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={ val.strCategoryThumb }
                                        height="140"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { val.strCategory }
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            { val.strCategoryDescription.substr(0, 100)}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Share
                                        </Button>
                                        <Button size="small" color="primary">
                                        Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default Meals