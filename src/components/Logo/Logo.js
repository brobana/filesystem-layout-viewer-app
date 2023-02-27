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
        <img
          src="/logo192.png"
          height="38"
          alt="logo"
          style={{ paddingRight: '0.2em', paddingTop: '0.2em' }}
        />
        Filesystem Layout Viewer
      </a>
    </div>
  );
};

export default Logo;
