import {Text, View} from 'react-native';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';
export default function Intro() {
    const router = useRouter();
    const goToLogin = () => {
        console.log("Navigating to Login");
        router.push('/pages/Login');
    };
    const goToRegister = () => {
        console.log("Navigating to Register");
        router.push('/pages/Register');
    };
    return (
        <View>
            <Text>Intro</Text>
            <Button
                title = "Go to Login"
                onPress={goToLogin}
            />
            <Button
                title = "Go to Register"
                onPress={goToRegister}
            />
        </View>
    );
}