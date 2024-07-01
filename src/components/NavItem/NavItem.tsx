import { FC } from 'react';

interface NavItemProps {
  href: string;
  isActive?: boolean;
  title: string;
}

const NavItem: FC<NavItemProps> = ({ href, isActive = false, title }) => {
  const activeClass = isActive ? 'text-white bg-purple-700' : 'text-gray-700 border-b border-gray-100';

  return (
    <li>
      <a
        href={href}
        className={`block py-2 pl-3 pr-4 ${activeClass} lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700`}
        aria-current={isActive ? 'page' : undefined}
      >
        {title}
      </a>
    </li>
  );
};

export default NavItem;
