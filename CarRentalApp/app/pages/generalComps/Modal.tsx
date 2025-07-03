import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";

type CustomModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function CustomModal({ visible, onClose, children }: CustomModalProps) {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>×</Text>
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 20,
    minWidth: 250,
    minHeight: 100,
    alignItems: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    zIndex: 1,
  },
  closeText: {
    fontSize: 24,
    color: "#888",
  },
});