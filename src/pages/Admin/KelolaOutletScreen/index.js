import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  iconJam,
  iconOutlet,
  iconScooter,
} from '../../../assets/images';
import { HeaderBar } from '../../../components';
const MenuOutlet = ({title, screenName, navigation, icon}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 28,
        // borderWidth:1,
        paddingHorizontal: 28,
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#f6f6f6',
        borderRadius: 20,
        marginTop: 20,
      }}
      onPress={() => navigation.navigate(screenName)}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 36,
          width: '70%',
          color: '#000',
        }}>
        {title}
      </Text>
      <Image source={icon} />
    </TouchableOpacity>
  );
};

const KelolaOutlet = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeaderBar navigation={navigation} screenName='HomePage' title='Kelola Outlet' />
      <ScrollView>
        <MenuOutlet icon={iconOutlet} title="Profile Outlet" navigation={navigation} screenName='EditProfileOutlet'/>
        <MenuOutlet icon={iconJam} title="Jam Operasional" />
        <MenuOutlet icon={iconScooter} title="Tarif Ongkir" />
      </ScrollView>
    </View>
  );
};

export default KelolaOutlet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
