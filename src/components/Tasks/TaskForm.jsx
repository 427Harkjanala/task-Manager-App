import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";
import styles from "./Task.module.css";
import Button from "../UI/Button";
import Input from "../UI/Input";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.tasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;
     const currentDate = new Date().toISOString().split("T")[0];
    dispatch(addTask({ title, description, dueDate: currentDate }));

    setTitle("");
    setDescription("");
  };

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
      />
      <textarea
        className={styles.textarea}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Task"}
      </Button>
    </form>
  );
};

export default TaskForm;
