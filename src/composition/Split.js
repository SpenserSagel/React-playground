import React from 'react';
import { tsPropertySignature } from '@babel/types';

function Split(props){
    const classNames = `split ${props.className}`;
    const newStyle = {flex: props.flexBasis};
    return (
        <div style={newStyle} className={classNames}>
            {props.children}
        </div>
    );
}

export default Split;