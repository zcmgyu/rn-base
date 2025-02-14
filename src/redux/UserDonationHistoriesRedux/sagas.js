import UserDonationHistoriesActions, { MODEL, IGNORE_ACTIONS } from './actions';
import rootCRUDSaga from '../crudCreator/saga';
// use IGNORE_SAGAS to replace "saga" or ignore "saga"
//IGNORE_SAGAS = ['GET_ALL', 'GET_BY_ID', 'DELETE', 'EDIT', 'CREATE'];

 const IGNORE_SAGAS = IGNORE_ACTIONS;

export default [...rootCRUDSaga(MODEL, IGNORE_SAGAS, UserDonationHistoriesActions)];
