export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: business
    };
};

export const removeCar = (id) => {
    return {
        type: 'REMOVE_CAR',
        value: id
    };
};