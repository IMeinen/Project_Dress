import React from 'react';

import { ButtonPrimary, ButtonSecondary } from './styles';

export default function Button({
  text,
  primary,
  secondary,
  clickEvent,
  className,
  style,
  ...props
}) {
  if (primary) {
    return (
      <ButtonPrimary className={className} onClick={clickEvent} style={style} {...props} >
        <span>{text}</span>
      </ButtonPrimary>
    );
  }
  if (secondary) {
    return (
      <ButtonSecondary className={className} onClick={clickEvent} style={style} {...props}>
        {text}
      </ButtonSecondary>
    );
  }
}
