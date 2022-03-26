import React from 'react';

const withDefaults = (
  Component,
  defaultProps
) => {
  Component.defaultProps = defaultProps;
  return Component;
};

export default withDefaults;