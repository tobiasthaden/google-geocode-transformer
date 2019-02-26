export default class GoogleAddress
{
    /**
     * Create a new GoogleAddress instance.
     * 
     * @param  {Object} address The result from the Google Geocode API
     * @param  {Object} types   A map of types that should be transformed.
     * @return {void}
     */
    constructor(address, types) {
        this.google = address;
        this.components = {};
        this.transform(types);
    }

    /**
     * Transform the Google address components.
     * 
     * @param  {Object} types A map of types that should be transformed.
     * @return {void}
     */
    transform(types) {
        this.setTypes(types);
        this.google.address_components.reduce((components, component) => {
            components[this.findType(component)] = component.long_name;
            return components;
        }, this.components);
    }

    /**
     * Set the types that should be transformed.
     * 
     * @param {Object} types
     */
    setTypes(types) {
        this.types = Object.assign({
            street_number: 'number',
            route: 'street',
            locality: 'city',
            sublocality: 'district',
            country: 'country',
            postal_code: 'postcode',
            administrative_area_level_1: 'state'
        }, types);
    }

    /**
     * Find the matching type for the given address component.
     * 
     * @param  {Object} component A Google address component.
     * @return {String}           The matching type.
     */
    findType(component) {
        let match = Object.keys(this.types).filter(
            element => component.types.includes(element)
        );

        if(!match.length) {
            throw "The given type is not defined."
        }

        return this.types[match[0]];
    }

    /**
     * Get the address components.
     * 
     * @return {Object}
     */
    address() {
        return this.components;
    }

    /**
     * Get the address codes.
     * 
     * @return {Object}
     */
    codes() {
        return this.google.plus_code;
    }

    /**
     * Get the formatted address.
     * 
     * @return {String}
     */
    formatted() {
        return this.google.formatted_address;
    }

    /**
     * Get the google place id.
     * 
     * @return {String}
     */
    id() {
        return this.google.place_id;
    }
}