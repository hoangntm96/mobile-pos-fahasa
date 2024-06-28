import React, { useCallback } from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  Dimensions,
  Image
} from 'react-native'
export const backIcon = (require('./common/image/back-icon.png'))

const MobilePos = ({ navigation }) => {
  const width = Dimensions.get('window').width;
  return (
    <View style={{ flex: 1 }}>
    <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={backIcon}
              style={{
                width: (24 * width) / 375,
                height: (24 * width) / 375,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        <Text>Hello World!!v1.1.1.1</Text>
    </View>
  )
}


module.exports = MobilePos