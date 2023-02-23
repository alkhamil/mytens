const initialState = {
    repos: [],
    loading: true
}

const repoReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getRepos":
            return {
                ... state,
                repos: action.payload,
                loading: false
            }

        default: 
            return state    
    }
}

export default repoReducer;