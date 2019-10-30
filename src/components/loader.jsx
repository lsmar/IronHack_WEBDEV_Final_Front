import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

const LoaderExampleText = () => (
  <div>
      <Dimmer active inverted>
        <Loader size='big' inverted>Carregando...</Loader>
      </Dimmer>
  </div>
)

export default LoaderExampleText