const express = require("express")
const router = require('express').Router();
const path = require('path');

 // HTML routes

 router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// get routes for notes app

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports= router;