import express from "express";
import bodyParser from "body-parser";
import { format } from "date-fns"; // Import 'format' function from date-fns

const app = express();
const port = 3000;
const tasklist = [];
const Worklist=[];
const currentDate = new Date();
const formattedDate = format(currentDate, 'EEEE, MMMM d');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs"); // Set the view engine to ejs

app.get("/", (req, res) => {
    res.render("index.ejs", { 
        tasklist: tasklist,
        title: formattedDate
    });
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { 
        tasklist: Worklist,
        title: "Work"
    });
});

app.post("/", (req, res) => {
    const task = req.body["newItem"];
    tasklist.push(task);
    res.render("index.ejs", {
        tasklist: tasklist,
        title: formattedDate, // Pass the formatted date to the template
        Task: task
    });
});
app.post("/work", (req, res) => {
    const task = req.body["newItem"];
    Worklist.push(task);
    res.render("work.ejs", {
        tasklist: Worklist,
        title: "Work", // Pass the formatted date to the template
        Task: task
    });
});
app.post("/reset", (req, res) => {
    tasklist.length = 0; // Clear the tasklist array
    res.redirect("/");
});
app.post("/work/reset", (req, res) => {
    Worklist.length = 0; // Clear the tasklist array
    res.redirect("/work");
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
