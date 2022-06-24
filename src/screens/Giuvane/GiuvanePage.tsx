import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../../components/Header/Header';
import styles from './styles';

export const GiuvanePage = () => {
  const nav = useNavigation();

  const handleBackPress = () => {
    if (nav.canGoBack()) {
      nav.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton onBack={handleBackPress} />

      <View style={styles.imageContainer}>
        <Text style={styles.imageLegend}>Giuvane uses teaching...</Text>
        <Text style={styles.imageLegend2}>But it's not very effective</Text>

        <Image
          style={styles.logo}
          source={require('../../assets/images/Giuvane.jpg')}
        />
      </View>
    </SafeAreaView>
  );
};
