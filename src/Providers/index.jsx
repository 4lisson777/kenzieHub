import { ContextProvider } from '../Context/UserContext';

const Providers = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default Providers;
