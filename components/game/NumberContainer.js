import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppColors from '../../constants/AppColors'

export default function NumberContainer({children}) {
  return (
    <View style={styles.container} >
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: AppColors.accent500,
        padding: 24,
        margin:24,
        borderRadius: 8,
        alignItems:'center',
        justifyContent: 'center'
    },
    numberText:{
        color: AppColors.accent500,
        fontSize:60,
        fontFamily: 'open-sans-bold',
    }
})