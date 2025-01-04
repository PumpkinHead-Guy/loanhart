import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Users, FileText, Settings, LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-primary">سامانه مدیریت وام</h1>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-5 w-5" />
              داشبورد
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Users className="h-5 w-5" />
              کاربران
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <FileText className="h-5 w-5" />
              درخواست‌ها
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Settings className="h-5 w-5" />
              تنظیمات
            </Button>
          </nav>
          <div className="p-4 border-t">
            <Button variant="ghost" className="w-full justify-start gap-2 text-red-600">
              <LogOut className="h-5 w-5" />
              خروج
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">خوش آمدید</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;