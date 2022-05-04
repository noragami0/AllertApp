import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ImageStyles} from '../../utils/res/stylesForImages';
import {DANGER_LEVEL} from '../../utils/constants';

function AttentionIcon({dangerLevel}) {
    const getImageSrc = () => {
        switch (dangerLevel) {
            case DANGER_LEVEL.HIGH:
                return require('../../assets/images/red-attention.png');
            case DANGER_LEVEL.MEDIUM:
                return require('../../assets/images/yellow-attention.png');
            default:
                return null;
        }
    };
    return (
        <View style={styles.images}>
            {dangerLevel === DANGER_LEVEL.NO_DANGER
                ? null
                : <Image source={getImageSrc()} style={ImageStyles(95, 95)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    images: {
        alignItems: 'center',
    },
});

export default AttentionIcon;