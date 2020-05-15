const initialState = {
    showList: true,
    showDetails: false,
    userList: null,
    userDetails: null
}
const Home = (state = initialState, action) => {
    switch (action.type) {
        case "SHOW_LIST":
            return {
                ...state,
                showList: !state.showList
            }
        case "SHOW_DETAILS":
            return {
                ...state,
                showDetails: !state.showDetails
            }
        case "GET_LIST": 
            return{
                ...state,
                userList: action.data
            }
        case "GET_DETAILS": 
            return{
                ...state,
                userDetails: action.data
            }
        default:
            return state;
    }
}
export default Home;
