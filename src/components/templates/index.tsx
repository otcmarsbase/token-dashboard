import React, {FC, ReactNode} from 'react';

export const Header: FC<{children: ReactNode}> = ({ children }) => {
    return <div>{children}</div>
}