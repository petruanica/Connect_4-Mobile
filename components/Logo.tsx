import React from 'react';
import {Image, StyleSheet, View} from 'react-native'

export type LogoProps = {
    flex: number
    top: string | number
}

export default function Logo(props: LogoProps) {
    return (
        <View style={[styles.logoWrapper, {flex: props.flex}]}>
            <View style={{flex: 1, top: props.top}}>
                <Image source={require("../assets/logoconnect4.png")} style={styles.connect4Image}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    connect4Image: {
        flex: 1,
        resizeMode: "contain",
        width: undefined,
        height: undefined,
    },
    logoWrapper: {
        // flex: 0.4,
        padding: 20,
        width: '100%',
    },
});