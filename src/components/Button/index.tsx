import React, { ButtonHTMLAttributes } from 'react';

import { ButtonView, ButtonBody } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonView>
      <ButtonBody {...rest}>{children}</ButtonBody>
    </ButtonView>
  );
};

export default Button;
