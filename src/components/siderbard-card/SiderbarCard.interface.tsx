export interface ISidebarCardProp {
    title: string;
    navItems: INavItem[];
}

export interface INavItem {
    name: string;
    icon: JSX.Element;
    link: string;
}