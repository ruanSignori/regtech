import { Entypo } from "@expo/vector-icons";
import BottomSheet from "@gorhom/bottom-sheet/";
import React, { useRef } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { theme } from "@themes/colors";
import { styles } from "./styles";

type BottomSheetDataType = {
  children: React.ReactNode
}

function BottomSheetData({ children }: BottomSheetDataType) {
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
         {children}
        </View>
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(BottomSheetData);
