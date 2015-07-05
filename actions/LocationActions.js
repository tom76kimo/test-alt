import alt from '../alt';
import LocationFetcher from '../utils/LocationFetcher';

class LocationActions {
    updateLocations(locations) {
        this.dispatch(locations);
    }

    fetchLocations() {
        this.dispatch(locations);
        LocationFetcher.fetch()
            .then((locations) => {
                this.actions.updateLocations(locations);
            })
            .catch((error) => {
                this.actions.locationsFailed(errorMessage);
            });
    }

    locationsFailed(errorMessage) {
        this.dispatch(errorMessage);
    }
}

export default alt.createActions(LocationActions);