import { View, Text, TextInput, Switch, Button, Keyboard } from "react-native";
import { useState } from 'react';
import styles from "./styles";
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import uuid from 'react-uuid';

export default function Form() {

    const dispatch = useDispatch();

    const [taskDescription, setTaskDescription] = useState('');
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [descriptionError, setDescriptionError] = useState(null)


    handleTaskStatusChange = (value) => {
        setTaskCompleted(value);
    }

    handleAddPress = async () => {
        if (taskDescription) {
            const task = {
                id: uuid(),
                description: taskDescription,
                status: taskCompleted,
            };
            dispatch(addTask(task));
            setDescriptionError('');
            setTaskDescription('');
            setTaskCompleted(false);
            Keyboard.dismiss();
        } else {
            setDescriptionError("The Title is required");
        }
    }

    const handleDescriptionChange = (value) => {
        setTaskDescription(value);
    }


    return (
        <View style={styles.container}>
            {descriptionError ? (<View style={styles.errorStyle}>
                <Text style={[styles.errorTextStyle, styles.boldText]}>Attention:</Text>
                <Text style={styles.errorTextStyle}>{descriptionError}</Text>
            </View>) : null}
            <TextInput style={styles.inputStyle}
                placeholder='Enter a task description'
                maxLength={150}
                onChangeText={handleDescriptionChange}
                defaultValue={taskDescription}
            />
            <View style={styles.switchStyle}>
                <Text style={styles.basicTextStyle}>Task Done:</Text>
                <Switch value={taskCompleted} onValueChange={handleTaskStatusChange}></Switch>
            </View>

            <Button
                title='Add'
                onPress={handleAddPress}
            />
        </View>
    )

}