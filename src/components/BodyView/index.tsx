import React from 'react';

import { Body, BodyContent } from './styles';

const BodyView: React.FC = ({ children }) => {
  return (
    <Body>
      <BodyContent>{children}</BodyContent>
    </Body>
  );
};

export default BodyView;
