import styles from "./TodoForm.module.css";

function TodoForm() {
  return (
    <form className={styles.form}>
      <input
        className={styles.inputForm}
        type="text"
        placeholder="Enter new todo"
      />
      <button className={styles.submitForm}>Submit</button>
    </form>
  );
}
export default TodoForm;
