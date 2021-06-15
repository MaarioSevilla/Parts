import { BUY_POKEMON } from "../actions";

const default_games_state={
    pokemon:10
}

export const games_reducer = (state = default_games_state, action)=>{
    switch (action.type) {
        case BUY_POKEMON:
            return{
                pokemon: state.pokemon - action.payload
            }
        default:
            return state;
    }
}