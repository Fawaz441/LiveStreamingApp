import React, { useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, ScrollView, Animated, StyleSheet, TouchableOpacity } from 'react-native'
import { bgWhite, COLORS, FONTS, relative, GRADIENTS, SHADOWS, SIZES, text, row, IMAGES, centers, absolute, onboarding1Svg } from '../constants'
// import Svg, { Defs, Path, LinearGradient, Stop, SvgCss } from 'react-native-svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GirlWithPhone, ManRunning, ManWithGroceries, MeditatingGirl, PageButton } from '../components/OnboardingImages';
import { BlueButton } from '../components/Buttons';
import Signup from './Signup';


const { logo1 } = IMAGES
const Stack = createNativeStackNavigator();

const PreOnboarding = ({ navigation }) => {
    {/* first screen */ }
    return (<View style={{ ...bgWhite, ...centers, flex: 1, width: SIZES.width }}>
        <Image source={logo1} resizeMode="contain" style={{ height: 40, width: 167, marginBottom: 13 }} />
        <Text style={{ color: COLORS.gray, ...FONTS.poppins }}>Everybody can Train</Text>
        <View style={{ ...absolute, bottom: 40, right: 0, ...centers, paddingHorizontal: 30 }}>
            <BlueButton text="Get Started" action={() => navigation.navigate("OnboardingProcess")} />
        </View>
    </View>
    )
}

const OnboardingProcess = ({ navigation }) => {
    const [page, setPage] = useState(0)

    const handleScroll = event => {
        let currentPage = Math.round(Number((event.nativeEvent.contentOffset.x / SIZES.width).toFixed(2)))
        setPage(currentPage)
    }

    const pageButtons = [
        { page: 0 },
        { page: 1 },
        { page: 2 },
        { page: 3 },
    ]

    const handlePageScroll = () => {
        if (page == 3) {
            navigation.navigate("Signup")
        }
        else {
            this.scroll.scrollTo({ x: SIZES.width * (page + 1) })
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <ScrollView horizontal pagingEnabled style={{ flex: 1 }} showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={15}
                    onScroll={handleScroll}
                    ref={(node) => this.scroll = node}
                >
                    {/* second screen */}
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ ...bgWhite, width: SIZES.width, flex: 1 }}>
                            <View style={{ width: SIZES.width, aspectRatio: 375 / 406 }}>
                                <GirlWithPhone />
                            </View>

                            <View style={styles.text}>
                                <View>
                                    <Text style={styles.header}>Track your Goal</Text>
                                    <Text style={styles.subtext}>
                                        Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    {/* third screen */}
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ ...bgWhite, flex: 1, width: SIZES.width }}>
                            <View style={{ width: SIZES.width, aspectRatio: 375 / 406 }}>
                                <ManRunning />
                            </View>

                            <View style={styles.text}>
                                <View>
                                    <Text style={styles.header}>Get Burn</Text>
                                    <Text style={styles.subtext}>
                                        Let’s keep burning, to achive yours goals, it hurts only temporarily, if you give up now you will be in pain forever
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    {/* fourth screen */}
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ ...bgWhite, flex: 1, width: SIZES.width }}>
                            <View style={{ width: SIZES.width, aspectRatio: 375 / 437 }}>
                                <ManWithGroceries />
                            </View>

                            <View style={styles.text}>
                                <View>
                                    <Text style={styles.header}>Eat Well</Text>
                                    <Text style={styles.subtext}>
                                        Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    {/* fifth screen */}
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                        <View style={{ ...bgWhite, flex: 1, width: SIZES.width }}>
                            <View style={{ width: SIZES.width, aspectRatio: 375 / 422 }}>
                                <MeditatingGirl />
                            </View>

                            <View style={styles.text}>
                                <View>
                                    <Text style={styles.header}>Improve Sleep  Quality</Text>
                                    <Text style={styles.subtext}>
                                        Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ScrollView>
            </View>
            {pageButtons.map((pageButton, index) => (
                <View key={index} style={{ ...absolute, flex: 1, bottom: 40, width: SIZES.width, zIndex: pageButton.page === page ? 4 : 0, opacity: pageButton.page === page ? 1 : 0 }}>
                    <TouchableWithoutFeedback onPress={handlePageScroll} style={{ zIndex: pageButton.page === page ? 4 : 0, opacity: pageButton.page === page ? 1 : 0 }}
                        >
                        <View style={{ marginLeft: 'auto', marginRight: 40 }}>
                            <PageButton page={pageButton.page} />
                            {/* <Image source={pageButton.image} resizeMode="contain" /> */}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            ))}
        </View>
    )
}

const Onboarding = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="PreOnboarding" component={PreOnboarding} />
        <Stack.Screen name="OnboardingProcess" component={OnboardingProcess} />
    </Stack.Navigator>
)


const styles = StyleSheet.create({
    text: { paddingHorizontal: 30, marginTop: 64, alignItems: 'center' },
    header: { ...FONTS.h2, marginBottom: 15 },
    subtext: { color: COLORS.gray, ...FONTS.mediumText, lineHeight: 24, marginBottom: 100 },
})


export default Onboarding