
import { useCookies } from 'react-cookie';
import '../css/cookie.css';

const CookieConsent = () => {
  const [ setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <div className="cookie-consent">
      <p>
        We use cookies to enhance your user experience. By using our website,
        you agree to our use of cookies.{" "}
        {/* <a href={"/privacy-policy"}>Learn more.</a> */}
      </p>
      <button onClick={giveCookieConsent}>
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
