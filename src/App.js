import React, { Fragment, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Logo from './components/Logo/Logo';
import Overview from './components/Sections/Overview';
import Usage from './components/Sections/Usage';
import Notes from './components/Sections/Notes';
import TextInput from './components/Sections/TextInput';
import Diagram from './components/Sections/Diagram';
import { sampleData } from './components/DiskGraph/Flow/SampleData';

import classes from './App.module.css';

const App = () => {
  const [volumeData, setVolumeData] = useState(sampleData);
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
      </div>
      <footer>
        &copy; 2023. A proof of concept by&nbsp;
        <div>
          <a href="https://www.bryanobana.com" target="_blank" rel="noreferrer">
            Bryan Obaña
          </a>
          .&nbsp;
        </div>
        View source code on GitHub&nbsp;
        <AiFillGithub
          size="1.5em"
          onClick={onClickHandler(
            'https://github.com/brobana/filesystem-layout-viewer-app'
          )}
          style={{ cursor: 'pointer' }}
        />
        .
      </footer>
    </Fragment>
  );
};

export default App;
