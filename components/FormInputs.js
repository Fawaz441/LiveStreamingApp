import React,{useState} from 'react'
import { Text, View,StyleSheet, TextInput,Image, TouchableOpacity } from 'react-native'
import { centers } from '../constants'

const formIcons = {
    user:require('../assets/icons/user.png'),
    email:require('../assets/icons/email.png'),
    lock:require('../assets/icons/lock.png'),
    eye:require('../assets/icons/eye.png'),
    close_eye:require('../assets/icons/close-eye.png'),
}

export const Input = (props) => {
    return(
        <View style={styles.inputWrapper}>
            <Image source={formIcons[props.icon]} resizeMode="contain" style={styles.icon}/>
            <TextInput {...props} style={styles.input} placeholderTextColor="#ADA4A5" spellCheck={false} autoCorrect={false} underlineColorAndroid="transparent"/>
        </View>
    )
}

export const PasswordInput = (props) => {
    const [showPassword,setShowPassword] = useState(false)
    return(
        <View style={styles.inputWrapper}>
            <Image source={formIcons.lock} resizeMode="contain" style={styles.icon}/>
            <TextInput {...props} style={styles.input} placeholderTextColor="#ADA4A5" secureTextEntry={!showPassword}/>
            <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
            <Image source={showPassword?formIcons.close_eye:formIcons.eye} style={styles.icon} resizeMode="contain"/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputWrapper:{
        height:48,
        width:315,
        backgroundColor:'#F7F8F8',
        borderWidth:1,
        borderColor:'#F7F8F8',
        borderRadius:14,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15
    },
    icon:{
        width:18,height:18,
        marginRight:10
    },
    input:{
        fontFamily:"Rubik-Regular",
        flex:1,
        fontSize:16,
        color:'#000'
    }
})