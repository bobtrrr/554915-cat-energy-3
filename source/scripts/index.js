/* в этот файл добавляет скрипты*/
import {initToggleMenu, initCangeSiteNavTheme} from './nav';
import { initResponsiveButton } from './responsive-button';

const init = () => {
  initToggleMenu();
  initResponsiveButton();
  initCangeSiteNavTheme();
};

init();
