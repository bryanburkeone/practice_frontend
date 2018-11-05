import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const HELLO_QUERY = gql`
    query HELLO_QUERY {
        me 
    }
`;


class Items extends Component {
    render() {
        return (
            <div>
                <Query query={HELLO_QUERY}>
                    {({ data, error, loading }) => {
                        if (loading) return <p>Loading...</p>;
                        if (error) return <p>Error: {error.message}</p>;
                        console.log(data)
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