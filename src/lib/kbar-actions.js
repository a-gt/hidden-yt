import { Action } from 'kbar';
import { NextRouter } from 'next/router';
import { changeTheme } from '@nextui-org/react';

const handleExternalLink = (href) => {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    rel: 'noopener noreferrer',
    href
  }).click();
};

const handleChangeTheme = (theme) => {
  //context.setTheme(theme);
};

const getActions = (router) => {

  const staticActions = [
    {
      id: 'github',
      name: 'Github',
      subtitle: 'nextui-org',
      section: 'Social',
      shortcut: [],
      keywords: 'github, source code, open, code',
      icon: 'github',
      perform: () => handleExternalLink('https://github.com/nextui-org/nextui')
    },
    {
      id: 'changeTheme',
      name: 'Change Theme',
      section: 'General',
      shortcut: [],
      keywords:
        'background, change color, color, change theme, theme, dark, light',
      icon: 'palette',
      children: ['darkTheme', 'lightTheme']
    },
    {
      id: 'darkTheme',
      name: 'Dark',
      parent: 'changeTheme',
      keywords: 'dark',
      icon: 'moon',
      shortcut: [],
      perform: () => handleChangeTheme('dark')
    },
    {
      id: 'lightTheme',
      name: 'Light',
      parent: 'changeTheme',
      keywords: 'light',
      shortcut: [],
      icon: 'sun',
      perform: () => handleChangeTheme('light')
    }
  ];

  return staticActions;
};

export default getActions;