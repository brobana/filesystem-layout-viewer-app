import React from 'react';
import UserInput from '../DiskGraph/Input/UserInput';

const TextInput = (props) => {
  return (
    <section>
      <h2>Text Input</h2>
      <UserInput
        onUpdateData={props.onUpdateData}
        onResetView={props.onResetView}
        volumeData={props.volumeData}
        resetView={props.resetView}
      />
    </section>
  );
};

export default TextInput;
