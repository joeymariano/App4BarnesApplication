import fetch from 'isomorphic-fetch';

export function getHeroService(){
  return (dispatch) => {
    dispatch({type: 'LOADING_HEROS'})
    fetch(`https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json`)
      .then(response => response.json())
      .then(herosData => {
      		let heros = herosData.members

      		let info = []
      		for(let i in herosData){
      			if (i !== 'members'){
	      			let obj = {}
	      			obj[i] = herosData[i]
	      			info.push(obj)
      			}
      		}

          dispatch({ type: 'FETCH_HEROS', payload: [heros, info] })
      })
  }
}