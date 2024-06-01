import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headersectionContainer}>
            <View style={styles.headersectionHeaderContainer}>
            <View style={styles.headersectionTitleContainer}>
              <Text style={styles.headersectionTitle}>Hello, Devs!</Text>
            </View>
            <Text style={styles.headersectionDescription}>14 tasks today</Text>
            </View>
            <View style={[styles.headersectionImageContainer, {borderRadius: 50}]}>
              <Image source={require('./assets/person.png')} style={styles.headersectionImage} />
            </View>
          </View>
        <View style={styles.searchBarContainer}>
          <View style={styles.searchBar}>
            <TextInput></TextInput>
          </View>
        </View>
        <View style={styles.taskContainer}>
          <View style={styles.taskHeaderContainer}>
            {/* <Text style={styles.taskHeader}>Ongoing Tasks</Text> */}
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#F7F0E8',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  headersectionTitleContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headersectionContainer: {
    marginTop: 60,
    paddingHorizontal: 24,
    borderColor: 'black',
    borderCurve: 'round',
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#F7F0E8',
    width: "90%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headersectionHeaderContainer:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: 150,
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
    textAlign: 'left',
  },
  headersectionImage: {
      width: 50,
      height: 50,
      alignItems: 'center',
      
      textAlign: 'right',
    },
    headersectionImageContainer: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor:'white',
      overflow: 'hidden',
      marginLeft: 24,
      width: 50,
      height: 50,
      alignItems: 'center',
      
      textAlign: 'right',
    },
});