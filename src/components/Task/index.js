import React, { useState } from 'react';
import { View, Text, Pressable, Modal, Switch, Button, Alert } from "react-native";
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeTask, updateTask } from '../../redux/taskSlice';

export default function Task({ description, id, status }) {
    const [showModal, setShowModal] = useState(false);

    const dispatch = useDispatch();

    const handleDelete = async () => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "OK", onPress: async () => {
                        dispatch(removeTask(id))
                        onToggleModal()
                    }
                }
            ]
        );
    };

    const handleStatusChanged = async () => {
        dispatch(updateTask({ id: id, status: !status }))

    };

    const onToggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Pressable onPress={onToggleModal}>
                <View style={styles.container}>
                    <Text style={styles.headingText}>{description}</Text>
                    <Text>Id: {id}</Text>
                    <Text>Status: {status ? "Completed" : "Open"}</Text>
                </View>
            </Pressable>

            <Modal visible={showModal} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <Text style={styles.title}>{description}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 20 }}>
                            <View style={{ alignItems: 'center' }}>
                                <Switch
                                    value={status}
                                    onValueChange={handleStatusChanged}
                                />
                                <Text style={{ marginTop: 10 }}>Toggle Status</Text>
                            </View>
                            <Pressable onPress={handleDelete}>
                                <View style={{ alignItems: 'center' }}>
                                    <MaterialIcons name="delete-sweep" size={28} color="red" />
                                    <Text style={{ marginTop: 10 }}>Delete Task</Text>
                                </View>
                            </Pressable>

                        </View>
                        <Pressable onPress={onToggleModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>X</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal >
        </>
    );
}
