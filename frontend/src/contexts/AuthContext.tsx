import * as authApi from '@/api/authApi';
import { UserType } from '@/constants/interfaces';
import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';

interface AuthContextType {
	user?: UserType;
	loading: boolean;
	login: ({ email, password }: authApi.loginType) => Promise<void>;
	signUp: ({ email, password, confirmPassword }: authApi.signUpType) => Promise<void>;
	logOut: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<UserType>();
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token)
			authApi
				.validate({ token })
				.then((res) => setUser(res.data))
				.catch(() => localStorage.removeItem('token'));
	}, []);

	const login = async ({ email, password }: authApi.loginType): Promise<void> => {
		setLoading(true);
		try {
			const res = await authApi.login({ email, password });
			localStorage.setItem('token', res.data.token);
			setUser(res.data);
		} finally {
			setLoading(false);
		}
	};

	const signUp = async ({ email, password, confirmPassword }: authApi.signUpType): Promise<void> => {
		setLoading(true);
		try {
			await authApi.signUp({ email, password, confirmPassword });
		} finally {
			setLoading(false);
		}
	};

	const logOut = (): void => {
		setUser(undefined);
		localStorage.removeItem('token');
	};

	const values = useMemo(
		() => ({
			user,
			loading,
			login,
			signUp,
			logOut,
		}),
		[user, loading]
	);

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
