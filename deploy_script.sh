#!/bin/bash
echo "Iniciando o deploy (simulação)..."
echo "Conectando ao servidor de produção..."
echo "git pull origin main (simulado)"
npm install --production
echo "pm2 restart all (simulado)"
echo "Deploy finalizado!"