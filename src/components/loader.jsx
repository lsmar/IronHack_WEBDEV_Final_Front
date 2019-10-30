import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const LoaderExampleText = () => (
  <div>
      <Dimmer className='Dimmer' active inverted>
        <Loader className='loader'inverted>Carregando...</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
  </div>
)

export default LoaderExampleText