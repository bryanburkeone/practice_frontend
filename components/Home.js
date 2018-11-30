import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Link from 'next/link';

const USER_QUERY = gql`
    query USER_QUERY {
        users {
            username
        }
    }
`;

const Wrapper = styled.div`
    width:100%;
    height:0;
    padding-bottom:73%;
    position:relative;
    z-index: 0;
`;

const SignUpWrapper = styled.a`
font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    line-height: 54.72px;
    height: 54.72px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #2e62af;
    height: 74px;
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    &:hover{
        background-color: #34e5db;
        cursor: pointer;
    }
`;
const SignUpButtonWrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 20px;
        padding-bottom: 20px;
`;
const CardWrapper = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        img{
            align-self: center;
            width: 80%;
            border-radius: 30px;
        }
        h2{
            align-self: center;
            margin: 0;
        
        }
        p{
            align-self: center;
            width: 80%;
            margin-top: 0;
            margin-bottom: 50px
            
        }
`;



class Home extends Component {
    render() {
        return (
            <div>
                <Query query={USER_QUERY}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error: {error.message}</p>;
                        console.log(data)
                        return (
                            <>
                                <Wrapper>
                                    <iframe
                                        src="https://giphy.com/embed/1wmM8838LfW9sYZ1Bq"
                                        width="100%"
                                        height="100%"
                                        style={{position:'absolute'}}
                                        frameBorder="0"
                                        className="giphy-embed"
                                        allowFullScreen
                                    />
                                </Wrapper>
                                <SignUpButtonWrapper>
                                        <SignUpWrapper>
                                            <Link href="/signup">
                                            <span
                                                style={{
                                                    'color': 'white',
                                                    'fontFamily' : 'Raleway sansSerif',
                                                    'fontSize': 'larger'
                                                }}
                                            >
                                                Signup Today
                                            </span>
                                            </Link>
                                        </SignUpWrapper>
                                    </SignUpButtonWrapper>

                                <CardWrapper>
                                    <img src={'https://via.placeholder.com/210x90.png'} />
                                    <h2>Card Header</h2>
                                    <p>Lbt aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </CardWrapper>

                                <CardWrapper>
                                    <img src={'https://via.placeholder.com/210x90.png'} />
                                    <h2>Card Header</h2>
                                    <p>Lbt aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </CardWrapper>

                                <CardWrapper>
                                    <img src={'https://via.placeholder.com/210x90.png'} />
                                    <h2>Card Header</h2>
                                    <p>Lbt aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                </CardWrapper>
                            </>
                        )
                    }}
                </Query>
            </div>
        );
    }
}

export default Home;