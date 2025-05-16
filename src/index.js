import  './styles/main.css';
import  './styles/project.css';
import  './styles/todo.css'
import projectEvents from './events/projectEvents';
import SearchFunctionality, { FiltersearchBar } from './events/searchEvents';
import { changeSearchType } from './events/searchEvents';
import inboxEvents from './events/inboxEvents';
import TodayEvents from './events/TodayEvents';
import upComingEvents from './events/isComingEvents';
import LabelEvents from './events/LabelEvents';
import completedEvents from './events/completedEvents';
import checkBoxEvents from './events/CheckBoxEvents';
import deleteTodoEvent from './events/deleteTodoEvent';


// functions  for different  tabs
projectEvents();
SearchFunctionality();
changeSearchType();
FiltersearchBar();
inboxEvents();
TodayEvents();
upComingEvents();
LabelEvents();
checkBoxEvents();
completedEvents();
deleteTodoEvent();






