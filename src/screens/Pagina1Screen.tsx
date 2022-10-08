import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../../theme/appTheme';
interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Screen 1</Text>
      <Button
        title="Ir pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text>Navegar con argumentos</Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: '1',
              nombre: 'Pedro',
            })
          }>
          <Text style={styles.botonGrandeText}>Pedrosss</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botonGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: '2',
              nombre: 'Jose',
            })
          }>
          <Text style={styles.botonGrandeText}>Jose</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ProductsScreen')}>
        <Text>Productos</Text>
      </TouchableOpacity>
      {/* <Button
        title="Ir persona"
        onPress={() => navigation.navigate('PersonaScreen')}
      /> */}
    </View>
  );
};
