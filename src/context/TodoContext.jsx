const { createContext } = require("react");

const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  value = { todos };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
