import {Text, View} from 'react-native';
import { Button } from 'react-native';
export default function Intro() {
    const goToLogin = () => {
        console.log("Navigating to Login");
    };
    return (
        <View>
            <Text>Intro</Text>
            <Button
                title = "Go to Login"
                onPress={goToLogin}
            />
        </View>
    );
}