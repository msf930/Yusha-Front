import browserLang from 'browser-lang';
import { useEffect, useState } from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';

const supportedLanguages = ["en","ko"];

export default function App() {
    const defaultLocale = browserLang({
        languages: supportedLanguages,
        fallback: "en"
    });

    const [locale, setLocale] = useState(defaultLocale);
    const [messages, setMessages] = useState(null);

    useEffect(() => {
        const url = `https://api.i18nexus.com/project_resources/translations/${locale}/default.json?api_key=L4KlH3dt4hjF3dWLo0jZbA`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMessages(data);
            });
    }, [locale]);

    return (
        <IntlProvider locale={locale} messages={messages}>
            <div className="App">
                <p>
                    <FormattedMessage id="welcome_msg" />
                </p>
            </div>
        </IntlProvider>
    );
}
