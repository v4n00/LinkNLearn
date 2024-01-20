import * as authApi from '@/api/authApi';
import { User } from '@/constants/interfaces';
import { ReactNode, createContext, useMemo, useState } from 'react';

interface AuthContextType {
	user?: User;
	loading: boolean;
	error?: unknown;
	login: ({ email, password }: authApi.loginType) => void;
	register: ({ email, password, repeatPassword }: authApi.registerType) => void;
	logOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User>();
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<unknown>('');
	// const [loadingInitial, setLoadingInitial] = useState<boolean>(true);

	// const location = useLocation();

	// useEffect(() => {
	//     if(error) setError(undefined);
	// }, [location.pathname]);

	// useEffect(() => {
	//     usersApi.getCurrentUser()
	//       .then((user) => setUser(user))
	//       .catch((_error) => {})
	//       .finally(() => setLoadingInitial(false));
	//   }, []);

	const login = ({ email, password }: authApi.loginType): void => {
		setLoading(true);
		authApi
			.login({ email, password })
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const register = ({ email, password, repeatPassword }: authApi.registerType): void => {
		setLoading(true);
		authApi
			.register({ email, password, repeatPassword })
			.then((res) => {
				setUser(res.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const logOut = (): void => {
		setUser(undefined);
	};

	const value = useMemo(
		() => ({
			user,
			loading,
			error,
			login,
			register,
			logOut,
		}),
		[user, loading, error]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
