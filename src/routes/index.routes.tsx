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
<<<<<<< HEAD
}
=======
}
>>>>>>> f1769a50413bb1f643b416aae7f4ff30ef9e9ef7
