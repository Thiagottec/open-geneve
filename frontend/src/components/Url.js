import React from 'react';

export default function Link({ classNameA, classNameI, iconName, linkName, handleChange = null }) {
    const onChange = (event) => {
      event.preventDefault();
        if (handleChange) {
            handleChange(linkName);
        }
    };

    return ( 
        <td>
          <a className={classNameA}>
            <i className={classNameI}>{iconName}</i>
          </a>
          <a href="url" onClick={onChange}> {linkName}</a>
        </td>
    );

}