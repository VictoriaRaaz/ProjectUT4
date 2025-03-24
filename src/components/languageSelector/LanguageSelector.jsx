import { Menu, Transition } from "@headlessui/react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

let countries = [
  { code: "es", name: "Español", country_code: "es" },
  { code: "en", name: "English", country_code: "gb" },
];

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <Menu as="div" className="relative flex" aria-label="usermenu">
        <Menu.Button className="language-button" aria-label="usermenu-button">
          <span className="flex w-full justify-between items-center">
            <GlobeAltIcon className="language-icon" />
          </span>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items aria-label="menu-item-container" className="language-menu">
            <div aria-label="menu-items">
              {countries.map((lng) => (
                <Menu.Item key={lng.code}>
                  {({ active }) => (
                    <button
                      className="language-item"
                      onClick={() => i18n.changeLanguage(lng.code)}
                      disabled={i18n.language === lng.code}
                    >
                      <span className={`fi fi-${lng.country_code} language-flag`}></span>
                      <span>{lng.name}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default LanguageSelector;
