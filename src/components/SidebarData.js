import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Child Game',
    path: '#',
    icon: <FaIcons.FaChild />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Auto Play',
        path: '/child/auto',
        icon: <BsIcons.BsArrowReturnRight />,
        cName: 'sub-nav'
      },
      {
        title: 'Manual Play',
        path: '/child/manual',
        icon: <BsIcons.BsArrowReturnRight />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Adult Game',
    path: '#',
    icon: <BsIcons.BsFillPersonFill />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'Auto Play',
          path: '/adult/auto',
          icon: <BsIcons.BsArrowReturnRight />,
          cName: 'sub-nav'
        },
        {
          title: 'Manual Play',
          path: '/adult/manual',
          icon: <BsIcons.BsArrowReturnRight />,
          cName: 'sub-nav'
        },
      ]
  },
  {
    title: 'How To Play',
    path: '/instructions',
    icon: <IoIcons.IoMdHelpCircle />
  }
];