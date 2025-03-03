import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsRoot = () => {
  return (
      <Tabs
        screenOptions={{
          headerShown: false,
          headerBackButtonDisplayMode: "minimal",
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#444", 
          tabBarStyle: { backgroundColor: "#222",borderColor:'#000'},
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            tabBarLabel: ({ color }) => (
              <Text style={[styles.tabLabel, { color }]}>Home</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: "Search",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" color={color} size={size} />
            ),
            tabBarLabel: ({ color }) => (
              <Text style={[styles.tabLabel, { color }]}>Search</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="video"
          options={{
            title: "Video",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="videocam" color={color} size={size} />
            ),
            tabBarLabel: ({ color }) => (
              <Text style={[styles.tabLabel, { color }]}>Video</Text>
            ),
          }}
        />
        <Tabs.Screen
          name="menu"
          options={{
            title: "Menu",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="menu" color={color} size={size} />
            ),
            tabBarLabel: ({ color }) => (
              <Text style={[styles.tabLabel, { color }]}>Menu</Text>
            ),
          }}
        />
      </Tabs>
  )
}

export default TabsRoot

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  tabLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
})