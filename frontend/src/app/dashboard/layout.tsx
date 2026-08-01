"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  TrendingUp,
  LayoutDashboard,
  Eye,
  Briefcase,
  Cpu,
  Newspaper,
  Settings,
  Menu,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  User,
  LogOut,
  X
} from "lucide-react";
import Button from "../../components/ui/Button";

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: SidebarItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Watchlist", href: "/dashboard/watchlist", icon: Eye },
  { label: "Portfolio", href: "/dashboard/portfolio", icon: Briefcase },
  { label: "Predictions", href: "/dashboard/predictions", icon: Cpu },
  { label: "News", href: "/dashboard/news", icon: Newspaper },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex bg-bg-primary text-text-primary">
      {/* ── Left Sidebar (Desktop) ── */}
      <aside
        className={clsx(
          "hidden lg:flex flex-col bg-bg-secondary border-r border-border/80 transition-all duration-300 relative z-20 shrink-0",
          isCollapsed ? "w-20" : "w-64"
        )}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center px-6 border-b border-border/50 justify-between">
          <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            {!isCollapsed && (
              <span className="text-lg font-bold tracking-tight whitespace-nowrap">
                Market<span className="gradient-text">Lens</span>
              </span>
            )}
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-light"
                )}
              >
                <Icon className={clsx("w-5 h-5 shrink-0", isActive ? "text-primary" : "text-text-muted group-hover:text-text-primary")} />
                {!isCollapsed && <span className="truncate">{item.label}</span>}
                {isActive && (
                  <span className="absolute right-0 top-1/4 bottom-1/4 w-[3px] bg-primary rounded-l" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-surface-light border border-border flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border-light cursor-pointer shadow-md"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Sidebar Footer / User Profile shortcut */}
        <div className="p-4 border-t border-border/50">
          <Link
            href="/"
            className={clsx(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-light text-text-secondary hover:text-danger transition-colors"
            )}
          >
            <LogOut className="w-5 h-5 shrink-0" />
            {!isCollapsed && <span className="text-sm font-medium">Log Out</span>}
          </Link>
        </div>
      </aside>

      {/* ── Mobile Sidebar (Drawer) ── */}
      <div
        className={clsx(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity lg:hidden",
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileOpen(false)}
      />
      <aside
        className={clsx(
          "fixed top-0 bottom-0 left-0 w-64 bg-bg-secondary border-r border-border/80 z-50 flex flex-col transition-transform duration-300 lg:hidden",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center px-6 border-b border-border/50 justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              Market<span className="gradient-text">Lens</span>
            </span>
          </Link>
          <button onClick={() => setIsMobileOpen(false)} className="text-text-muted hover:text-text-primary p-1">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className={clsx(
                  "flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-light"
                )}
              >
                <Icon className={clsx("w-5 h-5 shrink-0", isActive ? "text-primary" : "text-text-muted")} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border/50">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-light text-text-secondary hover:text-danger transition-colors"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className="text-sm font-medium">Log Out</span>
          </Link>
        </div>
      </aside>

      {/* ── Main Layout Wrapper ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar */}
        <header className="h-16 border-b border-border/50 flex items-center justify-between px-4 sm:px-6 lg:px-8 bg-bg-secondary/40 backdrop-blur sticky top-0 z-10">
          {/* Mobile menu toggle & Stock search */}
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 -ml-2 text-text-secondary hover:text-text-primary focus-ring rounded-lg"
            >
              <Menu size={20} />
            </button>

            {/* Global Search Input */}
            <div className="relative w-full hidden sm:block">
              <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search stocks, indicators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          {/* User controls / actions */}
          <div className="flex items-center gap-4">
            {/* Notification bell */}
            <button className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-light rounded-xl transition-colors relative cursor-pointer focus-ring">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
            </button>

            {/* Divider */}
            <div className="w-px h-6 bg-border" />

            {/* Profile Avatar / Menu dropdown */}
            <button className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-surface-light transition-all focus-ring cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shadow-md">
                JD
              </div>
              <span className="text-sm font-medium text-text-secondary hidden md:inline-block">John Doe</span>
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
