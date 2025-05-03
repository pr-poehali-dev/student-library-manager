
import { useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");
  
  // Демо-данные книг для каталога
  const books = [
    {
      id: 1,
      title: "Алгоритмы и структуры данных",
      author: "Томас Кормен, Чарльз Лейзерсон",
      category: "Компьютерные науки",
      publisher: "Вильямс",
      year: 2022,
      isbn: "978-5-9500492-8-3",
      copies: 12,
      available: 8,
      coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      title: "Физика. Полный курс",
      author: "Сергей Иванов",
      category: "Физика",
      publisher: "Питер",
      year: 2021,
      isbn: "978-5-6998876-1-2",
      copies: 15,
      available: 7,
      coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      title: "Архитектура компьютера",
      author: "Эндрю Таненбаум",
      category: "Компьютерные науки",
      publisher: "Питер",
      year: 2020,
      isbn: "978-5-4461-0749-1",
      copies: 10,
      available: 0,
      coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      title: "Высшая математика для программистов",
      author: "Анна Петрова",
      category: "Математика",
      publisher: "ДМК Пресс",
      year: 2023,
      isbn: "978-5-8459-2345-6",
      copies: 8,
      available: 4,
      coverUrl: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      title: "История искусств",
      author: "Елена Смирнова",
      category: "Искусство",
      publisher: "Альпина",
      year: 2021,
      isbn: "978-5-9614-7231-4",
      copies: 6,
      available: 2,
      coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <Layout>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Каталог книг</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => setViewMode("grid")} 
              className={viewMode === "grid" ? "bg-primary text-white" : ""}>
              <Icon name="Grid" size={18} />
            </Button>
            <Button variant="outline" onClick={() => setViewMode("table")} 
              className={viewMode === "table" ? "bg-primary text-white" : ""}>
              <Icon name="List" size={18} />
            </Button>
            <Button className="ml-2">
              <Icon name="PlusCircle" className="mr-2" size={18} />
              Добавить книгу
            </Button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Найти книгу..."
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
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="cs">Компьютерные науки</SelectItem>
                <SelectItem value="physics">Физика</SelectItem>
                <SelectItem value="math">Математика</SelectItem>
                <SelectItem value="art">Искусство</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Доступность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все книги</SelectItem>
                <SelectItem value="available">В наличии</SelectItem>
                <SelectItem value="borrowed">Выданные</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <Card key={book.id} className="overflow-hidden hover-scale">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={book.coverUrl} 
                      alt={book.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3">
                      <h3 className="font-bold">{book.title}</h3>
                      <p className="text-sm">{book.author}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm text-gray-600">{book.publisher}, {book.year}</p>
                        <p className="text-sm text-gray-600">ISBN: {book.isbn}</p>
                      </div>
                      <Badge className={book.available > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {book.available > 0 ? `Доступно: ${book.available}` : "Нет в наличии"}
                      </Badge>
                    </div>
                    <Separator className="my-3" />
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Info" size={16} className="mr-1" />
                        Детали
                      </Button>
                      <Button size="sm" className="flex-1" disabled={book.available === 0}>
                        <Icon name="BookMarked" size={16} className="mr-1" />
                        Выдать
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Название</TableHead>
                  <TableHead>Автор</TableHead>
                  <TableHead>Категория</TableHead>
                  <TableHead>Издательство, год</TableHead>
                  <TableHead>Наличие</TableHead>
                  <TableHead>Действия</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {books.map((book) => (
                  <TableRow key={book.id}>
                    <TableCell className="font-medium">{book.title}</TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>{book.category}</TableCell>
                    <TableCell>{book.publisher}, {book.year}</TableCell>
                    <TableCell>
                      <Badge className={book.available > 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                        {book.available} из {book.copies}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Icon name="Info" size={16} />
                        </Button>
                        <Button size="sm" disabled={book.available === 0}>
                          <Icon name="BookMarked" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-500">
            Показано 5 из 124 книг
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

export default Books;
