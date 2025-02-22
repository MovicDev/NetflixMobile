import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const firstSlide = () => {
  return (
    <View>
      <Text>firstSlide</Text>
      <TouchableOpacity onPress={() => router.push('')}>
        SIGN IN
      </TouchableOpacity>
    </View>
  )
}

export default firstSlide

const styles = StyleSheet.create({})