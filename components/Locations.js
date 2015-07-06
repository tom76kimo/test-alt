import React from 'react';
import LocationStore from '../stores/LocationStore';
import LocationActions from '../actions/LocationActions';
import FavoritesStore from '../stores/FavoritesStore';

class Locations extends React.Component {
    constructor(props) {
        super(props);
        this.state = LocationStore.getState();

        // current React.Component doen't handle auto-binding
        this.onChange = this.onChange.bind(this);
    }

    onChange(state) {
        this.setState(state);
    }

    render () {
        if (this.state.errorMessage) {
            return <div>Something is wrong!</div>;
        }

        if (!this.state.locations.length) {
            return (
              <div>Loading....</div>
            );
        }

        return (
            <ul>
            {this.state.locations.map((location, index) => {
              let styleColor = null;
              if (location.has_favorite) {
                styleColor = 'red';
              }
              return (
                <li onClick={this.pickFavorite.bind(this, index)} style={{color: styleColor}} key={index}>{location.name}</li>
              );
            })}
            </ul>
        );
    }

    pickFavorite(index) {
        LocationActions.favoriteLocation(index);
    }

    componentDidMount() {
        LocationStore.listen(this.onChange);
        LocationActions.fetchLocations();
    }

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    }
};

export default Locations;
