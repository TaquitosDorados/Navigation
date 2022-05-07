import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import styles from './Styles';

function DetailScreen ({route, navigation}) {
    const {id,description} = route.params;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 80, fontWeight: 'bold', top: 50}}>Tarea {id}</Text>
                <Text style={{fontSize: 50, textAlign: 'center', top: 20,backgroundColor: '#98ee99'}}>Descripcion: {description}</Text>
                <View style={styles.footer}>
                <Button 
                    title="Atras" 
                    onPress={()=>navigation.goBack()}
                />
                <Button title="Home" 
                    onPress={()=>navigation.navigate("Home")}
                />
                </View>
                {/*<View style={styles.containerButton}>
                    <Button title="Tarea 1" 
                    color="#424242"
                    onPress={()=>navigation.push("Details", {id: 1, description: "Tarea 1"})}
                    />
                    <Button title="Tarea 2"
                    color="#424242" 
                    onPress={()=>navigation.push("Details", {id: 2, description: "Tarea 2"})}                    />
                    <Button title="Tarea 3" 
                    color="#424242"
                    onPress={()=>navigation.push("Details", {id: 3, description: "Tarea 3"})}                    />
                </View>

                <View style={styles.containerButton}>
                    <Button title="Atras" 
                    onPress={()=>navigation.goBack()}
                    />
                    <Button title="Home" 
                    onPress={()=>navigation.navigate("Home")}
                    />
                    <Button title="Ir a Otro Detalle" 
                    onPress={()=>navigation.push("Details", {id: 2, description: "Descripcion 2"})}
                    />
                </View>

                <Button
                    title="Inicio"
                    onPress={() => navigation.popToTop()}
                />*/}

            
        </View>
        );
}

/*const styles = StyleSheet.create({
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#98ee99',

        margin: 20,
        padding: 5,

        width: 300,
        height: 100,
    }
})*/

export default DetailScreen;