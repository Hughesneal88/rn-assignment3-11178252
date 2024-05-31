import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headersectionContainer}>
            <View style={styles.headersectionTitleContainer}>
              <Text style={styles.headersectionTitle}>Hello, Devs!</Text>
            </View>
            <Image source={require('./assets/person.png')} style={styles.headersectionImage} />
          </View>
          <Text style={styles.headersectionDescription}>14 tasks today</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  headersectionTitleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',

  },
  headersectionContainer: {
    paddingHorizontal: 24,
    borderColor: 'black',
    borderCurve: 'round',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'white',
    width: "90%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headersectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    flex: 1,
    textAlign: 'left',
  },
  headersectionDescription: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '400',
    alignItems: 'left',
  },
  headersectionImage: {
      width: 50,
      height: 50,
      alignItems: 'center',
      
      textAlign: 'right',
    },
});