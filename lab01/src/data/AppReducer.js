const AppReducer = (state, action) => {
    switch (action.type) {
        case "delete":
            return state.filter(car => car.id !== action.payload.id);

        case "edit":
            return state.map(car => 
                car.id === action.payload.id 
                    ? { ...car, ...action.payload }
                    : car
            );

            case "rate":
                return state.map(car =>
                    car.id === action.payload.id
                        ? { ...car, rating: action.payload.rating }
                        : car
                );

        case "ADD":
            return [...state, action.payload];

        default:
            return state;
    }
};

export default AppReducer;