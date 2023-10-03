import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Product({imgs, product_name, title,rate,price,color,description}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt=""
        height="140"
        image={imgs[1]}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {title}
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{rate}</Button>
        <Button size="small">{price}</Button>
      </CardActions>
    </Card>
  );
}