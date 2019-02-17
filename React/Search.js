import React from 'react'
import { View, Button, TextInput, StyleSheet } from 'react-native'
import styles from './style'

class Search extends React.Component{
    render(){
        return (
            <View> 
                <TextInput style={styles.text_input}/>{/* <--- */}
                <Button title="Rechercher" onPress={()=>{}}/>
            </View>
        )
    }
}

export default Search