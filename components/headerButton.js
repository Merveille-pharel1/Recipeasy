import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

function HeaderButton({ label, icon, onPress }) {
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor="#4A1FB8"
            style={styles.buttonWrapper}
        >
            <View style={styles.button}>
                { label && <Text style={styles.buttonText}>{label}</Text> }
                { icon }
            </View>
        </TouchableHighlight>

    );
}

export function SignOutButton() {
    const navigation = useNavigation();
    return <HeaderButton label="Sign out" onPress={() => navigation.popToTop()} />;
}

export function BackButton() {
    const navigation = useNavigation();
    const icon = <Ionicons name="arrow-back" size={24} color="white" />
    return <HeaderButton icon={icon} onPress={() => navigation.goBack()} />;
}

const styles = StyleSheet.create({
    buttonWrapper: {
        borderRadius: 20,
        overflow: 'hidden',
        marginRight: 10
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: '#5B21D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.15)',
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,
        letterSpacing: 0.3,
    },
})