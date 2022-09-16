import { useAuth } from "@hooks/useAuth"
import NavigationContainer from "@react-navigation/native/src/NavigationContainer"
import { StackRoutes } from "@routes/stack.routes"
import { UserRoutes } from "@routes/user.routes"

export function Routes() {
  const { user } = useAuth();
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

// exp://qs-ahp.ruansignori.regtech.exp.direct:80