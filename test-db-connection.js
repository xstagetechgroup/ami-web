require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');

async function testConnection() {
  const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

  try {
    console.log('Testando conexão com o banco de dados...');
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'CONFIGURADO' : 'NÃO CONFIGURADO');
    
    // Teste simples de conexão
    await prisma.$connect();
    console.log('✅ Conexão bem-sucedida!');
    
    // Teste de query
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Query executada com sucesso:', result);
    
    // Teste de contagem de tabelas
    const userCount = await prisma.user.count();
    console.log(`✅ Usuarios encontrados: ${userCount}`);
    
  } catch (error) {
    console.error('❌ Erro na conexão:', error.message);
    console.error('Detalhes:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
