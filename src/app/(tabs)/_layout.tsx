import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useCustomTema } from '@/context/ThemeContext/TemaContext'

export default function TabScreens() {
    const { theme } = useCustomTema()
    return (
        <Tabs
            screenOptions={{
                tabBarLabelStyle:{
                    color:theme.primaria
                },
                tabBarStyle: {
                    height:60,
                    backgroundColor: theme.background,
                    paddingBottom:15,
                    borderWidth: 0,
                    borderColor:'transparent',
                    elevation:5
                },
                headerShown:false
            }}
        >
            <Tabs.Screen name="index"
                options={{
                    tabBarInactiveTintColor: theme.secundaria,
                    tabBarActiveTintColor: theme.principal,
                    tabBarIcon: ({ color, focused }) => {
                        return <Ionicons name='home-sharp' color={color} size={18} />
                    }
                }}
            />
            <Tabs.Screen name="search"
                options={{
                    tabBarInactiveTintColor: theme.secundaria,
                    tabBarActiveTintColor: theme.principal,
                    tabBarIcon: ({ color, focused }) => {
                        return <Ionicons
                            name='search'
                            color={color}
                            size={18}
                        />
                    },
                }}
            />
            <Tabs.Screen name="add"
                options={{
                    tabBarLabel:"",
                    tabBarInactiveTintColor: theme.secundaria,
                    tabBarActiveTintColor: theme.principal,
                    tabBarIcon: ({ color, focused }) => {
                        return <Ionicons
                            name='add'
                            color={color}
                            size={30}
                            style={{
                                position:'absolute',
                                top: -10,
                                backgroundColor:theme.principal,
                                padding:10,
                                borderRadius:25
                            }}
                        />
                    },
                }}
            />
            <Tabs.Screen name="history"
                options={{
                    tabBarInactiveTintColor: theme.secundaria,
                    tabBarActiveTintColor: theme.principal,
                    tabBarIcon: ({ color, focused }) => {
                        return <Ionicons name='time' color={color} size={18} />
                    }
                }}
            />
            <Tabs.Screen name="settings"
                options={{
                    tabBarInactiveTintColor: theme.secundaria,
                    tabBarActiveTintColor: theme.principal,
                    tabBarIcon: ({ color, focused }) => {
                        return <Ionicons name='settings' color={color} size={18} />
                    },

                }}
            />
        </Tabs>
    )
}
