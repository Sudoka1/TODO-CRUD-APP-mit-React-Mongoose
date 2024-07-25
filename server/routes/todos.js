// server/routes/todos.js
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const todoController = require('../controllers/todoController');

router.get('/', todoController.getTodos);

router.post('/', [
  check('title').isLength({ min: 1 }).withMessage('Title is required')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, todoController.createTodo);

router.put('/:id', [
  check('title').optional().isLength({ min: 1 }).withMessage('Title must be at least 1 character long')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}, todoController.updateTodo);

router.delete('/:id', todoController.deleteTodo);

module.exports = router
