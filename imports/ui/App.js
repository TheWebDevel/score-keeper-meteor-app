import React from 'react';
import TitleBar from './TitleBar';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import {Players, calculatePlayerPositions} from '../api/players';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <TitleBar title='Score Keeper'/>
                <div className='wrapper'>
                    <PlayerList players={calculatePlayerPositions(Players.find({}, {
                        sort: {
                            score : -1
                        }
                    }).fetch())} />
                    <AddPlayer />
                </div>
            </div>
        );
    }
}