import React from 'react';
import CountUp from 'react-countup';
import { Card, CardContent, Typography, Grid, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 50,
    margin: 6
  },
  media: {
    height: 140,
  },
});
export default function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  // const [apiData, setApiData] = React.useState({})
  // const url = "https://covid19.mathdro.id/api"
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const {data : {confirmed , recovered, deaths ,lastUpdate}} = await axios.get(url)
  //     setApiData({ c : confirmed.value , r : recovered.value , d : deaths.value , l : lastUpdate})
  //   }
  //   fetchData()
  // },[apiData])
  const classes = useStyles();

  return (<div>
    <Grid container spacing={3} justify="center">
      <Grid item component={Card} className={classes.root} xs={12} md={3} elevation={3}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"> CONFIRMED </Typography>
          <Typography variant="h6" color="textSecondary">{confirmed}<CountUp start={0} end={confirmed} duration={2} separator="," /></Typography>
          <Typography>{new Date(lastUpdate).toDateString()}</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} className={classes.root} xs={12} md={3} elevation={3}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"> RECOVERED </Typography>
          <Typography variant="h6" color="textSecondary">{recovered}<CountUp start={0} end={recovered} duration={2} separator="," /> </Typography>
          <Typography>{new Date(lastUpdate).toDateString()}</Typography>
        </CardContent>
      </Grid>
      <Grid item component={Card} className={classes.root} xs={12} md={3} elevation={3}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"> DEATHS </Typography>
          <Typography variant="h6" color="textSecondary">{deaths}<CountUp start={0} end={deaths} duration={2} separator="," /></Typography>
          <Typography>{new Date(lastUpdate).toDateString()}</Typography>
        </CardContent>
      </Grid>
    </Grid>
  </div>
  )
}
