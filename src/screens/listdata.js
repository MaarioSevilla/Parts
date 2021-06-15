// import React from 'react';
// import {TouchableOpacity, StyleSheet, Text} from 'react-native';

// const todos = ["tarea 1", "tarea 2", "tarea 3"];

// function ListData() {
//   return (
//     <view>
//         <Text>Lista</Text>
//         {/* {
//             todos.map( (todo)=>(
//                 <Text key={todo}>{todo}</Text>
//             ))
//         } */}
//     </view>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     // height: 50,
//     // width: 100,
//     backgroundColor:'red',
//     justifyContent:'center',
//     alignItems:'center',
//     paddingBottom:5,
//     paddingLeft:15,
//     borderRadius: 20,
//     paddingRight:15,
//     paddingTop:5,
//     margin:10,
//     borderRadius: 20,
//   },
//   title: {
//     fontSize:16,
//     color: 'white',
//     textAlign:'center',
//   },
// });

// export default ListData;

function HomeProfile({ navigation }) {
    //let userRedux = useSelector(state => state.reducerUsuario.usuario);
    const [data, setData] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleConfig, setModalVisibleConfig] = useState(false);
    const [ticket, setTicket] = useState(null);
    const [link, setlink] = useState(false);
  
    return (
      <View style={styles.main}>
        {/* safe area */}
        <View style={styles.safearea}></View>
        {/* end safe area */}
  
        {/* settings buttons */}
        <View style={styles.row}>
          <ButtonCircular
            onPress={() => {}}
            imges={require('../../util/assets/icons/edit.png')}
            styled={styleimport.btnsettings}
          />
          <ButtonCircular
            onPress={() => {}}
            imges={require('../../util/assets/icons/upload.png')}
            styled={styleimport.btnsettings}
          />
          <ButtonCircular
            onPress={() => setModalVisibleConfig(true)}
            imges={require('../../util/assets/icons/settings.png')}
            styled={styleimport.btnsettings}
          />
        </View>
        {/* end settings buttons */}
        <View style={styles.rowimgbtn}>
          <PicProfile/>
          <Button
              onPress={() => navigation.push('MyMeets')}
              text="My meets"
              styled="greenEmpty" />
          <Button
              onPress={() => navigation.push('Gamifications')}
              text="Gamifications"
              styled="greenEmpty" />
        </View>
        <View style={styles.contenedor}>
          <View style={styles.rowimgtxt}>
            <TextUi 
              text="Roberto Guzmán"
              styled="userName" />
            <ButtonCircular
              onPress={() => {}}
              imges={require('../../util/assets/icons/facebook.png')}
              styled={styleimport.btnsocialmedia} />
            <ButtonCircular
              onPress={() => {}}
              imges={require('../../util/assets/icons/instagram.png')}
              styled={styleimport.btnsocialmedia} />
          </View>
          <TextUi 
              text="I am an iOS/Android apps and web systems Developer in fintech. #EosFintechCo #OpenFinance2020 #Fintechthon #Finvero"
              styled="userDescription" />
        </View>
        <Button
              onPress={() => setModalVisible(true)}
              text="Link your order Number"
              styled="blueEmpty"/>
        <View style={styles.contenedor}>
          <Text>My interest</Text>
          <TextUi 
              text="Seller"
              styled="textLikeBtnGreen" />
          <Text>Score</Text>
        </View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
        <View style={styles.modalShandow}>
          <View style={styles.modalTicket}>
            <Text>Registra tu codigo</Text>
            <TouchableOpacity
              style={styles.btnModal}
              onPress={() => setModalVisible(false)}
            >
              <Text>Close modal</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>
        
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisibleConfig}
          onRequestClose={() => setModalVisibleConfig(false)}
        >
        <View style={styles.modalSettingsShandow}>
          <View style={styles.modalSettings}>
            <Text>Configuracion</Text>
            <ButtonCircular
              onPress={() => setModalVisibleConfig(false)}
              imges={require('../../../src/assets/icons/profile/profile.png')}
              styled={styleimport.btnsettingsWhite}
            />
            <TouchableOpacity
              style={styles.btnModal}
              onPress={() => {
                setModalVisibleConfig(false);
                navigation.push('ProfileStack');
              }}
            >
              <Text>Account .</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    safearea:{
      backgroundColor: 'white',
      width : '100%',
      height: 100,
    },
    main: {
      backgroundColor: '#F9F9FC',
      flex: 1,
      alignItems: 'center',
    },
    row:{
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '100%',
      paddingRight: 19,
    },
    rowimgbtn:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    contenedor:{
      width: '80%',
    },
    rowimgtxt:{
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center'
    },
    modalSettings:{
      backgroundColor:'#EFF1F6', 
      justifyContent: 'center', 
      alignItems:'center', 
      marginTop: heightPercentageToDP(10),
      height: '90%',
      borderTopLeftRadius:20,
      borderTopRightRadius: 20,
    },
    modalSettingsShandow:{
      backgroundColor:'rgba(150, 150, 150, 0.461)', 
    },
    modalTicket:{
      backgroundColor:'#F2F4F8', 
      justifyContent: 'center', 
      alignItems:'center', 
      height: '40%',
      width: '90%',
      borderRadius: 30,
    },
    modalShandow:{
      backgroundColor:'rgba(150, 150, 150, 0.461)', 
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      
    }
  });
  
  export default HomeProfile;