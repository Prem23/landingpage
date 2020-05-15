import {connect} from 'react-redux';
import * as HOMEACTIONS from '../actions/home';
import App from '../components/App';

const mapStateToProps = state => {
    return {
        data:state.home
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showList : () => {
            dispatch(HOMEACTIONS.showList())
        },
        showDetails: () => {
            dispatch(HOMEACTIONS.showDetails())
        },
        fetchList: () => {
            dispatch(HOMEACTIONS.fetchList())
        },
        fetchDetails: id => {
            dispatch(HOMEACTIONS.fetchDetails(id))
        }
    }
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Home;
