import React from 'react';
import  {View, Text, Button} from 'react-native';
import styles from './Styles';
import Box from "./Box";
import Row from "./Row";
import Column from "./Column";

function MenuScreen({navigation}){
    return (
    <View style={styles.container}>
            <Row>
            <Column>
                <Box>Tarea 1
                <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate("Details", {id: 1, description: "Lavar Ropa"})}/>
                </Box>
                <Box>Tarea 2
                <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate("Details", {id: 2, description: "Lavar Ropa"})}/>
                </Box>
                <Box>Tarea 3
                <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate("Details", {id: 3, description: "Lavar Ropa"})}/>
                </Box>
                <Box>Tarea 4
                <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate("Details", {id: 4, description: "Lavar Ropa"})}/>
                </Box>
            </Column>

            <Column>
            <Box>Tarea 5
                <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate("Details", {id: 5, description: "Lavar Ropa"})}/>
                </Box>
                <Box>Tarea 6
                <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate("Details", {id: 6, description: "Lavar Ropa"})}/>
                </Box>
                <Box>Tarea 7
                <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate("Details", {id: 7, description: "Lavar Ropa"})}/>
                </Box>
                <Box>Tarea 8
                <Button 
                title="Detalles" 
                onPress={()=>navigation.navigate("Details", {id: 8, description: "Lavar Ropa"})}/>
                </Box>
            </Column>
        </Row>

        <View style={styles.footer}>
            <Button 
                title="Atras" 
                onPress={()=>navigation.goBack()}
            />
            <Button title="Home" 
                onPress={()=>navigation.navigate("Home")}
            />
        </View>
    </View>
    );
}

export default MenuScreen;