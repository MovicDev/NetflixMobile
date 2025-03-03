import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const UnboradingRoot = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index"/>
    </Stack>
  )
}

export default UnboradingRoot

const styles = StyleSheet.create({})