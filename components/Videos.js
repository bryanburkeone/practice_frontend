import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class Items extends Component {
    render() {
        return (
            <div style={{    'display': 'flex',
                'flexDirection': 'column'}}>
                <iframe
                    src="https://giphy.com/embed/1wmM8838LfW9sYZ1Bq"
                    frameBorder="0"
                    style={{'paddingBottom': 15}}
                    className="giphy-embed"
                    allowFullScreen
                />
                <iframe
                    src="https://giphy.com/embed/cfuL5gqFDreXxkWQ4o"
                    frameBorder="0"
                    className="giphy-embed"
                    style={{'paddingBottom': 15}}
                    allowFullScreen
                />
                <iframe
                    src="https://giphy.com/embed/GpCsi8ZxjKbgk"
                    frameBorder="0"
                    className="giphy-embed"
                    style={{'paddingBottom': 15}}
                    allowFullScreen

                />
            </div>
        );
    }
}

export default Items;