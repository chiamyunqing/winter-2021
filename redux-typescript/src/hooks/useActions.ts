import { useDispatch } from "react-redux"; //access to dispatch func as part f redux store
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
  //returns sth like {searchRepositories: dispatch(searchRepositories)}
};
