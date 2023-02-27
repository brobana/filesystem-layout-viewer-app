import React from 'react';

const Notes = () => {
  return (
    <section>
      <h2>Notes</h2>
      <ul>
        <li>
          Refer to this{' '}
          <a
            href="https://github.com/brobana/shell-scripts#get_disk_infopy"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>{' '}
          for more information about the above shell script.
        </li>
        <li>
          Only LINUX operating systems managed by Logical Volume Manager
          &#40;LVM&#41; are currently supported.
        </li>
        <li>
          This app is solely a proof of concept, and bugs and errors may appear.
        </li>
      </ul>
    </section>
  );
};

export default Notes;
