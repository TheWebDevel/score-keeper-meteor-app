import React from 'react';
import FlipMove from 'react-flip-move';
import Player from './Player';

export default class PlayerList extends React.Component {
  renderPlayers() {
    return this.props.players.map((player) => {
      return <Player key={player._id} player={player}/>;
    });
  }
  render() {
    return (
      <div>
        {this.props.players.length > 0 ? (
          <div>
            <FlipMove maintainContainerHeight={true}>
              {this.renderPlayers()}
            </FlipMove>
          </div>
          ) : (
          <div className='item'>
            <p className='item__message'>Add a player to get started!</p>
          </div>)}
      </div>
    );
  }
};

PlayerList.propTypes = {
  players: React.PropTypes.array.isRequired
}