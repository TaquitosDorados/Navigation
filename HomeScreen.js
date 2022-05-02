import React from 'react';
import  {View, Text, Button} from 'react-native';
import styles from './Styles';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button title="Ir a Detalle" 
                onPress={()=>navigation.navigate("Details")}
            />
        </View>
    );
}

export default HomeScreen;