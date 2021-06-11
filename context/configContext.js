import { useState, createContext } from 'react';
import EnglishMessages from '../languages/en-US.json';
import SpanishMessages from '../languages/es-MX.json';
import { IntlProvider } from 'react-intl';

const configContext = createContext();

const ConfigProvider = ({children}) => {
	const [messages, setMessages] = useState(SpanishMessages);
	const [locale, setLocale] = useState('es-MX');
	const [theme, setTheme] = useState('dark');

	const setLanguage = (language) => {
		switch (language){
			case 'es-MX':
				setMessages(SpanishMessages);
				setLocale('es-MX');
				break;
			case 'en-US':
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
		}
	}

	return (
		<configContext.Provider value={{setLanguage:setLanguage, setDarkmode, theme}}>
			<IntlProvider locale={locale} messages={messages}>
				{children}
			</IntlProvider>
		</configContext.Provider>
	);
}
 
export {ConfigProvider, configContext};