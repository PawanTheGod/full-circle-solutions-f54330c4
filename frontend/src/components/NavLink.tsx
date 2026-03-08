import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        className={({ isActive, isPending }) =>
          cn(
            // Base luxury styling: wide tracking, small caps feel, and smooth transitions
            "relative text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-500 ease-expo py-2 group",
            "text-neutral-500 hover:text-neutral-900",
            
            // Active state: shift to dark and reveal the "underline"
            isActive && cn("text-neutral-900", activeClassName),
            isPending && pendingClassName,
            className
          )
        }
        {...props}
      >
        {({ isActive }) => (
          <>
            {props.children}
            {/* The "Indicator" - a minimalist dot or line that animates in */}
            <span 
              className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all duration-500 ease-expo opacity-0 scale-0",
                isActive ? "opacity-100 scale-100" : "group-hover:opacity-40 group-hover:scale-75"
              )} 
            />
          </>
        )}
      </RouterNavLink>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };