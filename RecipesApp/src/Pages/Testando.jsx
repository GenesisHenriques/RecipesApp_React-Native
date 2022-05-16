import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Switch, ScrollView } from 'react-native';

export default function Testando() {
  const [ligado, setLigado] = useState(true)
  // const [cont, setCont] = useState(0)

  // useEffect(() => setCont(cont + 1), [cont])

  return(
    <View style={styles.container}>
      <Text>Text</Text>
      <Button
          style={{color: 'White'}}
          onPress={() => setLigado(!ligado)}
          title={ligado ? 'Bom dia' : 'Clica aqui'}
        />
        <Switch
          trackColor={{false: '#777', true:"#8bj"}}
          thumbColor={ligado ? "#00f" : "#444"}
          value={ligado}
          onValueChange={() => {setLigado(!ligado)}}
        />
        <Text>{ligado}</Text>
        {
          ligado % 2 == 0 ? <Text>Oi</Text> : null
        }
        {console.log(ligado)}
        <ScrollView style={{backgroundColor: '#333', padding: 15}}>
          <Text style={{color: '#eee'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tincidunt tortor. Pellentesque mattis malesuada mattis. Vivamus vitae dignissim erat, eu ullamcorper urna. Mauris faucibus iaculis pretium. In dapibus, erat in gravida fermentum, ligula erat vehicula libero, id porttitor lectus augue in turpis. Fusce sapien nunc, tempor vel lacus et, imperdiet vestibulum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed ut neque eget urna ultricies vestibulum in eget libero. Donec sollicitudin odio sit amet diam vestibulum, a viverra turpis euismod. Nunc tincidunt pretium varius. Quisque auctor feugiat ipsum, quis congue lacus suscipit sit amet. Nullam at.
          </Text>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
