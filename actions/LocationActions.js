import alt from '../alt';
import LocationFetcher from '../utils/LocationFetcher';

class LocationActions {
    updateLocations(locations) {
        this.dispatch(locations);
    }

    fetchLocations() {
        this.dispatch();
        LocationFetcher.fetch()
            .then((locations) => {
                this.actions.updateLocations(locations);
            })
            .catch((errorMessage) => {
                this.actions.locationsFailed(errorMessage);
            });
    }

    locationsFailed(errorMessage) {
        this.dispatch(errorMessage);
    }

    favoriteLocation(locationId) {
        this.dispatch(locationId);
    }
}

export default alt.createActions(LocationActions);
