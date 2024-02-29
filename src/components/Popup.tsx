import React from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from '../../colors';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import { useTranslation } from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  content: string;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, content }) => {
  const { t } = useTranslation();

  if (!isVisible) {
    return null;
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Ionicons name={'checkmark-circle-outline'} size={50} color={colors.primaryColor} />
          <Text style={styles.popupText}>{content}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name={'close-circle'} size={40} color={colors.primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    height: '30%',
    width: '80%',
    paddingHorizontal: 30,
    backgroundColor: colors.secondaryColor,
    borderRadius: 10,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  closeButtonText: {
    color: 'blue',
  },
  popupText: {
    color: colors.black,
    fontSize: responsiveFontSize(2.2),
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: responsiveHeight(3),
    width: '70%',
    marginTop: 20
  },
  button: {
    borderRadius: 10,
    marginTop: 20,
    padding: 5,
  },
});

export default Popup;
