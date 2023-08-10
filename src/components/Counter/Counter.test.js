import userEvent from '@testing-library/user-event';
import {renderTestApp} from '../../tests/helpers/renderTestApp';

describe('Counter test', () => {
  test('router', () => {
    // можно использовать такой синтаксис. Это аналогично поиску как при screen, однако можно искать непосредственно в данном контейнере
    // const container = render(<Counter />);
    // также можно сразу деструктуризировать методы оттуда
    // const { getByTestId } = render(<Counter />);
    // однако, если просто так тестить компонент, то тесты будут падать, т.к. его нужно оборачивать в провайдер и передавать стор
    // const { getByTestId } = render(
    //   <Provider store={createReduxStore()}>
    //     <Counter />
    //   </Provider>
    // );
    // также создадим хелпер для этой конструкции и используем его
    // const { getByTestId } = renderWithRedux(<Counter />);
    // пойдем еще далее и создали хелпер, который объединит в себе хелпер редакса и роутинга и используем его. Указываем вместо компонента <Counter/> просто null, т.к. этот компонент у нас уже отрисовывается по роутингу
    const {getByTestId} = renderTestApp(null, {
      initialState: {counter: {value: 10}},
      initialRoute: '/',
    });
    // теперь вместо этой конструкции
    // const incrementBtn = screen.getByTestId("increment-btn");
    // мы можем использовать так
    const incrementBtn = getByTestId('increment-btn');
    // проверяем, что у нас отрисовался заголовок с текстом
    expect(getByTestId('value-title')).toHaveTextContent(0);
    userEvent.click(incrementBtn);
    expect(getByTestId('value-title')).toHaveTextContent(1);

    // асинхронные экшены работают аналогично асинхронным тестам. мокаем данные и работаем с ними
  });
});
