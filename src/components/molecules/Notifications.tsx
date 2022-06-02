import React, {FC} from 'react';
import {style} from "typestyle";

interface NotificationsProps {
    type: 'success' | 'error'
}

const Notifications: FC<NotificationsProps> = ({type}) => {
    return (
        <div>
            
        </div>
    );
};

const container = style({
    position: 'absolute',
    zIndex: 9999
})

const content = (type: string) => style({

})

export default Notifications;