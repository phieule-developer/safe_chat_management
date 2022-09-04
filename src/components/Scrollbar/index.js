import React from 'react';
import SimpleBar from 'simplebar-react';

export const Scrollbar = ({ className, style, children, ...otherProps }) => {
    return (
        <SimpleBar className={className} style={style} {...otherProps}>
            {children}
        </SimpleBar>
    );
};
