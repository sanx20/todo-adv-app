import { ScrollView, View, Text } from "react-native";
import Task from "../../components/Task";
import styles from "./styles";
import { useSelector } from "react-redux";


export default function Tasks() {
    const tasks = useSelector((state) => state.task.tasks);
    return (
        <View style={styles.container}>
            {tasks.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>No tasks available</Text>
                </View>
            ) : (
                <ScrollView>
                    {tasks.map((task, index) => (
                        <Task
                            key={index}
                            description={task.description}
                            id={task.id}
                            status={task.status}
                        />
                    ))}
                </ScrollView>
            )}
        </View>
    );
}