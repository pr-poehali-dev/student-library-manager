
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
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

const Loans = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Демо-данные выдач книг
  const loans = [
    {
      id: 1,
      student: {
        id: 1,
        name: "Иванов Алексей",
        cardNumber: "ST-2023-0123",
        avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      book: {
        id: 1,
        title: "Алгоритмы и структуры данных",
        author: "Томас Кормен",
        isbn: "978-5-9500492-8-3",
        coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      issueDate: "2025-04-15",
      dueDate: "2025-05-15",
      returnDate: null,
      status: "active",
    },
    {
      id: 2,
      student: {
        id: 2,
        name: "Петрова Мария",
        cardNumber: "ST-2024-0045",
        avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      book: {
        id: 2,
        title: "Физика. Полный курс",
        author: "Сергей Иванов",
        isbn: "978-5-6998876-1-2",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      issueDate: "2025-03-10",
      dueDate: "2025-04-10",
      returnDate: null,
      status: "overdue",
    },
    {
      id: 3,
      student: {
        id: 3,
        name: "Смирнов Дмитрий",
        cardNumber: "ST-2025-0189",
        avatarUrl: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      book: {
        id: 4,
        title: "Высшая математика для программистов",
        author: "Анна Петрова",
        isbn: "978-5-8459-2345-6",
        coverUrl: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      },
      issueDate: "2025-03-20",
      dueDate: "2025-04-20",
      returnDate: "2025-04-18",
      status: "returned",
    },
  ];

  // Расчет дней просрочки или оставшихся дней
  const calculateDays = (loan) => {
    if (loan.returnDate) {
      return "Возвращена";
    }
    
    const today = new Date();
    const dueDate = new Date(loan.dueDate);
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
      return `Просрочка: ${Math.abs(diffDays)} дн.`;
    } else {
      return `Осталось: ${diffDays} дн.`;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Выдача и возврат книг</h1>
          <Button>
            <Icon name="BookPlus" className="mr-2" size={18} />
            Оформить выдачу
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Активных выдач</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,345</div>
              <p className="text-xs text-muted-foreground">
                Книг на руках у студентов
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Книг с просрочкой</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">86</div>
              <p className="text-xs text-muted-foreground">
                Не возвращены в срок
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Выдано за месяц</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">457</div>
              <p className="text-xs text-muted-foreground">
                +12% к прошлому месяцу
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
            <TabsTrigger value="active">Активные</TabsTrigger>
            <TabsTrigger value="overdue">Просроченные</TabsTrigger>
            <TabsTrigger value="history">История</TabsTrigger>
          </TabsList>
          
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="w-full md:w-2/3">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск по названию книги или имени студента..."
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
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">По умолчанию</SelectItem>
                  <SelectItem value="date-asc">По дате (сначала новые)</SelectItem>
                  <SelectItem value="date-desc">По дате (сначала старые)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <TabsContent value="active" className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Книга</TableHead>
                    <TableHead>Студент</TableHead>
                    <TableHead>Выдана</TableHead>
                    <TableHead>Срок возврата</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loans.filter(loan => loan.status === "active").map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-14 overflow-hidden rounded">
                            <img src={loan.book.coverUrl} alt={loan.book.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-medium">{loan.book.title}</p>
                            <p className="text-xs text-gray-500">{loan.book.author}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={loan.student.avatarUrl} alt={loan.student.name} />
                            <AvatarFallback>{loan.student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p>{loan.student.name}</p>
                            <p className="text-xs text-gray-500">{loan.student.cardNumber}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{loan.issueDate}</TableCell>
                      <TableCell>{loan.dueDate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-blue-100 text-blue-800">
                          {calculateDays(loan)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm">
                            <Icon name="RotateCcw" size={16} className="mr-1" />
                            Возврат
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Clock" size={16} className="mr-1" />
                            Продлить
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="overdue" className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Книга</TableHead>
                    <TableHead>Студент</TableHead>
                    <TableHead>Выдана</TableHead>
                    <TableHead>Срок возврата</TableHead>
                    <TableHead>Просрочка</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loans.filter(loan => loan.status === "overdue").map((loan) => (
                    <TableRow key={loan.id} className="bg-red-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-14 overflow-hidden rounded">
                            <img src={loan.book.coverUrl} alt={loan.book.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-medium">{loan.book.title}</p>
                            <p className="text-xs text-gray-500">{loan.book.author}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={loan.student.avatarUrl} alt={loan.student.name} />
                            <AvatarFallback>{loan.student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p>{loan.student.name}</p>
                            <p className="text-xs text-gray-500">{loan.student.cardNumber}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{loan.issueDate}</TableCell>
                      <TableCell>{loan.dueDate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-red-100 text-red-800">
                          {calculateDays(loan)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm">
                            <Icon name="RotateCcw" size={16} className="mr-1" />
                            Возврат
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive border-destructive">
                            <Icon name="Bell" size={16} className="mr-1" />
                            Уведомить
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Книга</TableHead>
                    <TableHead>Студент</TableHead>
                    <TableHead>Выдана</TableHead>
                    <TableHead>Возвращена</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loans.filter(loan => loan.status === "returned").map((loan) => (
                    <TableRow key={loan.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-14 overflow-hidden rounded">
                            <img src={loan.book.coverUrl} alt={loan.book.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-medium">{loan.book.title}</p>
                            <p className="text-xs text-gray-500">{loan.book.author}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={loan.student.avatarUrl} alt={loan.student.name} />
                            <AvatarFallback>{loan.student.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p>{loan.student.name}</p>
                            <p className="text-xs text-gray-500">{loan.student.cardNumber}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{loan.issueDate}</TableCell>
                      <TableCell>{loan.returnDate}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          Возвращена
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Icon name="FileText" size={16} className="mr-1" />
                          Детали
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Показано 3 из 1,345 записей
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

export default Loans;
