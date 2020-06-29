import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { HeaderDisplayName } from '../utils/utils';
import styles from './ModalHeader.styles';

const ModalHeader = ({ children, className, ...props }) => {
    const classes = createUseStyles(styles)();
    return (
        <div
            {...props}
            className={classNames(classes.header, className)}
        >
            {children}
        </div>
    );
};

ModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

ModalHeader.defaultProps = {
    className: null,
};

ModalHeader.displayName = HeaderDisplayName;
export default React.memo(ModalHeader);
