import React from 'react';

const Overview = () => {
  return (
    <section>
      <h2>Overview</h2>
      <p>
        This app shows a graphical representation of filesystems on a Linux
        server. Each filesystem component is represented by a node, and the
        relationships between nodes are represented by lines connecting the
        nodes. The app requires JSON-formatted input, which can be obtained by
        running a non-intrusive shell script on the Linux server.
      </p>
    </section>
  );
};

export default Overview;
