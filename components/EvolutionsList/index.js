import React from 'react';
import {View, FlatList, Dimensions} from 'react-native';
import PokemonItem from "../PokemonItem";

import styles from './styles';
import pokemons from './pokemons';

const EvolutionsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={pokemons}
        renderItem={({item}) => <PokemonItem pokemon={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'nromal'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default EvolutionsList;