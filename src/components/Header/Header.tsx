import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {iHeaderProps} from './interfaces/iHeaderProps';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export const Header = (props: iHeaderProps) => {
  const {showBackButton, onBack} = props;

  const nav = useNavigation();

  const handlePress = () => {
    nav.navigate('GiuvanePage');
  };

  const getLogoSolo = () => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.logoSolo}
          source={require('../../assets/images/logo.png')}
        />
      </TouchableOpacity>
    );
  };

  const getLogoWithBackButton = () => {
    return (
      <View style={styles.fullHeaderContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />

        <TouchableOpacity onPress={onBack} style={styles.button}>
          <Icon name="arrow-left" size={12} color="#fff" />
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return showBackButton ? getLogoWithBackButton() : getLogoSolo();
};
