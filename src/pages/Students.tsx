
import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Students = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Демо-данные студентов
  const students = [
    {
      id: 1,
      name: "Иванов Алексей",
      faculty: "Информатика и вычислительная техника",
      group: "ИВТ-101",
      year: 3,
      cardNumber: "ST-2023-0123",
      email: "ivanov.a@example.edu",
      phone: "+7 (901) 123-45-67",
      booksCount: 2,
      hasOverdue: false,
      avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Петрова Мария",
      faculty: "Физика",
      group: "ФИЗ-205",
      year: 2,
      cardNumber: "ST-2024-0045",
      email: "petrova.m@example.edu",
      phone: "+7 (902) 234-56-78",
      booksCount: 3,
      hasOverdue: true,
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Смирнов Дмитрий",
      faculty: "Экономика",
      group: "ЭКО-301",
      year: 1,
      cardNumber: "ST-2025-0189",
      email: "smirnov.d@example.edu",
      phone: "+7 (903) 345-67-89",
      booksCount: 0,
      hasOverdue: false,
      avatarUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Козлова Екатерина",
      faculty: "Биология",
      group: "БИО-405",
      year: 4,
      cardNumber: "ST-2022-0234",
      email: "kozlova.e@example.edu",
      phone: "+7 (904) 456-78-90",
      booksCount: 5,
      hasOverdue: true,
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  // Статистические данные
  const stats = {
    totalStudents: 3426,
    activeReaders: 1248,
    studentsWithBooks: 876,
    studentsWithOverdue: 86,
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Управление студентами</h1>
          <Button>
            <Icon name="UserPlus" className="mr-2" size={18} />
            Добавить студента
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Всего студентов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalStudents}</div>
              <p className="text-xs text-muted-foreground">
                Зарегистрировано в системе
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Активных читателей</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeReaders}</div>
              <p className="text-xs text-muted-foreground">
                Посещают библиотеку
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">С книгами на руках</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.studentsWithBooks}</div>
              <p className="text-xs text-muted-foreground">
                Имеют книги во временном пользовании
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">С просрочками</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">{stats.studentsWithOverdue}</div>
              <p className="text-xs text-muted-foreground">
                Не вернули книги вовремя
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Найти студента по ФИО или номеру карты..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Факультет" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все факультеты</SelectItem>
                <SelectItem value="it">Информатика</SelectItem>
                <SelectItem value="physics">Физика</SelectItem>
                <SelectItem value="economics">Экономика</SelectItem>
                <SelectItem value="biology">Биология</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все студенты</SelectItem>
                <SelectItem value="withBooks">С книгами</SelectItem>
                <SelectItem value="overdue">С просрочкой</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Студент</TableHead>
                <TableHead>Факультет</TableHead>
                <TableHead>Группа</TableHead>
                <TableHead>Чит. билет</TableHead>
                <TableHead>Книги</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={student.avatarUrl} alt={student.name} />
                        <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-xs text-gray-500">{student.email}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.faculty}</TableCell>
                  <TableCell>{student.group} ({student.year} курс)</TableCell>
                  <TableCell>{student.cardNumber}</TableCell>
                  <TableCell>{student.booksCount}</TableCell>
                  <TableCell>
                    {student.hasOverdue ? (
                      <Badge variant="outline" className="bg-red-100 text-red-800">
                        Просрочка
                      </Badge>
                    ) : student.booksCount > 0 ? (
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        Есть книги
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-green-100 text-green-800">
                        Нет книг
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Icon name="User" size={16} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="BookOpen" size={16} />
                      </Button>
                      <Button variant="outline" size="sm" className="text-destructive border-destructive">
                        <Icon name="Bell" size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Показано 4 из 3426 студентов
          </div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" disabled>
              <Icon name="ChevronLeft" size={16} />
            </Button>
            <Button variant="outline" size="sm" className="bg-primary text-white">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">
              <Icon name="ChevronRight" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Students;
