import { ContextProvider } from '../Context/UserContext';
import { ReactNode } from 'react';

interface IProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: IProvidersProps) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default Providers;
