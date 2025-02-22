import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const UnboradingRoot = () => {
  return (
    <Stack>
      <Stack.Screen name="firstSlide" component={firstSlide} />
    </Stack>
  )
}

export default UnboradingRoot

const styles = StyleSheet.create({})