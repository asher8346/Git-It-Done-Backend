const express = require('express')
const router = express.Router()

// Task model
const Task = require('../../models/Task.model')

// GET /api/tasks/
router.get('/', (req, res) => {
    Task.find()
        .then(tasks => res.json(tasks))
})

// POST /api/tasks/
router.post('/', (req, res) => {
    const newTask = new Task({
        taskID: req.body.taskID,
        title: req.body.title,
        description: req.body.description,
        categories: req.body.categories,
        parentWorkspaceID: req.body.parentWorkspaceID,
        taskID: req.body.taskID,
        title: req.body.title,
        description: req.body.description,
        parentWorkspaceID: req.body.parentWorkspaceID, 
    });
    newTask.save().then(task => res.json(task))
})

// DELETE /api/tasks/:id
router.delete('/:id', (req, res) => {
    Task.findById(req.params.id)
    .then( task => task.remove().then(() => res.json({success: true})))
    .catch( err => res.status(404).json({success: false}))
})

module.exports = router;