
export default function herosReducer(state = { heros: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_HEROS':
      return { ...state, loading: true}

    case 'FETCH_HEROS':
      return { heros: [action.payload], loading: false}

    case 'DELETE_ALL_HEROS':
      return { heros: [], loading: false }

    default:
      return state
  }
}