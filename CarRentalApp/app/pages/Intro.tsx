import {Text, View} from 'react-native';
import { Button } from 'react-native';
import { useRouter } from 'expo-router';
export default function Intro() {
    const router = useRouter();
    const goToLogin = () => {
        console.log("Navigating to Login");
        router.push('/pages/Login');
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