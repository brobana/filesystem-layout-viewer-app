import React from 'react';

const Usage = () => {
  return (
    <section>
      <h2>Usage</h2>
      <ol>
        <li>
          Run the{' '}
          <a
            href="https://github.com/brobana/shell-scripts/blob/master/get_disk_info.py"
            target="_blank"
            rel="noreferrer"
          >
            get_disk_info.py
          </a>{' '}
          shell script on the Linux server then select and copy the
          JSON-formatted output.
        </li>
        <li>
          Paste the JSON-formatted output into the text box below, replacing the
          sample contents.
        </li>
        <li>
          Select the <strong>Reset view</strong> checkbox to return the view and
          nodes to their default locations.{' '}
          <em>&#40;selected by default&#41;</em>
        </li>
        <li>
          Use the <strong>Prettify</strong> button to format the JSON document.{' '}
          <em>&#40;optional&#41;</em>
        </li>
        <li>
          Use the <strong>Refresh</strong> button to update the filesystem
          diagram.
        </li>
      </ol>
    </section>
  );
};

export default Usage;
