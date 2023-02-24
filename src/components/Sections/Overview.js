import React from 'react';

const Overview = () => {
  return (
    <section>
      <h2>Overview</h2>
      <p>
        This app shows a graphical representation of a Linux filesystem. Each
        filesystem component is represented by a node, and the relationships
        between nodes are represented by lines connecting the nodes. The app
        requires JSON-formatted input, which can be obtained on the Linux server
        by running a non-intrusive shell script.
      </p>
    </section>
  );
};

export default Overview;
