import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

const UserContextProvider = ({ children, reducer, initialState }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };

UserContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
  reducer: PropTypes.string.isRequired,
  initialState: PropTypes.string.isRequired,
};
