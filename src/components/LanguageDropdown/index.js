import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

import enFlag from './flags/us.jpg';
import russiaFlag from './flags/russia.jpg';

// get the languages
const Languages = [
    {
        name: 'English',
        flag: enFlag,
    },
    {
        name: 'Russian',
        flag: russiaFlag,
    },
];

export const LanguageDropdown = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    /*
     * toggle language-dropdown
     */
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
            <Dropdown.Toggle
                id="dropdown-languages"
                as="a"
                onClick={toggleDropdown}
                className={classNames('nav-link', 'cursor-pointer', { show: dropdownOpen })}>
                <FeatherIcon icon="globe" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                <div onClick={toggleDropdown}>
                    {(Languages || []).map((lang, i) => {
                        return (
                            <Link to="/" className="dropdown-item" key={i + '-lang'}>
                                <img src={lang.flag} alt={lang.name} className="me-1" height="12" />{' '}
                                <span className="align-middle">{lang.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};