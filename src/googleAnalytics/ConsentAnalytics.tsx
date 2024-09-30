import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { useEffect, useState } from "react";
import { CookieConsentProps } from "react-cookie-consent/dist/CookieConsent.props";
import ReactGA from "react-ga4";

interface IConsentForm {
  message?: string;
  options?: CookieConsentProps;
  ignoreConsent?: boolean;
}

// In .env file
const propertyId = import.meta.env.VITE_PROPERTY_ID;
const cookieName = import.meta.env.VITE_COOKIE_NAME;

const ConsentAnalytics = ({
  message,
  options,
  ignoreConsent,
}: IConsentForm) => {
  const [consent, setConsent] = useState(
    !!getCookieConsentValue(
      options?.cookieName ? options.cookieName : cookieName
    )
  );
  useEffect(() => {
    if (consent || ignoreConsent) {
      if (!ReactGA.isInitialized) {
        ReactGA.initialize(propertyId);
      }
    }
  }, [consent]);

  if (ignoreConsent) return null;

  return (
    <CookieConsent
      {...options}
      onAccept={(acceptedByScrolling) => {
        setConsent(true);
        if (options?.onAccept) options.onAccept(acceptedByScrolling);
      }}
      onDecline={() => {
        setConsent(false);
        if (options?.onDecline) options.onDecline();
      }}
      cookieName={options?.cookieName ? options.cookieName : cookieName}
    >
      {message
        ? message
        : "This website uses cookies to enhance the user experience and analyze the website use."}
    </CookieConsent>
  );
};

export default ConsentAnalytics;
