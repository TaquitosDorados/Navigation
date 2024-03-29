import React from 'react';
import {Button, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from'./Styles';

function Box ({children}) {
    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>{children}</Text>
        </View>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired
};

export default Box;