import {StyleSheet} from 'react-native';

const size = 60;
export default StyleSheet.create({
      avatar: {                                                                                                                                                                                                        
        backgroundColor: 'black',
        borderRadius:  60 / 2,                                                                                                                                                                                    
        width: 60,                                                                                                                                                                                                   
        height: 60, 
        margin: 15,                                                                                                                                                                                                 
      },                                                                                                                                                                                                               
      badge: {                                                                                                                                                                                                         
         backgroundColor: 'red',                                                                                                                                                                                      
         width: 20,                                                                                                                                                                                                   
         height: 20,                                                                                                                                                                                                  
         left: 20,                                                                                                                                                                                                    
         top: 20,                                                                                                                                                                                                     
      },
    usera: {
      width: '100%',
      backgroundColor: '#FFFDF8',
      paddingTop: 10,
    //   alignItems: 'flex-end',
    },
    toi:{
        backgroundColor:'#FB0007',
        margin: 15,
        width: 69,
        height: 69,
        borderRadius:  69 / 2,
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        borderColor: 'blue', 
        borderWidth: 1,
    },
    imgi: {
        width: 60,
        height: 60,
        borderRadius:  size / 2,
        backgroundColor: '#FC767C',
        
    },
    imgism:{
        width: 10,
        height: 10,
        borderRadius:  10 / 2,
        
    },
});