import Link from 'next/link';
import styled from 'styled-components';
import NavStyles from './styles/NavStyles';
import User from './User'
import Logout from '../components/Logout';

const SignUpWrapper = styled.a`
   padding-left: 10px;
    padding-right: 10px;
    background-color: #a09aa74f;
    borderRadius: 2px;
    font-family: monospace;
    font-size: x-large;
    &:hover{
        background-color: #34e5db;
    }
`;

const LoginUpWrapper = styled.a`
 
`;


const Nav = () => (
     <User>
        {({data: { me }}) => console.log(me) || (
            <NavStyles style={me === null ? {'justify-content': 'flex-end'} : {}}>

                {   //logged in
                    me !== null &&
                    <>
                        <Link href="/index">
                            <a>Home</a>
                        </Link>
                        <Link href="/videos">
                            <a>videos</a>
                        </Link>
                        <Link href='/'>
                            <a>
                                <Logout/>
                            </a>
                        </Link>
                    </>
                }

                { //not logged in
                    me === null &&
                    <Link href="/login">
                        <LoginUpWrapper >Login</LoginUpWrapper>
                    </Link>
                }
            </NavStyles>
        )}
    </User>

);

export default Nav;