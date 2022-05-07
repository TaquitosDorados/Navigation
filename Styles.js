import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#66bb6a'
    },
  
      box: {
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'stretch',
          borderWidth: 1,
          backgroundColor: 'lightgray',
          margin: 50,
      },
  
      boxText: {
          color: "darkslategray",
          fontWeight: "bold",
          textAlign: "center",
      },
  
      row: {
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignSelf: 'stretch',
      },
  
      column: {
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignSelf: 'stretch',
      },

      footer: {
        justifyContent: 'space-around',
        flex: 0,
        backgroundColor: "#424242",
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        width: 380,
        height: 50,
      },
})