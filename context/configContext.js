import { useState, createContext } from 'react';
import EnglishMessages from '../languages/en-US.json';
import SpanishMessages from '../languages/es-MX.json';
import { IntlProvider } from 'react-intl';

const configContext = createContext();

const ConfigProvider = ({children}) => {
	const [messages, setMessages] = useState(SpanishMessages);
	const [locale, setLocale] = useState('es-MX');
	const [theme, setTheme] = useState('dark');
    const [darkEnabled, setDarkEnabled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

	const setLanguage = (language) => {
		switch (language){
			case 'es':
				setMessages(SpanishMessages);
				setLocale('es-MX');
				break;
			case 'en':
				setMessages(EnglishMessages);
				setLocale('en-US');
				break;
			default:
				setMessages(SpanishMessages);
				setLocale('es-MX');
		}
	}

	const setDarkmode = (mode) => {
		switch (mode){
			case 'dark':
				setTheme('dark');
				break;
			case '':
				setTheme('');
				break;
			default:
				setTheme('dark');
				break;
		}
	}

	return (
		<configContext.Provider value={{setLanguage, setDarkmode, theme, setTheme, locale, setLocale, darkEnabled, setDarkEnabled, menuOpen, setMenuOpen}}>
			<IntlProvider locale={locale} messages={messages}>
				{children}
			</IntlProvider>
		</configContext.Provider>
	);
}
 
export {ConfigProvider, configContext};