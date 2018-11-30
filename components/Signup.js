import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from  './styles/Form';
import Error from './ErrorMessage'
import { CURRENT_USER_QUERY } from './User'
//todo figure out why its not setting cookie
const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION(
    $email: String!
    $username: String!
    $password: String!
    ) {
        signup(
            email: $email
            username: $username
            password: $password
        ) {
            _id
            email
            username
        }
    }
`;

class Signup extends Component {
    state = {
        username: '',
        password: '',
        email: ''
    };

    saveToState = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    };
    render() {
        return(
            <Mutation
                mutation={SIGNUP_MUTATION}
                variables={this.state}
                refetchQueries={[{ query: CURRENT_USER_QUERY}]}
            >
                {(signup, {loading, error}) => {
                    return(
                        <Form
                            method="post"
                            onSubmit={async e => {
                                e.preventDefault();
                                const res = await signup();
                                this.setState({username: '', password: '', email: ''})
                            }}
                        >
                                    <h2>Sign up for an Account</h2>
                                    <Error error={error} />
                                    <label htmlFor="email">
                                        Email
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            value={this.state.email}
                                            onChange={this.saveToState}
                                        />
                                    </label>
                                    <label htmlFor="name">
                                        Name
                                        <input
                                            type="text"
                                            name="username"
                                            placeholder="name"
                                            value={this.state.username}
                                            onChange={this.saveToState}
                                        />
                                    </label>
                                    <label htmlFor="password">
                                        Password
                                        <input
                                            type="paswword"
                                            name="password"
                                            placeholder="password"
                                            value={this.state.password}
                                            onChange={this.saveToState}
                                        />
                                    </label>
                                    <button type="submit">SignUp!</button>



                        </Form>
                    )
                }}
            </Mutation>
        )
    }
}

export default Signup
