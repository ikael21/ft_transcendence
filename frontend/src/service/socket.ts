import { io, Socket } from 'socket.io-client';
import { useErrorStore } from '@/store/error';

export const socket: Socket = io(`http://${import.meta.env.VITE_DOMAIN}:3001`, {
  autoConnect: false,
  withCredentials: true,
  transports: ['websocket'],
});

socket.on('connect', function () {
  socket.emit('newConnection', 'hello');
  console.log('Socket Connected', socket.id);
});

socket.on('exception', function (data) {
  console.log(`Exception on Socket(${socket.id}):`, data);
  const errorStore = useErrorStore();
  errorStore.setError(data.message);
});

socket.on('disconnect', function (reason) {
  console.log('Socket disconnected because of ' + reason);
});
