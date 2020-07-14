
export interface UserState {
  isLoading?: boolean;
  error?: any;
  user
}

export const initialState: UserState = {
  isLoading: false,
  error: null,
  user: undefined
};
