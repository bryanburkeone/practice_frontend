import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import Link from 'next/link';
import Router from 'next/router'
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User'
import Form from './styles/Form';
import Error from './ErrorMessage'

const LOGIN_MUTATION = gql`
    mutation LOGIN_MUTATION($password: String!, $email: String!) {
        login(password: $password, email: $email) {
            _id
            email
            username
        }
    }
`;


class Login extends Component {
    state = {
        password: "",
        showPassword: false,
        email: "",
    };

    saveToState = e => {
        this.setState({[e.target.name]: e.target.value });
    };

    showHide = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({showPassword: !this.state.showPassword});
    };


    render() {
        const {email, password, showPassword} = this.state;

        return (
            <Mutation
                mutation={LOGIN_MUTATION}
                variables={{password, email}}
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
                {(login, {loading, error}) => {
                    return (
                        <div>
                            <Error error={error}/>
                            <Form method="post" onSubmit={async e => {
                                e.preventDefault();
                                const response = await login();
                                this.setState({ email: '', password: ''})
                                Router.push('/videos');
                            }}>
                                <fieldset disabled={loading} aria-busy={loading}>
                                    <label htmlFor="email">
                                        email
                                        <input
                                            placeholder="email"
                                            name="email"
                                            value={this.state.email}
                                            type="email"
                                            onChange={this.saveToState}
                                        />
                                    </label>
                                    <label htmlFor="password">
                                        password
                                        <input
                                            placeholder="password"
                                            name="password"
                                            value={this.state.password}
                                            type={showPassword ? 'text' : 'password'}
                                            onChange={this.saveToState}
                                        />
                                        <i className="fal fa-eye-evil" onClick={this.showHide}/>
                                    </label>
                                    <Link href='/signup'><a>need an account?</a></Link>
                                    <button type="submit">log in</button>
                                </fieldset>
                            </Form>
                        </div>
                    )
                }}
            </Mutation>
        );
    };
}

export default Login;