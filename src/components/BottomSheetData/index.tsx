import { Entypo, MaterialIcons, Feather } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet/";
import React, { useRef } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { theme } from "@themes/colors";
import { SecundaryStats } from "@components/SecundaryStats";
import { styles } from "./styles";


function BottomSheetData() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.expand();
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => handleOpenBottomSheet()}
        style={styles.buttonOpenModal}
      >
        <Entypo
          name="dots-three-horizontal"
          size={24}
          color={theme.colors.night_blue}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 230]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        enablePanDownToClose
      >
        <Text style={styles.title}>Outras informações...</Text>
        <View style={styles.contentBottomSheet}>
          <SecundaryStats
            title="Nível da umidade"
            valueData="Alto"
            colorData={theme.colors.red_third}
          >
            <MaterialIcons
              name="waves"
              size={24}
              color={theme.colors.night_blue}
            />
          </SecundaryStats>
          <SecundaryStats
            title="Tempo neste nível"
            valueData="22m"
            colorData={theme.colors.night_blue}
          >
            <Feather name="clock" size={24} color={theme.colors.night_blue} />
          </SecundaryStats>
        </View>
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(BottomSheetData);
