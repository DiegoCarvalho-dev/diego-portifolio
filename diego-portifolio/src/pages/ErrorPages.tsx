import React from 'react';
import { ErrorPage } from '@/components';

/**
 * Exemplo Prático - Página 404 com Lightning
 * 
 * Este arquivo demonstra como usar o componente Lightning
 * em uma página de erro real do seu portfolio
 * 
 * Para usar:
 * 1. Importe este componente no seu App.tsx
 * 2. Adicione como fallback route no React Router
 */

export function NotFoundPage() {
  return (
    <ErrorPage
      code={404}
      title="Página não encontrada"
      description="Parece que você chegou em um lugar que não deveria estar. A página desapareceu num relâmpago!"
      actionButtonText="← Voltar ao Portfolio"
      onActionClick={() => {
        window.location.href = '/';
      }}
      hue={260}  // Roxo (cor padrão do DirectBits)
      speed={1.2}
    />
  );
}

/**
 * Exemplo Prático 2 - Erro 500 com Lightning
 */
export function ServerErrorPage() {
  return (
    <ErrorPage
      code={500}
      title="Erro do Servidor"
      description="Algo inesperado aconteceu no servidor. Nosso time está trabalhando para corrigir isso!"
      actionButtonText="Tentar Novamente"
      onActionClick={() => {
        window.location.reload();
      }}
      hue={0}    // Vermelho para erro crítico
      speed={1.5}
    />
  );
}

/**
 * Exemplo Prático 3 - Manutenção com Lightning
 */
export function MaintenancePage() {
  return (
    <ErrorPage
      code={503}
      title="Site em Manutenção"
      description="Estamos atualizando nosso portfolio para trazer novidades. Voltamos em breve!"
      actionButtonText="Recarregar"
      onActionClick={() => {
        window.location.reload();
      }}
      hue={30}   // Laranja para aviso
      speed={1}
    />
  );
}

/**
 * Como integrar no React Router:
 * 
 * import { BrowserRouter, Routes, Route } from 'react-router-dom';
 * import { NotFoundPage, ServerErrorPage, MaintenancePage } from '@/pages/ErrorPages';
 * 
 * function App() {
 *   return (
 *     <BrowserRouter>
 *       <Routes>
 *         <Route path="/" element={<HomePage />} />
 *         <Route path="/projects" element={<ProjectsPage />} />
 *         
 *         {/* Páginas de erro */}
 *         <Route path="/maintenance" element={<MaintenancePage />} />
 *         <Route path="/error" element={<ServerErrorPage />} />
 *         <Route path="*" element={<NotFoundPage />} />
 *       </Routes>
 *     </BrowserRouter>
 *   );
 * }
 * 
 * export default App;
 */

export default NotFoundPage;
