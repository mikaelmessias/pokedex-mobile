import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  logoSolo: {
    width: 250,
    height: 85,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  logo: {
    width: 150,
    height: 50,
    alignSelf: 'center',
  },
  fullHeaderContainer: {
    marginBottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0ff5d',
    borderBottomColor: '#333333',
    borderBottomWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#ff5d5d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 30,
    borderColor: '#333333',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: 8,
    color: 'white',
    fontFamily: 'Signika-Regular',
    fontSize: 14,
    fontWeight: '700',
  },
});
