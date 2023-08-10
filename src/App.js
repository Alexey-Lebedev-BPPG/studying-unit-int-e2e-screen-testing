import NavBar from './components/NavBar/NavBar';
import AppRouter from './router/AppRouter';
import TestingComponent from './components/Основы/TestingComponent';

function App() {
  return (
    <div>
      {/* делаем компонент для тестирования основ */}
      <TestingComponent />
      {/* делаем отдельный компонент для ссылок*/}
      <NavBar />
      {/* делаем отдельный компонент для роутов*/}
      <AppRouter />
    </div>
  );
}

export default App;
