import {render, screen, fireEvent} from '@testing-library/react';
import TestingComponent from './TestingComponent';

describe('TEST TestingComponent', () => {
  test('renders components', () => {
    // передаем компонент, который хотим отрендерить для проверки
    render(<TestingComponent />);

    // здесь получаем элемент разными методами (по айди, плейсхолдер, тексту и т.п.). Регулярка указывает, что игнорируем регистр (//i)
    const helloWorldElement = screen.getByText(/hello world/i);
    // находим по роли элемента.Роль можно переопределять в JSX
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value.../i);
    // проверяем, что компонент появляется на странице
    expect(helloWorldElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    // снимет snapshot с инпута. Если после этого внести изменения в данный компонент, то тест не будет пройден, пока в
    // терминале мы не заменим наш снапшот новым
    expect(input).toMatchSnapshot();

    // метод позволяет получить дом-дерево после того, как отрендерился компонент
    // screen.debug()
  });

  test('проверка отсутствия элемента', () => {
    render(<TestingComponent />);

    const helloWorldElement = screen.queryByText(/hello world123/i);
    // проверяем, что компонент такой отсутствует
    expect(helloWorldElement).toBeNull();
  });

  test('тестирование findBy', async () => {
    render(<TestingComponent />);
    // асинхронно проверяем, появился ли элемент на странице
    const helloWorldElement = await screen.findByText(/data/i);
    expect(helloWorldElement).toBeInTheDocument();
    // проверяем, что у компонента есть вот такие стили
    expect(helloWorldElement).toHaveStyle({color: 'red'});
  });

  test('тестирование click', () => {
    // render(<TestingComponent />);
    // // получаем кнопку по дата-айди
    // const btn = screen.getByTestId("toggle-btn");
    // // используем query, т.к. изначально этого элемента нет на странице
    // const toggleDiv = screen.queryByTestId("toggle-elem");
    // expect(toggleDiv).toBeNull();

    // // вызываем спец. объект для событий
    // fireEvent.click(btn);
    // // ожидаем, что элемент уже появился на странице
    // expect(toggleDiv).toBeInTheDocument();

    // // нажимаем на кнопку еще раз
    // fireEvent.click(btn);
    // // убеждаемся, что элемента снова нет на странице
    // expect(toggleDiv).toBeNull();

    // по вышеуказанному сценарию тест будет падать, т.к. toggleDiv мы получаем один раз перед всем, поэтому там всегда будет null. Чтоб это избежать, в каждой проверке получаем его заново
    render(<TestingComponent />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.getByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('тестирование onChange', () => {
    render(<TestingComponent />);
    // получаем наш инпутник
    const input = screen.getByPlaceholderText(/input value.../i);
    // проверяем, что в нашем элементе изначально пустое значение
    expect(screen.queryByTestId('value-elem')).toContainHTML('');
    // вызываем событие input, где вторым элементом передаем наш event.target.value
    fireEvent.input(input, {target: {value: '123123'}});
    // также можно вызывать события, которые эмулируют действия пользователя, а не конкретные события JS (import userEvent from "@testing-library/user-event")
    // userEvent.type(input, "123123")

    // после этого ожидаем, что у нас появился вот такой текст
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  });
});
