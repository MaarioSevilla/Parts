export const BUY_POKEMON = 'BUY_POKEMON'

export const buy_pokemon_action = (cant) => {
    return{
        type: BUY_POKEMON,
        payload: cant
    }
}