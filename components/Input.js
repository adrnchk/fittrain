import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default function Input({style,...props}) {
    return (
            <TextInput {...props} style={[style,styles.Input]}/>
        
    )
}

const styles = StyleSheet.create({
    Input:{
        backgroundColor:"#E6E6FA",
        width:"90%",
        
        marginBottom:8,
        padding:20,
        borderRadius:20,
        fontSize:20

    }
})
