import {Actiontype}  from '../action-types';
import {Action}  from '../actions';

interface RepositoriesSate {
  loading: boolean;
  error: string | null;
  data: string[];
}

export const Reducer = (state: RepositoriesSate, action: Action
    
    ): RepositoriesSate => {
  switch (action.type) {
    case Actiontype.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case Actiontype.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case Actiontype.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
