import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#62ff5d',
  },
  pokemonDetails: {
    paddingHorizontal: 32,
  },
  pokemonCardImage: {
    width: 200,
    height: 200,
  },
  sectionTitle: {
    fontFamily: 'Signika-Regular',
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#666',
  },
  nameSection: {
    marginBottom: 24,
  },
  nameSectionContent: {
    fontFamily: 'Signika-SemiBold',
    fontSize: 48,
    color: '#333',
  },
  measuresSection: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  heightSection: {
    marginRight: 32,
  },
  weightSection: {},
  measuresSectionContent: {
    fontFamily: 'Signika-Regular',
    fontSize: 24,
    color: '#333',
  },
  typesSection: {
    marginBottom: 32,
  },
  typesListSection: {
    flexDirection: 'row',
    marginTop: 8,
  },
  typeCardTitle: {
    fontFamily: 'Signika-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
  statsSection: {
    marginBottom: 32,
  },
  statCardsContainer: {
    marginTop: 8,
  },
  statCardTitle: {},
  abilitiesContainer: {
    marginBottom: 32,
  },
  abilitiyTitle: {},
  effectTitle: {},
  effectContent: {},
});

const getPokemonImageContainer = (backgroundColor: string) => {
  return {
    padding: 10,
    alignItems: 'center',
    backgroundColor: backgroundColor,
    borderWidth: 1,
    borderColor: '#666',
    marginBottom: 32,
  };
};

const getTypeStyle = (backgroundColor: string) => {
  return {
    backgroundColor: backgroundColor,
    paddingVertical: 4,
    paddingHorizontal: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 8,
  };
};

const getStatCardStyles = (index: number) => {
  return {
    backgroundColor: '#545454',
    borderWidth: 1,
    borderColor: '#333',
    padding: 12,
    marginRight: 12,
    width: 85,
  };
};

const getStatCardTitleStyle = (color: string) => {
  return {
    fontFamily: 'Signika-SemiBold',
    fontSize: 14,
    color: color,
  };
};

const getStatCardContent = (color: string) => {
  return {
    fontFamily: 'Signika-SemiBold',
    fontSize: 22,
    color: color,
  };
};

export default {
  ...styles,
  getTypeStyle,
  getStatCardTitleStyle,
  getStatCardStyles,
  getStatCardContent,
  getPokemonImageContainer,
};
