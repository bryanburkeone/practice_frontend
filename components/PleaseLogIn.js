import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const CURRENT_USER_QUERY = gql`
    query {
        me{
            _id
            email
            username
        }
    }
`;


const PleaseLogIn = props => (
    <Query query={ CURRENT_USER_QUERY }>
        {({data, loading}) => {
            if( loading ) return <p>...<i className="fal fa-rabbit-fast"/></p>
            if(!data.me) {
                return (
                    <div>
                        <h4>Please sign in, thanks!</h4>
                    </div>
                )
            }
            return props.children;
        }}
    </Query>
);

export default PleaseLogIn;