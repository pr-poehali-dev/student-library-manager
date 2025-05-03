
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export const RecentBooks = () => {
  // Демо-данные для недавно добавленных книг
  const recentBooks = [
    {
      id: 1,
      title: "Алгоритмы и структуры данных",
      author: "Томас Кормен, Чарльз Лейзерсон",
      category: "Компьютерные науки",
      isbn: "978-5-9500492-8-3",
      coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      available: true,
    },
    {
      id: 2,
      title: "Физика. Полный курс",
      author: "Сергей Иванов",
      category: "Физика",
      isbn: "978-5-6998876-1-2",
      coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      available: true,
    },
    {
      id: 3,
      title: "Архитектура компьютера",
      author: "Эндрю Таненбаум",
      category: "Компьютерные науки",
      isbn: "978-5-4461-0749-1",
      coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      available: false,
    },
  ];

  return (
    <div className="space-y-4">
      {recentBooks.map((book, index) => (
        <Card key={book.id} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/4 h-48 sm:h-auto">
                <img 
                  src={book.coverUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4">
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{book.title}</h3>
                    <p className="text-gray-600 mt-1">{book.author}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">{book.category}</Badge>
                      {book.available ? (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Доступна
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                          На руках
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p className="text-sm text-gray-500 flex items-center">
                      <Icon name="Bookmark" size={14} className="mr-1" /> ISBN: {book.isbn}
                    </p>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Добавлена: 28.04.2025</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Info" size={16} className="mr-1" />
                      Детали
                    </Button>
                    <Button size="sm" disabled={!book.available}>
                      <Icon name="BookMarked" size={16} className="mr-1" />
                      {book.available ? "Забронировать" : "Недоступна"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
