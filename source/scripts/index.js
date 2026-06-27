/* в этот файл добавляет скрипты*/
import {initToggleMenu} from './nav';
import { initResponsiveButton } from './responsive-button';

const init = () => {
  initToggleMenu();
  initResponsiveButton();
};

init();
