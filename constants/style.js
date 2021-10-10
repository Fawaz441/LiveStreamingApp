
import { Dimensions } from "react-native"
const {width,height} = Dimensions.get('window')

export const SIZES = {
    h1:26,
    h2:24,
    h3:22,
    h4:20,
    subtitle:18,
    largeText:16,
    mediumText:14,
    smallText:12,
    caption:10,
    width,
    height
}


export const FONTS = {
    h1:{
        fontFamily:"Rubik-Bold",
        fontSize:26
    },
    h2:{
        fontFamily:"Rubik-Bold",
        fontSize:SIZES.h2
    },
    h3:{
        fontFamily:"Rubik-Medium",
        fontSize:SIZES.h3
    },
    h4:{
        fontFamily:"Rubik-Bold",
        fontSize:SIZES.h4
    },
    subtitle:{
        fontFamily:"Rubik-Regular",
        fontSize:SIZES.subtitle
    },
    largeText:{
        fontFamily:"Rubik-Regular",
        fontSize:SIZES.largeText
    },
    mediumText:{
        fontFamily:"Rubik-Regular",
        fontSize:SIZES.mediumText
    },
    smallText:{
        fontFamily:"Rubik-Regular",
        fontSize:SIZES.smallText
    },
    caption:{
        fontFamily:"Rubik-Regular",
        fontSize:SIZES.caption
    },
    poppins:{
        fontFamily:"Poppins-Regular",
        fontSize:SIZES.subtitle
    },
    poppinsBold:{
        fontFamily:"Poppins-Bold"
    }

}

export const GRADIENTS = {
    blue:['#9DCEFF','#92A3FD'],
    purple:['#C58BF2','#EEA4CE']
    }


export const COLORS = {
    lightBlue:'#92A3FD',
    darkBlue:'#9DCEFF',
    lightPurple:'#C58BF2',
    darkPurple:'#EEA4CE',
    black:'#1D1617',
    darkBrown:'#7B6F72',
    lightBrown:'#ADA4A5',
    lighterBrown:'#DDDADA',
    white:'#FFFFFF',
    border:'#F7F8F8',
    gray:'#7B6F72'
}

export const SHADOWS = {
    blue:{
        shadowColor:'#92A3FD',
        shadowOffset: {
            width: 10,
            height: 10,
        },
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation: 3,
    },
    
    purple:{
        shadowColor:'#C58BF24D',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowRadius:22,
        shadowOpacity:2,
        elevation: 1,
    },
    white:{
        shadowColor:'#1D161712',
        shadowOffset:{
            width:0,
            height:10
        },
        shadowRadius:40,
        shadowOpacity:2,
        elevation: 1,
    },

}

export const bgWhite = {backgroundColor:'#fff'}
export const centers = {alignItems:'center',justifyContent:'center'}
export const row = {flexDirection:'row'}
export const relative = {position:'relative'}
export const absolute = {position:'absolute',left:0}


export const IMAGES = {
    logo1:require('../assets/logos/logo1.png'),
    google:require('../assets/images/google.png'),
    facebook:require('../assets/images/facebook.png')
}


