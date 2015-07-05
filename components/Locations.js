import React from 'react';
import LocationStore from '../stores/LocationStore';

class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = LocationStore.getState();
    }

    onChange(state) {
        this.setState(state);
    }

    render () {
        console.log('asdfasdf');
        return (
            <ul>
            {this.state.locations.map((location) => {
              return (
                <li>{location.name}</li>
              );
            })}
            </ul>
        );
    }

    componentDidMount() {
        LocationStore.listen(this.onChange);
    }

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    }
};

export default Locations;