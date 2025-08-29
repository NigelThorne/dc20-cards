import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

interface User {
  userId: string;
  username: string;
  globalName: string | null;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthStatus = useCallback(async () => {
    try {
      // Check if we're in development mode and API routes aren't available
      const isDev = import.meta.env.DEV;

      if (isDev) {
        // Mock user for development - you can change this for testing
        const mockUser = {
          userId: "dev-user-123",
          username: "DevUser",
          globalName: "Development User",
        };

        // Check if user chose to "login" in dev mode
        const devAuth = localStorage.getItem("dev_auth");
        if (devAuth === "true") {
          setUser(mockUser);
        } else {
          setUser(null);
        }
      } else {
        const response = await fetch("/api/auth/me");
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          setUser(null);
        }
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = () => {
    const isDev = import.meta.env.DEV;

    if (isDev) {
      // In development, just set a flag and reload
      localStorage.setItem("dev_auth", "true");
      window.location.reload();
    } else {
      window.location.href = "/api/auth/discord";
    }
  };

  const logout = async () => {
    const isDev = import.meta.env.DEV;

    if (isDev) {
      // In development, just clear the flag
      localStorage.removeItem("dev_auth");
    } else {
      try {
        await fetch("/api/auth/logout", { method: "POST" });
      } catch (error) {
        console.error("Logout failed:", error);
      }
    }
    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
