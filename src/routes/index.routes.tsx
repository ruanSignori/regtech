import { useAuth } from "@hooks/useAuth"
import NavigationContainer from "@react-navigation/native/src/NavigationContainer"
import { StackRoutes } from "@routes/stack.routes"
import { UserRoutes } from "@routes/user.routes"
import { useEffect } from "react";

export function Routes() {
  const { user } = useAuth();

  useEffect(() => {
    console.log(typeof user, '2')
  }, [])

  useEffect(() => {
    console.log(typeof user)
  }, [user])
  return (
    <NavigationContainer>
      {user ? (
        <StackRoutes />
      ) : (
        <UserRoutes />
      )}
    </NavigationContainer>
  )
}