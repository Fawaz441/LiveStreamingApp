import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View, Image } from 'react-native'
import { Input, PasswordInput } from '../components/FormInputs'
import { centers, FONTS, IMAGES, row } from '../constants'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { WebView } from 'react-native-webview';
import { BlueButton } from '../components/Buttons';





const Signup = () => {
    const {google,facebook} = IMAGES
    return (
        <ScrollView style={styles.wrapper} contentContainerStyle={{ alignItems: 'center' }}>
            <View style={{ ...centers, marginBottom: 30 }}>
                <Text style={{ ...FONTS.largeText, textAlign: 'center', marginBottom: 5 }}>Hey there</Text>
                <Text style={{ ...FONTS.h4 }}>Create an Account</Text>
            </View>
            <Input placeholder="First Name" icon="user" />
            <Input placeholder="Last Name" icon="user" />
            <Input placeholder="Email" icon="email" />
            <PasswordInput placeholder="Password" />
            <View style={{ ...row, alignItems: 'center', width: 315 }}>
                <BouncyCheckbox
                    size={16}
                    fillColor="#ADA4A5"
                    unfillColor="#fff"
                    iconStyle={{ borderColor: "#ADA4A5", borderRadius: 3, marginRight: 2 }}
                    onPress={(isChecked) => { console.log(isChecked) }}
                />
                <Text style={{ flexShrink: 1, lineHeight: 15, ...FONTS.caption, color: '#ADA4A5' }}>
                    By continuing you accept our <TouchableWithoutFeedback>
                        <Text style={{ textDecorationLine: "underline", textDecorationColor: "#ADA4A5" }}>Privacy Policy</Text>
                    </TouchableWithoutFeedback>
                    <Text> and </Text>
                    <TouchableWithoutFeedback>
                        <Text style={{ textDecorationLine: "underline", textDecorationColor: "#ADA4A5" }}>Term of Use</Text>
                    </TouchableWithoutFeedback>
                </Text>
            </View>
            <View style={{ marginTop: 147,...centers }}>
                <BlueButton
                    text="Register"
                    action={() => { console.log('clicked') }}
                />
                <View style={{marginTop:12,...row,alignItems:'center',}}>
                    <View style={styles.line}></View>
                    <Text style={{width:'14%',...FONTS.mediumText,textAlign:'center'}}>Or</Text>
                    <View style={styles.line}></View>
                </View>
                <View style={styles.authLogin}>
                    <View style={[styles.authLoginOption,{marginRight:30}]}>
                        <Image source={google} style={styles.authImage} resizeMode="contain"/>
                    </View>
                    <View style={styles.authLoginOption}>
                        <Image source={facebook} style={styles.authImage} resizeMode="contain"/>
                    </View>
                </View>
                <Text style={[styles.signupPrompt,{...FONTS.mediumText}]}>
                    Already have an account? <Text style={{color:'#C58BF2'}}>Login</Text>
                </Text>
            </View>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 30,
        paddingVertical: 40,
        flex: 1,
        backgroundColor: '#fff',
        
    },
    line:{
        borderWidth:1,
        borderColor:'#DDDADA',
        width:'43%',
        height:1,
        shadowColor:'#00000040',
        shadowOffset: {
            width: 5,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 40,
        elevation: 1,
    },
    authLogin:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    authLoginOption:{
        borderColor:'#DDDADA',
        borderWidth:0.8,
        borderRadius:14,
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center'
    },
    authImage:{
        height:20,
        width:20
    },
    signupPrompt:{
        marginBottom:100,
        marginTop:30,
        textAlign:'center',
        color:'#1D1617'
    }
})
// 

export default Signup