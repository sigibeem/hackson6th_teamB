import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Top from './mainflames/Top';

// Navigatorモック準備
const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}));

describe('useNavigate', () => {
  test('ホーム画面に遷移すること', () => {
    // / を引数にNavigatorが呼び出されること
    Object.defineProperty(window, 'location', {
      value: {
        pathname: '/',
      },
    });
    
  });
  test('ブキリスト画面に遷移すること', async () => {
    render(
      <Top />
    )
    userEvent.click(screen.getByText('ブキ'));
    // /weaponsを引数にNavigatorが呼び出されること
    expect(mockedNavigator).toHaveBeenCalledWith('/weapons');
  });
  test('アタマ画面に遷移すること', () => {
    render(
      <Top />
    )
    userEvent.click(screen.getByText('アタマ'));
    // /headを引数にNavigatorが呼び出されること
    expect(mockedNavigator).toHaveBeenCalledWith('/head');
  });
  test('フク画面に遷移すること', () => {
    render(
      <Top />
    )
    userEvent.click(screen.getByText('フク'));
    // /armorを引数にNavigatorが呼び出されること
    expect(mockedNavigator).toHaveBeenCalledWith('/armor');
  });
  test('クツ画面に遷移すること', () => {
    render(
      <Top />
    )
    userEvent.click(screen.getByText('クツ'));
    // /shoesを引数にNavigatorが呼び出されること
    expect(mockedNavigator).toHaveBeenCalledWith('/shoes');
  });
});


