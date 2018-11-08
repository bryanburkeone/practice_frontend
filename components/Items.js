import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const USER_QUERY = gql`
  query USER_QUERY($id: String!) {
    user(_id: $id) {
        username
    }
  }
`;

class Items extends Component {
    render() {
        return (
            <div>
                <Query query={USER_QUERY} variables={{id : "5be25ea699a5281971e3bf2a"}}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error: {error.message}</p>;
                        return (
                            <div>hello world</div>
                        );
                    }}
                </Query>
            </div>
        );
    }
}

export default Items;