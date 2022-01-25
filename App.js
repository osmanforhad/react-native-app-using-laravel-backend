import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

const App = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getAllStudent(){
      try {
        const students = await axios.get('http://10.0.2.2:8000/api/students')
        setStudents(students.data)
      } catch (error) {
        console.log(error);
      }
    }
    getAllStudent();
  }, [])

  return (
    <View style={styles.Container}>
      <FlatList 
      data={students} 
      renderItem={({item}) => 
      <Text style={{fontSize:26, padding:20}}>
        Name: {item.name}
       {"\n"}Email: {item.email}
       </Text>} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 200,
    paddingHorizontal: 15,
  }
});

export default App;
