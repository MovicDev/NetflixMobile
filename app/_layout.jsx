import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'


const MainRoot = () => {
  return (
    <Stack screenOptions={{headerShown: false, headerBackButtonDisplayMode:'minimal'}}>
      <Stack.Screen name="(unboarding)" options={{headerShown: false}} />
      <Stack.Screen name="(pages)" options={{headerShown: false}}/>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  )
}

export default MainRoot

const styles = StyleSheet.create({})