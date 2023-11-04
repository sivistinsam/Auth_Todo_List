// Import necessary dependencies and components from Material-UI
import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

// Define the functional component named Todo
const Todo = () => {
  // Define state variables using the useState hook
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState("all");

  // Function to add a new item to the task list
  const addItem = () => {
    if (text.length === 0) {
      alert("Please Enter Something First");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000000),
      name: text,
      checked: false,
    };
    setArr((oldItem) => [...oldItem, item]);
    setText("");
  };

  // Event handler for Enter key press to add an item
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addItem();
    }
  };

  // Function to delete a task item
  const delHandler = (id) => {
    let newArray = arr.filter((item) => item.id !== id);
    setArr(newArray);
  };

  // Function to handle the checkbox toggle for completed tasks
  const checkboxHandler = (id) => {
    const updatedArr = arr.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setArr(updatedArr);
  };

  // Load saved tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setArr(savedTasks);
    }
  }, []);

  // Store the current task list in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(arr));
  }, [arr]);

  // Function to filter tasks based on the selected filter option
  const filteredTasks = () => {
    if (filter === "completed") {
      return arr.filter((item) => item.checked);
    } else if (filter === "uncompleted") {
      return arr.filter((item) => !item.checked);
    }
    return arr;
  };

  // Render the user interface for the Todo component
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            height: "sm",
            padding: "30px",
            margin: "20px",
            borderRadius: "50px",
          }}
        >
          <h2>Todo List</h2>
          <TextField
            sx={{ width: "500px", margin: "2px" }}
            id="outlined-basic"
            label="Enter Your Task Here"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <Button
            sx={{ height: "55px", margin: "2px" }}
            onClick={addItem}
            variant="contained"
          >
            Add Item
          </Button>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Tasks</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Tasks"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="uncompleted">Incomplete</MenuItem>
            </Select>
          </FormControl>

          <Box>
            {/* Map and display the filtered tasks */}
            {filteredTasks().map((item) => (
              <Box
                sx={{
                  justifyContent: "space-between",
                  textDecoration: item.checked ? "line-through" : null,
                  width: "100%",
                  display: "flex",
                  backgroundColor: "skyblue",
                  borderRadius: "20px",
                  margin: "10px",
                  padding: "10px",
                  fontSize: "18px",
                  fontFamily: "Arial",
                  fontWeight: "600",
                }}
                key={item.id}
              >
                <Box>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={() => checkboxHandler(item.id)}
                    style={{
                      padding: "20px",
                      borderRadius: "20px",
                      backgroundColor: "cyan",
                      color: "black",
                      width: "50px",
                    }}
                  />
                  {item.name}
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      borderRadius: "20px",
                      padding: "4px",
                      border: "none",
                      color: "white",
                    }}
                    onClick={() => delHandler(item.id)}
                  >
                    X
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              fontFamily: "Arial",
              fontWeight: "600",
              backgroundColor: "skyblue",
              borderRadius: "20px",
              padding: "5px",
              marginTop: "20px",
            }}
          >
            {arr.length === 0
              ? "YOUR BUCKET IS EMPTY ADD SOME TASK"
              : `${arr.length} TASK LEFT IN BUCKET`}
          </Box>

          {arr.filter((item) => item.checked).length > 0 ? (
            <Box
              sx={{
                fontFamily: "Arial",
                fontWeight: "600",
                backgroundColor: "skyblue",
                borderRadius: "20px",
                padding: "5px",
                marginTop: "20px",
              }}
            >
              {arr.filter((item) => item.checked).length + " TASK COMPLETED"}
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Container>
    </div>
  );
};

// Export the Todo component
export default Todo;
