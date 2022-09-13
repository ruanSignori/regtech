import { useAuth } from "@hooks/useAuth"
import NavigationContainer from "@react-navigation/native/src/NavigationContainer"
import { StackRoutes } from "@routes/stack.routes"
import { UserRoutes } from "@routes/user.routes"

export function Routes() {
  const { user } = useAuth();
  console.log(user)
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