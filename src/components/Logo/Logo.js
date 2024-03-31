// material-ui

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */
import logo from 'assets/images/logo.svg';

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={logo} alt="Mantis" width="100" />
     *
     */
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="Limos" width="80" />
        <span style={{fontSize: '24px', fontWeight: 'bold' }}>LIMOS</span>
      </div>
    </>
  );
};

export default Logo;
