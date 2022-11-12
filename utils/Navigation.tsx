import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export enum NavigationScreens {
    Splash = "splash",
    Tutorial = "tutorial",
    Game = "game",
}

export function navigate(name: NavigationScreens, params?: {}) {
    if (navigationRef.isReady()) {
        // @ts-ignore
        navigationRef.navigate(name, params);
    } else {
        console.log("Why not ready?")
    }


}

export function navigateBack() {
    navigationRef.goBack()
}