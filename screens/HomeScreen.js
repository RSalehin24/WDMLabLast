import { useNavigation } from '@react-navigation/core'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '../firebase'

const HomeScreen = () => {

  const navigation = useNavigation();
  const user = auth.currentUser;

  const handleLogout = () =>{
    auth
    .signOut()
    .then(()=>{
      navigation.replace('Login');
    })
    .catch((error) => alert(error.message));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{user?.email}</Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText:{
    color: '#0782f9',
    fontSize: 20,
    fontWeight: '700',
  },
  button:{
    backgroundColor:"#0782f9",
    width: "60%",
    padding:15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText:{
      color: 'white',
      fontSize: 15,
      fontWeight: '700',
  },
})