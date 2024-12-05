import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 2500,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date('2024-04-12 18:00:00')
        },
        {
          id: 2,
          title: 'Internet',
          amount: 100,
          type: 'withdraw',
          category: 'Boleto',
          createdAt: new Date('2024-04-13 17:35:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
