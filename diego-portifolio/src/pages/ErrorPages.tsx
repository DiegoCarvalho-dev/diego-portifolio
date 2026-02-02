import React from 'react';

// Páginas de erro simplificadas para build
// Podem ser expandidas posteriormente quando necessário

export function NotFoundPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Página não encontrada</h2>
      <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
        Parece que você chegou em um lugar que não deveria estar.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        style={{
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Voltar ao Portfolio
      </button>
    </div>
  );
}

export function ServerErrorPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>500</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Erro do Servidor</h2>
      <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
        Algo inesperado aconteceu no servidor.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Tentar Novamente
      </button>
    </div>
  );
}

export function MaintenancePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>503</h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Site em Manutenção</h2>
      <p style={{ marginBottom: '2rem', maxWidth: '500px' }}>
        Estamos atualizando nosso portfolio para trazer novidades. Voltamos em breve!
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Recarregar
      </button>
    </div>
  );
}

export default NotFoundPage;