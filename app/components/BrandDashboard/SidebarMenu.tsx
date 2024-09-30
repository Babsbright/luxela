import ContactIcon from "../icons/ContactIcon";
import DashboardIcon from "../icons/DashboardIcon";
import NewListingIcon from "../icons/NewListingIcon";
import NotificatIcon from "../icons/NotificationIcon";
import PendingOrdersIcon from "../icons/PendingOrders";
import ReportsIcon from "../icons/Reports";
import SalesIcon from "../icons/SalesIcon";
import SettingsIcon from "../icons/Settings";
import ShoppingCartIcon from "../icons/ShoppingCart";

export const APP_URLS = {
  COLLECTION: '/Brand/Newlisting/collection',
  SINGLEITEM: '/Brand/Newlisting/single',
};

export const menuItems = [
  {
    href: '/Brand',
    title: 'Dashboard',
    icon: DashboardIcon,
  },
  {
    href: '/dashboard/sales',
    title: 'Sales',
    icon: SalesIcon,
  },
  {
    href: '/dashboard/listings',
    title: 'My listings',
    icon: ShoppingCartIcon,
  },
  {
    title: 'New listing',
    icon: NewListingIcon,
    subItems: [
      { href: APP_URLS.COLLECTION, title: 'Collection', icon: NewListingIcon },
      { href: APP_URLS.SINGLEITEM, title: 'Single item', icon: NewListingIcon },
    ],
  },
  {
    href: '/dashboard/notifications',
    title: 'Notifications',
    icon: NotificatIcon,
    count: 2, // Notification count
  },
  {
    href: '/dashboard/orders',
    title: 'Pending orders',
    icon: PendingOrdersIcon,
    count: 10, // Pending orders count
  },
  {
    href: '/dashboard/reports',
    title: 'Reports',
    icon: ReportsIcon,
  },
  {
    href: '/dashboard/contact-support',
    title: 'Contact Support',
    icon: ContactIcon,
  },
  {
    href: '/dashboard/settings',
    title: 'Settings',
    icon: SettingsIcon,
  },
];
