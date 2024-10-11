import { Router } from 'express';
import User from '../models/user.model.js';
import List from '../models/list.model.js';

const router = Router();

router.post("/addTask", async (req, res) => {
    try {
      const { title, body, email } = req.body;
  
      // Check if the user exists based on the email
      const existingUser = await User.findOne({ email });
      if (!existingUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Create a new task
      const list = new List({ title, body, user: existingUser._id });
      await list.save();
  
      // Add the task to the user's list and save the user
      existingUser.list.push(list._id);
      await existingUser.save();
  
      return res.status(200).json({ list });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error", error: error.message });
    }
  });
  
router.put("/updateTask/:id", async (req, res) => {
    try {
        const { email, title, body } = req.body;

        // Find the user and ensure they own the task
        const existingUser = await User.findOne({ email, list: req.params.id });
        
        if (!existingUser) {
            return res.status(404).json({ message: "Task not found or you're not allowed to update this task" });
        }

        // Update the task in the List collection
        const updatedTask = await List.findByIdAndUpdate(
            req.params.id, 
            { title, body }, 
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (error) {
        console.error("Error during task update:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

//Delete task
router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const { email } = req.body;

        // Find the user by email and check if the task exists in their list
        const existingUser = await User.findOne({ email, list: req.params.id });
        
        if (!existingUser) {
            return res.status(404).json({ message: "Task or user not found, or you're not allowed to delete this task" });
        }

        // Remove the task from the user's list
        await User.findOneAndUpdate({ email }, { $pull: { list: req.params.id } });

        // Delete the task from the List collection
        await List.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Task Deleted" });
    } catch (error) {
        console.error("Error during task deletion:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


// Get all tasks
router.get("/getTasks/:id", async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id }).sort({ createdAt: -1 });

        if (!list.length !== 0) {

            res.status(200).json({ tasks: list });
        } else {
            res.status(200).json({ message: "NO Tasks" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
});


export default router;
