import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {actionGetNews} from '../../saga/actions/actionsAny';
import {actionSendPeticion} from '../../saga/actions/actionPeticion';

function CounterScreen() {
  const dispatch = useDispatch();
  const user = 'wioke7xdmTV8oerafddpDRuRjPb2';

  useEffect(() => {
    //dispatch(actionGetNews());
    dispatch(actionSendPeticion(user));
  }, []);

  let userRedux = useSelector(state => state.reducerNews.newss);
  let reduxData = useSelector(state => state.reducerPeticion.resultado);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hola</Text>
      {console.log(reduxData)}
      {/* {console.log(userRedux)} */}

    </View>
  );
}

export default CounterScreen;
