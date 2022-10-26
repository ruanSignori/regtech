import { ContentText } from '@components/ContentText';
import { Description } from '@components/ContentText/Description';
import { Slider } from '@components/Slider';
import React  from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container} >   
      <FlatList 
        style={styles.contentList}
        data={Description}
        ListHeaderComponent={<Text style={styles.title}>RegTech</Text>}
        renderItem={({item, index}) => (
          <ContentText 
            title={item.title} 
            description={item.data} 
            key={index} 
          />
        )}
      />    
    </View>    
  );
};