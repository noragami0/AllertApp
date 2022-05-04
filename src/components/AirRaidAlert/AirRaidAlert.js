import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {AppFont} from '../../utils/res/fonts';
import {ColorR} from '../../utils/res/theme';
import GlobalStyles from '../../utils/res/globalStyles';

export default function AirRaidAlert({text}) {
    return (
        <View style={[GlobalStyles.buttonComponent, styles.button]}>
            <Text style={AppFont(24, 700, ColorR.BLACK)}>{text}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});