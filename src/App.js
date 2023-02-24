import React, { Fragment, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Logo from './components/Logo/Logo';
import Overview from './components/Sections/Overview';
import Usage from './components/Sections/Usage';
import Notes from './components/Sections/Notes';
import TextInput from './components/Sections/TextInput';
import Diagram from './components/Sections/Diagram';
import { defaultData } from './components/DiskGraph/Flow/DefaultData';

import classes from './App.module.css';

const App = () => {
  const [volumeData, setVolumeData] = useState(defaultData);
  const [resetView, setResetView] = useState(true);

  const updateDataHandler = (newVal) => {
    setVolumeData((val) => newVal);
  };

  const resetViewHandler = (newVal) => {
    setResetView((val) => newVal);
  };

  const onClickHandler = (url) => {
    return () => window.open(url, '_blank');
  };

  return (
    <Fragment>
      <div className={classes['header-container']}>
        <header>
          <Logo />
        </header>
      </div>
      <div className={classes.container}>
        <main id="home">
          <Overview />
          <Usage />
          <Notes />
          <TextInput
            onUpdateData={updateDataHandler}
            onResetView={resetViewHandler}
            volumeData={volumeData}
            resetView={resetView}
          />
          <Diagram volumeData={volumeData} resetView={resetView} />
        </main>
        <footer>
          &copy; 2023. A proof of concept by&nbsp;
          <a href="https://www.bryanobana.com" target="_blank" rel="noreferrer">
            Bryan Obaña
          </a>
          . View source code on GitHub&nbsp;
          <AiFillGithub
            size="1.5em"
            onClick={onClickHandler(
              'https://github.com/brobana/filesystem-layout-viewer-app'
            )}
            style={{ cursor: 'pointer' }}
          />
          .
        </footer>
      </div>
    </Fragment>
  );
};

export default App;
