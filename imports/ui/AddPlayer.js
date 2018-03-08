import React from 'react';
import {Players} from '../api/players';

export default class AddPlayer extends React.Component {
    handleSubmit (e) {
        e.preventDefault();
        let playerName = e.target.playerName.value;
        if (playerName) {
            e.target.playerName.value  = '';
            Players.insert({
            name: playerName,
            score: 0 
            });
        }
    }
    render() {
        return (
            <div className='item'>
                <form className='form' onSubmit={this.handleSubmit} autoComplete="off">
                    <input className='form__input' type='text' name='playerName' placeholder='Player name' />
                    <button className='button'>Submit</button>
                </form>
            </div>
        );
    }
}