import React, {useState} from 'react'
import { TouchableOpacity, TextInput, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//import { auth } from '../firebase'
const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState(''); 

    const auth = getAuth(); 
    const handleRegister = () => {
        console.log(email,"\n\n");
        console.log(password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch((error) => alert(error.message))
    }

   

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behaviour="padding"
    >
        <Text style={styles.titleText}>Login Or{'\n'}Register</Text>
        <View style={styles.inputContainer}>
            <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.input}
            />
            <TextInput
            placeholder="Password"
            onChangeText={(password) => setPassword(password)}
            style={styles.input}
            secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
            onPress={()=>{}}
            style={styles.button}
            >
            <Text style={styles.buttonText}>Login</Text>    
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleRegister}
            style={[styles.button, styles.buttonOutline]}
            >
            <Text style={styles.buttonOutlineText}>Register</Text>    
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    titleText:{
        color: '#0782f9',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 60,
    },
    inputContainer:{
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 5,
    },
    buttonContainer: {
        width: '60%',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button:{
        backgroundColor:"#0782f9",
        width: "100%",
        padding:15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: "#0782f9",
        borderWidth: 2,
    },
    buttonOutlineText: {
        color:  "#0782f9",
        fontSize: 15,
        fontWeight: '700',
    }
})