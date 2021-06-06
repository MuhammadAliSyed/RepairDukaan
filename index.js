import { registerRootComponent } from 'expo';
import { AppRegistry } from 'react-native';
import App from './App';

//import store from "./redux/storeConfig"

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
/*export default function main() {
    return (
        <Provider store = {store}>
            <App />
        </Provider>
    )
}*/
registerRootComponent(App)
