export default function herosReducer(state = { heros: [], info: [], loading: false }, action) {
  switch (action.type) {
    case 'LOADING_HEROS':
      return { ...state, loading: true}

    case 'FETCH_HEROS':
      let mergeHeros = action.payload[0].concat(state.heros)
      return { heros: mergeHeros, info: action.payload[1], loading: false }

    case 'DELETE_ALL_HEROS':
      return { heros: [], loading: false }

    case 'ADD_HEROS':
      let addHeros = action.payload.concat(state.heros)
      return { ...state, heros: addHeros }

    default:
      return state
  }
}