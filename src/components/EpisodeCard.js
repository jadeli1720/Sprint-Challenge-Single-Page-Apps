import React from 'react';
import { Card, Icon} from 'semantic-ui-react';

export default function EpisodeCard (props) {
    return(
        <Card>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>
             Episode: {props.episode}
          </Card.Description>
          <Card.Description>
              <Icon name='user' />
             {props.characters}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='calendar' />
            {props.date}
          </a>
        </Card.Content>
      </Card>
    )
}