import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../features/theme/model/themeSlice';

function ThemeSwitcher() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.currentTheme);

  return (
    <select
      className="theme-switcher"
      value={currentTheme}
      onChange={(event) => dispatch(setTheme(event.target.value))}
    >
      <option value="vampire">Vampire</option>
      <option value="neon">Neon</option>
      <option value="cozy">Cozy</option>
    </select>
  );
}

export default ThemeSwitcher;