import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

export default function LocationCard ({ name, type, dimension, residents }) {
  
    // console.log('location card',props)
  return (
    <Card>
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>
        {type}: {dimension}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
         {residents} residents
      </a>
    </Card.Content>
  </Card>
  )
}

