import { useState, useEffect, createContext, ReactNode, useMemo } from "react";
import { User, auth, UserCredential, signInWithEmailAndPassword, signInAnonymously,sendPasswordResetEmail } from "@services/firebase"
import { handleErrorSignInLogs } from '../logs/errorLogFirebase';
import { Alert } from "react-native";
import ENV from '../../configFirebase';

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | null;
  isAdmin: boolean;
  signInWithEmail: (email_session: string, password: string) => Promise<void>;
  signInAnonymous: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState(() => {
    const user = auth.currentUser;

    return user;
  });
  const [isAdmin, setIsAdmin] = useState(false)

  const signInWithEmail = async (email_session: string, password: string) => {
    try {
      const { user }: UserCredential = await signInWithEmailAndPassword(
        auth,
        email_session,
        password
      );

      setUser({...user})

    } catch (error: any) {
      const { code } = error;
      handleErrorSignInLogs(code as string)
    }
  }

  const signInAnonymous = async () => {
    const { user } = await signInAnonymously(auth);

    if (!user.isAnonymous) return;

    setUser({...user})
  }

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email)
    .then(() => {
      Alert.alert('Um e-mail para redefir a senha foi enviado!')
    })
    .catch((error) => {
      throw new Error(error.code);
    });
  }

  useEffect(() => {
    auth.onAuthStateChanged(firebaseUser => {

      if (firebaseUser?.email === ENV.APP_ENV_CREDENTIALADMIN) {
        setIsAdmin(true)
      }

      setUser(firebaseUser);
    });
  }, [])

  const dependenciesValue = useMemo(() => {
    return {
      user,
      isAdmin,
      signInWithEmail,
      signInAnonymous,
      resetPassword,
    }
  }, [user])

  return <AuthContext.Provider value={dependenciesValue}>{children}</AuthContext.Provider>
}