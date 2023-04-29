import { useState } from "react"
import { useAppContext } from "../../hooks/useAppContext";
import styles from "./CreateTask.module.css"
import { api } from "../../services/api";

export function CreateTask() {
    const [taskName, setTaskName] = useState("");

    const { setTasks } = useAppContext();

    async function handleSubmit(event) {
        event.preventDefault();

        const { data: newTask } = await api.post("/tasks", {
            name: taskName
        })
        setTasks(prev => [...prev, newTask])
        setTaskName("")
    }

    async function addTask() {

    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskName}
                    onChange={event => setTaskName(event.target.value)} />
                <button type="submit">+</button>
            </form>
        </div>
    )
}