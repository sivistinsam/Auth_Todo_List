import React, { useState, useEffect } from "react";
// import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField, Button,MenuItem,Select,InputLabel,FormControl } from "@mui/material";

const Todo = () => {
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState("all"); 

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
  const handleKeyPress = (event)=>{
    if(event.key==="Enter"){
      addItem()
    }

  }

  const delHandler = (id) => {
    let newArray = arr.filter((item) => item.id !== id);
    setArr(newArray);
  };
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

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setArr(savedTasks);
    }
  }, []);

  // Save tasks to local storage whenever arr changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(arr));
  }, [arr]);

   const filteredTasks = () => {
     if (filter === "completed") {
       return arr.filter((item) => item.checked);
     } else if (filter === "uncompleted") {
       return arr.filter((item) => !item.checked);
     }
     return arr; // Default "All" filter
   };
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
          <FormControl >
            <InputLabel id="demo-simple-select-label">Tasks</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filter}
              label="Tasks"
              onChange={(e)=>setFilter(e.target.value)}
            >
              <MenuItem value='all'>All</MenuItem>
              <MenuItem value='completed'>Completed</MenuItem>
              <MenuItem value='uncompleted'>Incomplete</MenuItem>
            </Select>
          </FormControl>
        

          <Box>
            {filteredTasks().map((item) => (
              <Box
                sx={{
                  // display: "flex",
                  justifyContent: "space-between",
                  textDecoration: item.checked ? "line-through" : null,
                  width: "100%",
                  // margin: "20px",
                  display: "flex",
                  backgroundColor: "skyblue",
                  // border: "1px solid red",
                  borderRadius: "20px",
                  margin: "10px",
                  padding: "10px",
                  fontSize: "18px",
                  fontFamily: "Arial",
                  fontWeight: "600",

                  // display: 'grid',
                  // gridTemplateColumns: '4fr 1fr',
                  // gap: '10px',
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

export default Todo;
