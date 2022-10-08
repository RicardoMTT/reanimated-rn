import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../../theme/appTheme';
import {useNavigation} from '@react-navigation/core';
export const Pagina2Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola',
      headerBackTitle: 'atras',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 2</Text>
      <Button
        title="Ir pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
