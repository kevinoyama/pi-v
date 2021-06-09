import React from 'react';

import { InfoDisplayView } from './styles';

const InfoDisplay: React.FC = ({ children }) => {
  return (
    <InfoDisplayView>
      <h1>{children}</h1>
    </InfoDisplayView>
  );
};

export default InfoDisplay;
