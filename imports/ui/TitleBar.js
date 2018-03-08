import React from 'react';

class TitleBar extends React.Component {
    render() {
        return (
            <div className='title-bar'>
                <div className='wrapper'>
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
}

export default TitleBar;