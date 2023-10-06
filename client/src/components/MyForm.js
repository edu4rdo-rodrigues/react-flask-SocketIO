import React, { useState } from 'react';
import { socket } from '../socket';

export function MyForm() {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    // Use a função "emit" para enviar uma mensagem com o valor atual para o servidor
  console.log('Enviando mensagem:', value); // Adicione esta linha para depurar
  socket.emit('message', value);

    setIsLoading(false);
    setValue(''); // Limpar o campo após o envio da mensagem
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isLoading}
      />

      <button type="submit" disabled={isLoading}>
        Submit
      </button>
    </form>
  );
}
