import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';
import { CardActionArea,Button } from '@mui/material';
import {BsCheck2Circle} from "react-icons/bs";
import CountDown from './CountDown';


const ParticipateBtn = styled(Button)({
       marginTop:'2rem',
       backgroundColor:'#44924C',
       color:'white',
       padding:".5rem 1rem",
       "&:hover":{
           backgroundColor:'gray',
           color:'white'
       }

})

const HackathonCard = ({hackathon}) => {
    const {title,status,time,image_url} = hackathon;
    

  return (
    <Card raised sx={{ maxWidth: 300,}}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={image_url}
        alt="green iguana"
      />
      <CardContent sx={{textAlign:'center'}}>
        <Typography textAlign="center" gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography sx={{
            color:status === "active" ? 'green' : 'black',
            backgroundColor:status === "past" ? "#ffcccb" :(status === "active" ? "lightgreen" : "#ffff99"),
            padding:'.2rem .8rem',
            borderRadius:'5px',
        }} textAlign="center" variant="div" color="text.secondary">
             {status}
        </Typography>
        <CountDown time={time}/>
        <ParticipateBtn startIcon={<BsCheck2Circle/>}>Participate Now</ParticipateBtn>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default HackathonCard;