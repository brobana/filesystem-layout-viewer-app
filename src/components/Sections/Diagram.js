import React from 'react';
import { ReactFlowProvider } from 'reactflow';
import Flow from '../DiskGraph/Flow/Flow';

const Diagram = (props) => {
  return (
    <section>
      <h2>Filesystem Diagram</h2>
      <ReactFlowProvider>
        <Flow volumeData={props.volumeData} resetView={props.resetView} />
      </ReactFlowProvider>
    </section>
  );
};

export default Diagram;
