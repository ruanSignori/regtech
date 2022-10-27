import React, { useEffect, useState }  from 'react';
import { FlatList, Dimensions, Image, ActivityIndicator, View, Text } from 'react-native';
import { storage, listAll } from '@services/firebase';
import { getDownloadURL, ref } from 'firebase/storage';

const { width, height } = Dimensions.get('window');
import { styles } from './styles';
import { theme } from '@themes/colors';

type DataImage = {
  name: string,
  path: string
};

export function Slider() {
  const [allImages, setAllImages] = useState<DataImage[]>([]);

  useEffect(() => {
    const refImage = ref(storage, 'galeria');
    listAll(refImage)
    .then((res) => {
    res.items.forEach((itemRef) => {
      const titleImg = itemRef.name;
      getDownloadURL(itemRef)
      .then((url) => {
        if (url === null) return;

        setAllImages(prevState => [...prevState, {
          name: titleImg,
          path: url
        }]);
      });
    });
    }).catch((error) => {
      //erro
    });
  }, []);

  function renderItem({ item }: { item: DataImage }) {
    return (
      <Image
        resizeMethod='auto'
        source={{ uri: item.path }}
        key={item.name}
        style={[styles.container, {
          height: height / 1.75,
          width: width * 0.8 - 20,
        }]} 
      />
    )
  }
  
  const offSet = [...allImages];
  const offSetCalc = offSet.map((value, index) => index * (width * 0.8 - 40) + (index - 1) * 40);
  
  return (
    <FlatList 
      data={allImages}
      style={[styles.container, { width }]}
      keyExtractor={item => item.name}
      showsHorizontalScrollIndicator={false}
      horizontal
      snapToOffsets={offSetCalc}
      renderItem={renderItem}
      snapToAlignment='start'
      scrollEventThrottle={16}
      decelerationRate="fast"
    />
  );
}