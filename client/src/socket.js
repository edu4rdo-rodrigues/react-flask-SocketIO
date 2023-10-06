// src/socket.js
import { io } from 'socket.io-client';

export const socket = io('http://localhost:5000');  // Use a mesma porta em que o servidor Flask está rodando.
