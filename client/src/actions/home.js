export const showList = () => {
    return {
        type: "SHOW_LIST"
    }
}

export const showDetails = () => {
    return {
        type: "SHOW_DETAILS"
    }
}

export const getDetails = data => {
    return{
        type: "GET_DETAILS",
        data
    }
}

export const getList = data => {
    return{
        type: "GET_LIST",
        data
    }
}

export const fetchDetails = id => {
    return (dispatch) => {
        fetch(`/api/userDetails?id=${id}`).then(resp => {
            return resp.json();
        }).then(data => {
            dispatch(getDetails(data));
        }).catch(err => {
            dispatch(getDetails(err));
        })
    }
}

export const fetchList = () => {
    return (dispatch) => {
        fetch(`/api/userList`).then(resp => {
            return resp.json();
        }).then(data => {
            dispatch(getList(data));
        }).catch(err => {
            dispatch(getList(err));
        })
    }
}
