import { View, Text, Pressable, Switch, Alert } from "react-native";
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeTask, updateTask } from '../../redux/taskSlice';

export default function Task({ description, id, status }) {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                { text: "Cancel", style: "cancel" },
                {
                    text: "OK", onPress: async () => {
                        dispatch(removeTask(id));
                    }
                }
            ]
        );
    };

    const handleStatusChanged = async () => {
        dispatch(updateTask({ id: id, status: !status }));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>{description}</Text>
            <Text style={styles.statusText}>Status: {status ? "Done" : "Due"}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
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
        </View>
    );
}