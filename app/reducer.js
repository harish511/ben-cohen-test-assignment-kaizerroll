export default function reducer(state, action) {

  switch (action.type) {
    case 'GAMESTATE_START': 
      return state
        .set('gameState', 'started')
        .set('score', 0)
        .set('time', state.gameLength)
        .set('highScore', localStorage.getItem('highScore') || 0)
        .set('moles', state.moles.map(mole =>
          mole.set('moleState', 'in') 
        ));

    case 'TICK': 
      return state.update('time', time => time - 1000);

    case 'GAMESTATE_END': 
      // set new highScore in localStorage for persistence
      if (state.score > state.highScore) {
        localStorage.setItem('highScore', state.score);
      }

      return state
        .set('gameState', 'gameover')
        .set('moles', state.moles.map(mole =>
          mole.set('moleState', 'in') 
        ));

    case 'MOLE_COMES_OUT':
      return state
        .setIn(['moles', action.index, 'moleState'], 'out');

    case 'MOLE_GOES_IN':
      return state
        .setIn(['moles', action.index, 'moleState'], 'in');

    case 'MOLE_HIT':
      return state
        .setIn(['moles', action.index, 'moleState'], 'hit')
        .update('score', score => score + 1);

    default:
      return state;
  }
}



