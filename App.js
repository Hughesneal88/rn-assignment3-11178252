import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { SearchBar } from './components/searchBar.js';
import { Categories } from './components/categories.js';
import { Header } from './components/header.js';
import { Tasks } from './components/Tasks.js';

export default function App() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const taskData = [
    {
    id: 1,
    title: 'Mobile development',
  },
  {
    id: 2,
    title: 'Web development',
  },
  {
    id: 3,
    title: 'Push ups',
  },
  {
    id: 4,
    title: 'UI/UX Design',
  },
  {
    id: 5,
      title: 'Yoga',
  },
  {
    id: 6,
    title: 'Yoga',
  },
  {
    id: 7,
    title: 'Yoga',
  },
  {
    id: 8,
    title: 'Yoga',
  },
  {
    id: 9,
    title: 'Yoga',
  },
  {
    id: 10,
    title: 'Yoga',
  },
  {
    id: 11,
    title: 'Yoga',
  },
  {
    id: 12,
    title: 'Yoga',
  },
  {
    id: 13,
    title: 'Yoga',
  },
  {
    id: 14,
    title: 'Yoga',
  },
  {
    id: 15,
    title: 'Yoga',
  }
  ];
  const categoriesData = [
    {
      id: 1,
      title: 'Exercise',
      tasknum: '14',
      image: require('./assets/exercise.png'),
    },
    {
      id: 2,
      title: 'Study',
      tasknum: '14',
      image: require('./assets/study.png'),
    },
    {
      id: 3,
      title: 'Eating',
      image: "",
      tasknum: '14',
    },
    {
      id: 4,
      title: 'Drinking',
      image: "",
      tasknum: '14',
    },
    {
      id: 5,
      title: 'Sleeping',
      image: "",
      tasknum: '14',
    },
    {
      id: 6,
      title: 'Weeding',
      image: "",
      tasknum: '14',
    },
    {
      id: 7,
      title: 'Jumping',
      image: "",
      tasknum: '14',
    },
    {
      id: 8,
      title: 'Excercising',
      image: "",
      tasknum: '14',
    },
    {
      id: 9,
      title: 'Eating',
      image: "",
      tasknum: '14',
    }
  ];
  return (
    <>
    <SafeAreaView style={{backgroundColor: '#FBF9F7'}}>
    <StatusBar style="auto" />
      <View style={styles.container}>
        <Header />
      </View>
      <View style={styles.searchBarContainer}>
        <SearchBar
            searchPhrase={searchPhrase}
            setSearchPhrase={setSearchPhrase}
            clicked={clicked}
            setClicked={setClicked}
        />
        <TouchableOpacity>
          <Image source={require('./assets/Filter.png')} style={styles.searchFilter} />
        </TouchableOpacity>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Categories</Text>
        <View style={styles.categoriesContainer}>
          <Categories data={categoriesData} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Ongoing Tasks</Text>
        <View style={styles.tasksContainer}>
          <Tasks data={taskData} />
        </View>
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginTop:10,
    padding:10,
    marginLeft: 20
  },
  categoriesContainer: {
    marginTop: 0,
  },
  tasksContainer: {
    // marginBottom: 10,
    paddingBottom:50
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FBF9F7',
    width: "95%",
    alignItems: 'center',
  },
  searchFilter:{
    width: 50,
    height: 48,
  },
  container: {
    margin: 10,
    marginBottom: 10,
    paddingTop: 70,
    paddingBottom:20,
    backgroundColor: '#FBF9F7',
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
  },
});