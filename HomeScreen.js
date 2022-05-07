import React from 'react';
import  {View, Text, Button} from 'react-native';
import styles from './Styles';

function HomeScreen({navigation}) {
    return (
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <Text style={{fontSize: 100}}>Home</Text>
            <Button 
            style={{top: 100}}
            title="Menu" 
                onPress={()=>navigation.navigate("Menu")}
            />
        </View>
    );
}

export default HomeScreen;