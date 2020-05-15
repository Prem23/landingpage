import {connect} from 'react-redux';
import * as HOMEACTIONS from '../actions/home';
import Details from '../components/details';

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

const UserDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(Details);

export default UserDetails;
