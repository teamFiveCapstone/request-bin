const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const mongoose = require('mongoose');

async function startServer() {
    const pgClient = new Client({
        user: 'zachbajcar',
        host: 'localhost',
        database: 'requestbin',
        port: 5432,
    });

    try {
        await pgClient.connect();
        console.log('Connected to PostgreSQL');
    } catch (err) {
        console.error('PostgreSQL connection error')
    }

    try {
        await mongoose.connect('mongodb://localhost:27017/requestbin');
        console.log('Connected to MongoDB');
      } catch (err) {
        console.error('MongoDB connection error:');
      }
}

startServer()