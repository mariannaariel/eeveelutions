import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const PokemonItem = (props) => {

  const { name, tagline, image } = props.pokemon;

  return (
    <View style={styles.pokemonContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Curiosidade"}
          onPress={() => {
            console.warn();
          }}
        />

        <StyledButton
          type="secondary"
          content={"Estatísticas"}
          onPress={() => {
            console.warn();
          }}
        />
      </View>

    </View>
  );
};

export default PokemonItem;