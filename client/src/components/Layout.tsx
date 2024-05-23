import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full h-full min-h-screen bg-gray-200 text-white overflow-hidden">
      {children}
    </div>
  );
};

export default Layout;
