
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { LibraryStats } from "@/components/LibraryStats";
import { RecentBooks } from "@/components/RecentBooks";
import { useState } from "react";

const LibraryHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
              <a href="/" className="hover:underline flex items-center gap-1">
                <Icon name="Home" size={18} />
                Главная
              </a>
              <a href="/books" className="hover:underline flex items-center gap-1">
                <Icon name="BookText" size={18} />
                Книги
              </a>
              <a href="/students" className="hover:underline flex items-center gap-1">
                <Icon name="Users" size={18} />
                Студенты
              </a>
              <a href="/loans" className="hover:underline flex items-center gap-1">
                <Icon name="ClipboardList" size={18} />
                Выдачи
              </a>
            </nav>
            <Button variant="outline" className="bg-white text-primary">
              <Icon name="LogIn" className="mr-2" size={18} />
              Войти
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="flex flex-col gap-8">
          <section className="search-section">
            <div className="relative max-w-3xl mx-auto">
              <Input
                type="text"
                placeholder="Поиск книг по названию, автору или ISBN..."
                className="pl-10 py-6 text-lg rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full">
                Найти
              </Button>
            </div>
          </section>

          <LibraryStats />

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BookOpen" />
                  Управление фондом
                </CardTitle>
                <CardDescription>Добавление и учет книг в библиотеке</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Каталогизация, инвентаризация и мониторинг состояния книг.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Icon name="ArrowRight" className="mr-2" />
                  Перейти
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" />
                  Работа со студентами
                </CardTitle>
                <CardDescription>Регистрация и управление читателями</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Учет читательских билетов, история выдач и управление просрочками.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Icon name="ArrowRight" className="mr-2" />
                  Перейти
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="BarChart" />
                  Статистика и отчеты
                </CardTitle>
                <CardDescription>Аналитика использования библиотеки</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Графики посещаемости, популярные издания и анализ задолженностей.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Icon name="ArrowRight" className="mr-2" />
                  Перейти
                </Button>
              </CardFooter>
            </Card>
          </section>

          <section>
            <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:w-[400px]">
                <TabsTrigger value="recent">Недавние поступления</TabsTrigger>
                <TabsTrigger value="popular">Популярные книги</TabsTrigger>
              </TabsList>
              <TabsContent value="recent" className="mt-6">
                <RecentBooks />
              </TabsContent>
              <TabsContent value="popular" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Самые популярные книги</CardTitle>
                    <CardDescription>Книги с наибольшим количеством выдач</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Здесь будет список популярных книг...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </div>
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

export default LibraryHome;
