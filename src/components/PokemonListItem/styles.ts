import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
    borderColor: '#333333',
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pokemonCardImageContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  pokemonCardImage: {
    width: 150,
    height: 150,
  },
  pokemonBasicData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#333333',
    padding: 10,
  },
  pokemonName: {
    fontSize: 18,
    fontFamily: 'Signika-Regular',
    color: '#fff',
  },
});

const getSeparatorStyle = (index: number, backgroundColor: string) => {
  return {
    backgroundColor: backgroundColor,
    marginLeft: index % 2 !== 0 ? 10 : 0,
    marginRight: index % 2 === 0 ? 10 : 0,
  };
};

export default {...styles, getSeparatorStyle};
