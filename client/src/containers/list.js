import {connect} from 'react-redux';
import * as HOMEACTIONS from '../actions/home';
import List from '../components/list';

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

const UserList = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);

export default UserList;
