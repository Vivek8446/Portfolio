import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Tilt from "react-parallax-tilt";
export default function ImgMediaCard(props) {
  return (
    <Tilt
    tiltMaxAngleX={15}
    tiltMaxAngleY={15}
    perspective={1000}
    // scale={0.8}
    glareEnable={true}
    glareMaxOpacity={0.9}
    glareColor="#ffffff"
    glarePosition="bottom"
    gyroscope={true}
    transitionSpeed={500}
    // reset={true}
    style={{ borderRadius: '15px', overflow: 'hidden', marginTop: '30px' }}
  >             
    <Card sx={{ maxWidth: 350 }} style={{borderRadius:"15px"}} >
    
      <CardMedia
        component="img"
        alt={props.title}
        height="100"
        weight="100"
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='cursor-default'>
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }} className='cursor-default'>
          {props.des}
        </Typography>
        <ul>
            
              <li style={{ marginLeft: '10px', marginBottom: '10px',color:"purple" }}>
                {props.tech}
              </li>
          
        </ul>
      </CardContent>
      <CardActions>
        
        <Button size="small" href={props.github} target="_blank">
          <GitHubIcon style={{ color: "black" }}  />
        </Button>
        <Button size="small" href={props.link}>
          <InsertLinkIcon style={{ color: "black" }} />
        </Button>
      </CardActions>

    </Card>
  </Tilt>
  );
}
