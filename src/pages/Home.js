import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';

export function Home() {
  //criando uma função para atualizar o estado
  //posições: tem o estado, função que atualiza, setando o estado inicial
  const [newSkill, setNewSkill] = useState('');
  //armazenando todas as skills
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    //...spread operator que despeja dentro do novo array com a nova skill
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome, Vanessa</Text>

        <TextInput
          testID="new-skill"
          style={styles.input}
          placeholder="New skill"
          placeholderTextColor="#555"
          onChangeText={setNewSkill}
        />
        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, {marginTop: 20}]}>My Skills</Text>

        <FlatList
          data={mySkills}
          keyExtractor={item => item}
          renderItem={({item}) => <SkillCard skill={item} />}
        />

        {/*<ScrollView showsVerticalScrollIndicator={false}>
          {/*o map percorre cada elemento dentro da skill e atualiza no skillCard o estado anterior*/}
        {/*{mySkills.map(skill => (
            <SkillCard key={skill} skill={skill} />
          ))}*/}
        {/*</ScrollView>*/}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: '#FFF',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
});
