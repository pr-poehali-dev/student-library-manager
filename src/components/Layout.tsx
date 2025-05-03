
import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-4 px-6 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Icon name="BookOpen" size={28} />
              <h1 className="text-2xl font-bold">Студенческая Библиотека</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to="/" 
                className={`hover:underline flex items-center gap-1 ${isActive('/') ? 'font-bold' : ''}`}
              >
                <Icon name="Home" size={18} />
                Главная
              </Link>
              <Link 
                to="/books" 
                className={`hover:underline flex items-center gap-1 ${isActive('/books') ? 'font-bold' : ''}`}
              >
                <Icon name="BookText" size={18} />
                Книги
              </Link>
              <Link 
                to="/students" 
                className={`hover:underline flex items-center gap-1 ${isActive('/students') ? 'font-bold' : ''}`}
              >
                <Icon name="Users" size={18} />
                Студенты
              </Link>
              <Link 
                to="/loans" 
                className={`hover:underline flex items-center gap-1 ${isActive('/loans') ? 'font-bold' : ''}`}
              >
                <Icon name="ClipboardList" size={18} />
                Выдачи
              </Link>
            </nav>
            <Button variant="outline" className="bg-white text-primary">
              <Icon name="LogIn" className="mr-2" size={18} />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3">Студенческая Библиотека</h3>
              <p className="text-gray-300">Современная система управления библиотечным фондом для учебных заведений.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Контакты</h3>
              <p className="text-gray-300">Адрес: ул. Примерная, 123</p>
              <p className="text-gray-300">Телефон: +7 (123) 456-78-90</p>
              <p className="text-gray-300">Email: library@example.edu</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Часы работы</h3>
              <p className="text-gray-300">Пн-Пт: 9:00 - 20:00</p>
              <p className="text-gray-300">Сб: 10:00 - 17:00</p>
              <p className="text-gray-300">Вс: Выходной</p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-300">
            <p>© 2025 Студенческая Библиотека. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
