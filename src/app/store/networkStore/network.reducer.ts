import {NetworkStateInterface} from '../../interfaces/store/network-state-interface';
import {NetworkActionType, TypeNetworkActions} from './network.action';
import {networkState} from './network.state';

export function networkReducer(state: NetworkStateInterface = networkState, action: TypeNetworkActions) {
  switch (action.type) {
    case NetworkActionType.UPDATE_NETWORK:
      return {
        ...state,
        online: action.payload
      };
    default:
      return state;

  }

}
