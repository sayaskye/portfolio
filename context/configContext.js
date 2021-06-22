import { useState, createContext } from 'react';
import EnglishMessages from '../languages/en-US.json';
import SpanishMessages from '../languages/es-MX.json';
import { IntlProvider } from 'react-intl';

const configContext = createContext();

const ConfigProvider = ({children}) => {
	const [messages, setMessages] = useState(EnglishMessages);
	const [locale, setLocale] = useState('en-US');
	const [theme, setTheme] = useState('');

	const setLanguage = () => {
		locale=="en-US" ? setLocale("es-MX") : setLocale("en-US")
		messages===EnglishMessages ? setMessages(SpanishMessages) : setMessages(EnglishMessages)
	}

	const setDarkmode = () => {
		theme=="dark" ? setTheme("") : setTheme("dark")
	}

	return (
		<configContext.Provider value={{setLanguage, setDarkmode, theme}}>
			<IntlProvider locale={locale} messages={messages}>
				{children}
			</IntlProvider>
		</configContext.Provider>
	);
}
 
export {ConfigProvider, configContext};