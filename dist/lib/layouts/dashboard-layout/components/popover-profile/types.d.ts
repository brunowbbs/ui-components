/// <reference types="react" />
export type PopoverProfileProps = {
    userLoggedData: {
        name: string;
        description: string;
        avatar?: string;
    };
    menuItems?: {
        title: string;
        icon: React.ReactElement;
        action: () => void;
    }[];
    logoutAction: () => void;
};
