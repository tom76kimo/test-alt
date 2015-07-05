import alt from '../alt';
import LocationActions from '../actions/LocationActions';

class LocationStore {
    constructor() {
        this.locations = [];
        this.bindListeners({
            handleUpdateLocations: LocationActions.UPDATE_LOCATIONS,
        });
    }

    handleUpdateLocations(locations) {
        this.locations = locations;
    }
}

export default alt.createStore(LocationStore, 'LocationStore');