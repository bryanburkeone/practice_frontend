import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
    NProgress.start();
};

Router.onRouteChangeComplete = () => {
    NProgress.done();
};

Router.onRouteChangeError = () => {
    NProgress.done();
};

const Logo = styled.img`
  width: 48%;
  padding: 10px;
    @media (max-width: 768px) {
        width: 100%;
      }
`;

const StyledHeader = styled.header`
  .bar {
    // border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.lightgrey};
  }
`;

const Header = () => (
    <StyledHeader>
        <div className="bar">
                <Link href="/">
                    <Logo
                        src="/static/bakers_logo_wide_white.png"
                    />
                </Link>
            <Nav />
        </div>
        {/*<div className="sub-bar">*/}
            {/*<p>Search</p>*/}
        {/*</div>*/}
        {/*<div>Cart</div>*/}
    </StyledHeader>
);

export default Header;