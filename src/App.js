import React from 'react';
import './App.css';

import News from './components/News';
import SideBar from './components/Sidebar';
import FindBlock from './components/FindBlock';
import CentralBanner from './components/CentralBanner';
import Sidebars from './components/SideBars';

const newsData = [];
const sidebarData = [];
const findData = [];
const sideBarsData = [];

export default function App() {
  return (
    <React.Component>

      <News data={newsData} />

      <SideBar data={sidebarData}>
        {/* Возможные потомки */}
      </SideBar>

      <FindBlock data={findData} />

      <CentralBanner>
        <a href="./someImage.png"><img src="./" alt="" /></a>
      </CentralBanner>

      <Sidebars data={sideBarsData} />

    </React.Component>
  );
}
