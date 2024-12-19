export interface NavItem {
  text: string;
  path: string;
  isPrivate: boolean;
}

export const navConfig: NavItem[] = [
  { text: "HOME", path: "home", isPrivate: false },
  { text: "DASHBOARD", path: "dashboard", isPrivate: true },
  { text: "CART", path: "cart", isPrivate: false },
];