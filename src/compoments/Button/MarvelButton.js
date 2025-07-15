
import { StatusBar } from 'expo-status-bar';
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import {
    Image,
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

function MarvelButton({
    title,
    onPress,
    color = '#d1332a', // Marvel 紅
    borderRadius = 12, //圓角弧度
    fontSize = 18, //文字大小
    disabled = false, //disabled 時自動變灰色
}) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                { backgroundColor: color, borderRadius },
                disabled && styles.disabled
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <View style={styles.content}>
                {/*<FontAwesome5
                    name="female" size={20}
                    color="#fff"
                    style={{ marginRight: 8 }} />*/}
                <Image
                    source={require('../../img/marvel-logo.png')}
                    style={{ width: 50, height: 24, marginRight: 8 }}
                />
                <Text style={[styles.text, { fontFamily: 'Arial' }]}>{title.toUpperCase()}</Text>
            </View>

        </TouchableOpacity >
    );
}


const styles = StyleSheet.create({
    button: {
        paddingVertical: 14,
        paddingHorizontal: 28,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5, // Android 陰影
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        letterSpacing: 2,
    },
    disabled: {
        backgroundColor: '#999',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});



export default MarvelButton
