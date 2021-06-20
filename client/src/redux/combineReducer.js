import {combineReducers} from 'redux';

import reducerSpending from './spending/spendingReducer';
import apartmentReducer from './apartments/apartmentsReducer';
import buildingReducer from './building/buildingReducer';
import reducerExpenses from './expenses/expensesReducer';
import alertsReducer from './alerts/alertsReducer';
import userReducer from './users/userReducer';
import reducerLogging from './logging/loggingReducer';
import amenitiesReducer from './amenities/amenitiesReducer';
import complaintsReducer from './complaints/complaintsReducer';

export const reducers = combineReducers({
	userReducer: userReducer,
	reducerSpending: reducerSpending,
	apartmentReducer: apartmentReducer,
	buildingReducer: buildingReducer,
	reducerExpenses: reducerExpenses,
	alertsReducer: alertsReducer,
	reducerLogging: reducerLogging,
	amenitiesReducer: amenitiesReducer,
	complaintsReducer: complaintsReducer
});

export default reducers;
