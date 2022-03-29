import React from 'react';
import ArrowLeft from './arrow-right';
import Github from './github';
import Home from './home';
import Moon from './moon';
import Sun from './sun';
import Palette from './palette';

const icons = {
  home: Home,
  github: Github,
  'arrow-left': ArrowLeft,
  moon: Moon,
  sun: Sun,
  palette: Palette
};

const Iconly = ({ name, ...props }) => {
  const Icon = icons[name];
  if (!Icon) {
    throw new Error(`Icon '${name}' doesn't exists in the icons folder`);
  }
  return <Icon {...props} />;
};

export default Iconly;
