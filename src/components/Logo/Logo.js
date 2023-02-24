import { RiNodeTree } from 'react-icons/ri';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.logo}>
      <a
        href="/#home"
        target="_self"
        rel="noreferrer"
        style={{ fontWeight: '400' }}
      >
        <RiNodeTree
          color="green"
          size="1.2em"
          style={{ paddingRight: '0.1em', paddingTop: '0.1em' }}
        />
        Filesystem Layout Viewer
      </a>
    </div>
  );
};

export default Logo;
