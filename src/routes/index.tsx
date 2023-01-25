import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from '../config/RootNavigation'

export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Routes />
    </NavigationContainer>
  )
}
