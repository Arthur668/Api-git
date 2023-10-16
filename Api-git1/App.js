import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
const [repositories, setRepositories] = useState([])

useEffect(()=> {
fetch('https://api.github.com/users/Arthur668/repos')
.then(Response => Response.json())
.then(data => setRepositories(data))
}, [])

  return (
    <View style={styles.container}>
     <View style={styles.lista}>
     <ul>
      {repositories.map(repository => {
        return (
         
         <li>
            <h3>{repository.name}</h3>
          </li>
          
        )
      })}
     </ul>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display:"flex"
  },
  
});
