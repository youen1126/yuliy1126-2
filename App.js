import { StatusBar } from 'expo-status-bar';
import MarvelButton from './src/compoments/Button/MarvelButton'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {




  return (
    <View style={styles.container}>
      <Text style={styles.defaultText}>測試自製的元件MarvelButton</Text>
      <MarvelButton
        title="開始遊玩"
        onPress={() => console.log('啟動中...')}
        disabled={false} //目前按鈕可供用戶點擊，true時會鎖住
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#2f363f',
  },
  defaultText: {
    fontSize: 15,
    fontFamily: 'Verdana', //字型設定
    color: '#fff', //文字顏色
    paddingVertical: 17, //垂直間距
  },
})

