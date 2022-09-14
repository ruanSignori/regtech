import { useState, useEffect, createContext, ReactNode, useMemo } from "react";
import { 
  User, 
  auth, 
  UserCredential, 
  signInWithEmailAndPassword, 
  signInAnonymously,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword
} from "@services/firebase"
import { handleErrorSignInLogs } from '../logs/errorLogFirebase';
import { Alert } from "react-native";

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: User | null;
  signInWithEmail: (email_session: string, password: string) => Promise<void>;
  signInAnonymous: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  registerWithEmail: (email_session: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState(() => {
    const user = auth.currentUser;

    return user;
  });

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

  const registerWithEmail = async (email_session: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email_session, password)
      .then((userFirebase) => {

        const { user } = userFirebase

        setUser({...user})
      })
      .catch((error) => {
        const { code } = error;
        handleErrorSignInLogs(code as string);
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged(firebaseUser => {

      setUser(firebaseUser);
    });
  }, [])

  const dependenciesValue = useMemo(() => {
    return {
      user,
      signInWithEmail,
      signInAnonymous,
      resetPassword,
      registerWithEmail
    }
  }, [user])

  return <AuthContext.Provider value={dependenciesValue}>{children}</AuthContext.Provider>
}