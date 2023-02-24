import React, { createContext, Dispatch, useReducer } from 'react';

interface ProviderProps {
  children?: React.ReactNode;
}

export enum ActionTypes {
  UpdateCompanyName = 'UpdateCompanyName',
  UpdateAddress = 'UpdateAddress',
  UpdateServices = 'UpdateServices',
  UpdateMessage = 'UpdateMessage',
  UpdateCreatedAt = 'UpdateCreatedAt'
}

interface Action {
  type: ActionTypes;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

interface Address {
  address1: string;
  address2?: string;
  city: string;
  province: string;
}

interface Service {
  name: string;
  qty: number;
  unitPrice: number;
}

interface ContractFormType {
  companyName: string;
  address: Address;
  services: Service[];
  message: string;
  createdAt: Date;
}

const initialState: ContractFormType = {
  companyName: '',
  address: { address1: '', address2: '', city: '', province: '' } as Address,
  services: [{ name: '', qty: 1, unitPrice: 0 }],
  message: '',
  createdAt: new Date()
};

export const ContractFormState = createContext(initialState);
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ContractFormDispatch = React.createContext<Dispatch<Action>>(() => {});

const reducer = (state: ContractFormType, action: Action): ContractFormType => {
  switch (action.type) {
    case ActionTypes.UpdateCompanyName:
      return {
        ...state,
        companyName: action.data
      };
    case ActionTypes.UpdateAddress:
      return {
        ...state,
        address: action.data
      };

    default:
      return state;
  }
};

export const ContractFormStateProvider = ({ children }: ProviderProps) => {
  const [contractFormState, dispatch] = useReducer(reducer, initialState);

  return (
    <ContractFormState.Provider value={contractFormState}>
      <ContractFormDispatch.Provider value={dispatch}>
        {children}
      </ContractFormDispatch.Provider>
    </ContractFormState.Provider>
  );
};
